import { NextResponse } from 'next/server';
import Stripe from 'stripe';

/**
 * POST /api/donate
 * Body: { amount: number (USD dollars), mode: 'one_time' | 'monthly', email?: string }
 * Returns: { url: string } — a Stripe Checkout URL to redirect to.
 *
 * Env required (set in Vercel → Project → Settings → Environment Variables):
 *  - STRIPE_SECRET_KEY        (sk_live_... or sk_test_...)
 *  - NEXT_PUBLIC_SITE_URL     (https://desertrosegives.org)
 */

const DONATION_PRESETS_MIN = 5;   // $5 minimum
const DONATION_PRESETS_MAX = 50000; // $50k max via this flow

export async function POST(req: Request) {
  try {
    const { amount, mode, email } = await req.json();

    const dollars = Number(amount);
    if (!Number.isFinite(dollars) || dollars < DONATION_PRESETS_MIN || dollars > DONATION_PRESETS_MAX) {
      return NextResponse.json(
        { error: `Donation amount must be between $${DONATION_PRESETS_MIN} and $${DONATION_PRESETS_MAX}.` },
        { status: 400 }
      );
    }

    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json({ error: 'Stripe not configured.' }, { status: 500 });
    }

    const stripe = new Stripe(secret, { apiVersion: '2025-02-24.acacia' });
    const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://desertrosegives.org';

    const unitAmount = Math.round(dollars * 100);
    const recurring = mode === 'monthly';

    const session = await stripe.checkout.sessions.create({
      mode: recurring ? 'subscription' : 'payment',
      submit_type: recurring ? undefined : 'donate',
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: unitAmount,
            recurring: recurring ? { interval: 'month' } : undefined,
            product_data: {
              name: recurring
                ? 'Monthly giving — Desert Rose Gives'
                : 'Donation — Desert Rose Gives',
              description:
                'Tax-deductible contribution to Desert Rose Gives, a 501(c)(3) nonprofit.',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${site}/donate?status=success`,
      cancel_url: `${site}/donate?status=cancel`,
      allow_promotion_codes: false,
      metadata: { source: 'desertrosegives.org', mode: recurring ? 'monthly' : 'one_time' },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe checkout error', err?.message || err);
    return NextResponse.json(
      { error: 'Unable to start checkout. Please try again.' },
      { status: 500 }
    );
  }
}
