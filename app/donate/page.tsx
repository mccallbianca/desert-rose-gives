import Link from 'next/link';
import DonateButton from '@/components/DonateButton';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Donate',
  description:
    'Donate to Desert Rose Gives securely through PayPal. Desert Rose Gives is a Nevada 501(c)(3) nonprofit corporation. Your gift is tax deductible to the extent allowed by law.',
  alternates: { canonical: '/donate' },
};

export default function DonatePage() {
  return (
    <section className="bg-dr-cream">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-20 text-center">
        <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
          Donate
        </p>
        <h1 className="mb-6">Fund the work, directly.</h1>
        <p className="text-dr-ink mb-2">
          Desert Rose Gives donor funds are used solely for Desert Rose Gives
          programs, research, and community workforce development. They are
          not used to fund the ECQO Holdings platform or any other for-profit
          product.
        </p>
        <p className="text-dr-ink mb-8">
          Donations are processed securely through PayPal. You do not need a
          PayPal account to donate; PayPal accepts major credit and debit
          cards.
        </p>
        <div className="flex justify-center mb-6">
          <DonateButton label="Donate via PayPal" />
        </div>
        <p className="text-sm text-dr-slate">
          Desert Rose Gives is a Nevada 501(c)(3) nonprofit corporation, EIN{' '}
          {SITE.ein}. Your contribution is tax deductible to the extent
          allowed by law. For receipts or questions, email{' '}
          <a href={`mailto:${SITE.emails.grants}`}>{SITE.emails.grants}</a>.
        </p>
        <p className="text-sm mt-6">
          See our full{' '}
          <Link href="/get-involved#donate" className="underline">
            Donate information
          </Link>{' '}
          including donor acknowledgment policy.
        </p>
      </div>
    </section>
  );
}
