import { MongoClient, type Db } from 'mongodb';

/**
 * Cached MongoDB connection. In serverless / dev-HMR environments the module
 * can be re-evaluated repeatedly, so we cache the client on globalThis to avoid
 * opening a new connection on every request.
 */
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? 'portfolio';

export const mongoConfigured = Boolean(uri);

type Cache = { client: MongoClient; db: Db };
const globalForMongo = globalThis as unknown as { _mongo?: Promise<Cache> };

async function connect(): Promise<Cache> {
  const client = new MongoClient(uri as string, {
    serverSelectionTimeoutMS: 8000,
  });
  await client.connect();
  return { client, db: client.db(dbName) };
}

export async function getDb(): Promise<Db | null> {
  if (!uri) return null;
  try {
    if (!globalForMongo._mongo) globalForMongo._mongo = connect();
    const { db } = await globalForMongo._mongo;
    return db;
  } catch (err) {
    // Reset so the next request can retry a fresh connection.
    globalForMongo._mongo = undefined;
    console.error('[mongodb] connection failed:', err);
    return null;
  }
}
