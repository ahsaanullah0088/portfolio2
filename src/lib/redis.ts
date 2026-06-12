/**
 * Minimal Upstash Redis client over the REST API (no SDK dependency).
 * Sends a single command as a JSON array in the POST body, e.g.
 *   redisCommand(['LPUSH', 'contact:messages', jsonString])
 *
 * Reads credentials from either naming convention:
 *   - Vercel KV:      KV_REST_API_URL      / KV_REST_API_TOKEN
 *   - Upstash native: UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
 */
const URL_ENV = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const TOKEN_ENV = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const redisConfigured = Boolean(URL_ENV && TOKEN_ENV);

export async function redisCommand<T = unknown>(
  args: Array<string | number>
): Promise<T | null> {
  if (!URL_ENV || !TOKEN_ENV) return null;
  try {
    const res = await fetch(URL_ENV, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN_ENV}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args.map(String)),
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data?.result ?? null) as T | null;
  } catch {
    return null;
  }
}
