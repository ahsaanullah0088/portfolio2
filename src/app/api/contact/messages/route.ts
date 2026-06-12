import { NextResponse } from 'next/server';
import { redisCommand } from '@/lib/redis';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MESSAGES_KEY = 'contact:messages';

type Message = { name: string; email: string; message: string; at: string };

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

  const raw = (await redisCommand<string[]>(['LRANGE', MESSAGES_KEY, '0', '199'])) ?? [];
  const messages = raw
    .map((s) => {
      try {
        return JSON.parse(s) as Message;
      } catch {
        return null;
      }
    })
    .filter((m): m is Message => m !== null);

  return NextResponse.json({ ok: true, count: messages.length, messages });
}
