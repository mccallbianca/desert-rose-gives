import { NextRequest, NextResponse } from 'next/server';

// This endpoint currently accepts the submission and returns success without
// forwarding to a backend email service. When Bianca selects an email service
// provider (see Privacy Policy placeholders), wire the forwarding here.
// In the meantime, the contact form submission is still received by the user
// via the page-level success state, and users can fall back to direct email.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const required = [
      'firstName',
      'lastName',
      'email',
      'interest',
      'message',
    ];
    for (const key of required) {
      if (!body[key] || typeof body[key] !== 'string') {
        return NextResponse.json(
          { error: `Missing field: ${key}` },
          { status: 400 },
        );
      }
    }
    if (body.message.trim().length < 20) {
      return NextResponse.json(
        { error: 'Message is too short.' },
        { status: 400 },
      );
    }

    // TODO: Forward to Bianca via the chosen email service provider.
    console.log('[contact]', {
      interest: body.interest,
      email: body.email,
      messageLength: body.message.length,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
