import { getDb, mongoConfigured } from './mongodb';
import { redisCommand } from './redis';

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  at: string; // ISO timestamp
};

const COLLECTION = 'contact_messages';
const REDIS_KEY = 'contact:messages';

/**
 * Persist a contact submission. Uses MongoDB when MONGODB_URI is set, otherwise
 * falls back to Upstash Redis. Returns true if the message was saved somewhere.
 */
export async function saveMessage(msg: ContactMessage): Promise<boolean> {
  if (mongoConfigured) {
    try {
      const db = await getDb();
      if (db) {
        await db.collection(COLLECTION).insertOne({ ...msg, createdAt: new Date(msg.at) });
        return true;
      }
    } catch (err) {
      console.error('[contact] Mongo save failed:', err);
    }
  }

  // Fallback: Redis list (keep most recent 200).
  const pushed = await redisCommand<number>(['LPUSH', REDIS_KEY, JSON.stringify(msg)]);
  if (pushed !== null) {
    await redisCommand(['LTRIM', REDIS_KEY, '0', '199']);
    return true;
  }
  return false;
}

/** Read recent contact submissions (newest first). */
export async function getMessages(limit = 200): Promise<ContactMessage[]> {
  if (mongoConfigured) {
    try {
      const db = await getDb();
      if (db) {
        const docs = await db
          .collection(COLLECTION)
          .find({}, { projection: { _id: 0 } })
          .sort({ createdAt: -1 })
          .limit(limit)
          .toArray();
        return docs.map((d) => ({
          name: d.name,
          email: d.email,
          message: d.message,
          at: d.at ?? d.createdAt?.toISOString?.() ?? '',
        }));
      }
    } catch (err) {
      console.error('[contact] Mongo read failed:', err);
    }
  }

  const raw = (await redisCommand<string[]>(['LRANGE', REDIS_KEY, '0', String(limit - 1)])) ?? [];
  return raw
    .map((s) => {
      try {
        return JSON.parse(s) as ContactMessage;
      } catch {
        return null;
      }
    })
    .filter((m): m is ContactMessage => m !== null);
}
