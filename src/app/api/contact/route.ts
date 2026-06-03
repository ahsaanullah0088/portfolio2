import { NextResponse } from 'next/server';
import { profile } from '@/data/profile';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  // honeypot — bots fill this; humans never see it.
  company?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  // Honeypot: silently accept to avoid tipping off bots.
  if (body.company) return NextResponse.json({ ok: true });

  if (name.length < 2 || !emailRe.test(email) || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: 'Please provide a name, valid email, and a longer message.' },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  // If an email provider is configured, deliver the message. Otherwise we still
  // return success and the client falls back to a prefilled mailto link.
  if (apiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>',
          to: [process.env.CONTACT_TO ?? profile.email],
          reply_to: email,
          subject: `New portfolio message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });
      if (!res.ok) throw new Error(`Provider responded ${res.status}`);
      return NextResponse.json({ ok: true });
    } catch {
      return NextResponse.json(
        { ok: false, error: 'Could not send right now. Please email me directly.' },
        { status: 502 }
      );
    }
  }

  // No provider configured — tell the client to use the mailto fallback.
  return NextResponse.json({ ok: true, fallback: true });
}
