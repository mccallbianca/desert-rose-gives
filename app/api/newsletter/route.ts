import { NextRequest, NextResponse } from 'next/server';

// Newsletter subscription endpoint. Logs the submission and returns success.
// Wire to the chosen email service provider when selected (see Privacy Policy).
export async function POST(req: NextRequest) {
  try {
    const { firstName, email } = await req.json();
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required.' },
        { status: 400 },
      );
    }
    console.log('[newsletter]', { firstName, email });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
