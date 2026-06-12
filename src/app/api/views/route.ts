import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Page-view counter backed by Upstash Redis (REST API — no SDK needed).
 *
 * Configure with EITHER naming convention (both supported):
 *   - Vercel KV integration:  KV_REST_API_URL      + KV_REST_API_TOKEN
 *   - Upstash native:         UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
 *
 * Until those env vars exist, the endpoint returns { count: null } and the UI
 * hides the counter — so nothing looks broken before it's set up.
 */
const URL_ENV = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const TOKEN_ENV = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = 'views:total';

async function redis(command: string): Promise<number | null> {
  if (!URL_ENV || !TOKEN_ENV) return null;
  try {
    const res = await fetch(`${URL_ENV}/${command}/${KEY}`, {
      headers: { Authorization: `Bearer ${TOKEN_ENV}` },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    const n = Number(data?.result);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

// GET → read current count (no increment)
export async function GET() {
  const count = await redis('get');
  return NextResponse.json({ count });
}

// POST → increment, then return the new count
export async function POST() {
  const count = await redis('incr');
  return NextResponse.json({ count });
}
