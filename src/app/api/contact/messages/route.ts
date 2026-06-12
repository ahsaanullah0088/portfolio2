import { NextResponse } from 'next/server';
import { getMessages } from '@/lib/contactStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Returns stored contact messages — protected by INBOX_SECRET.
 * Provide the secret via `?key=...` or an `Authorization: Bearer ...` header.
 */
export async function GET(req: Request) {
  const secret = process.env.INBOX_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'Inbox is not configured (set INBOX_SECRET).' },
      { status: 503 }
    );
  }

  const url = new URL(req.url);
  const provided =
    url.searchParams.get('key') ??
    req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ??
    '';

  if (provided !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized.' }, { status: 401 });
  }

  const messages = await getMessages();
  return NextResponse.json({ ok: true, count: messages.length, messages });
}
