import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { profile } from '@/data/profile';
import { saveMessage } from '@/lib/contactStore';

export const runtime = 'nodejs';

type Payload = {
  name?: string;
  email?: string;
  message?: string;
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

  if (name.length < 2 || !emailRe.test(email) || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: 'Please provide a name, valid email, and a longer message.' },
      { status: 422 }
    );
  }

  // 1) Persist to your own DB (MongoDB, or Redis fallback) — never lost.
  const stored = await saveMessage({
    name,
    email,
    message,
    at: new Date().toISOString(),
  });

  // 2) Notify by email: Gmail (preferred) → Resend → mailto fallback.
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO ?? profile.email;
  const subject = `New portfolio message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"Portfolio Contact" <${gmailUser}>`,
        to,
        replyTo: email,
        subject,
        text,
      });
      return NextResponse.json({ ok: true, via: 'gmail', stored });
    } catch (err) {
      console.error('[contact] Gmail send failed:', err);
      // fall through — message is still saved in Redis (if stored)
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const { data, error } = await resend.emails.send({
        from: process.env.CONTACT_FROM ?? 'Portfolio <onboarding@resend.dev>',
        to: [to],
        replyTo: email,
        subject,
        text,
      });
      if (!error) return NextResponse.json({ ok: true, via: 'resend', id: data?.id, stored });
      console.error('[contact] Resend error:', error);
    } catch (err) {
      console.error('[contact] Resend send failed:', err);
    }
  }

  // No email delivered. If we at least saved it, that's a success.
  if (stored) return NextResponse.json({ ok: true, via: 'stored', stored: true });

  // Nothing configured at all — let the client open a prefilled mailto.
  return NextResponse.json({ ok: true, fallback: true });
}
