import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import type { DatabaseWithSchema } from './types';

export let db: null | DatabaseWithSchema = null;

// Currently, I'm creating connection in hooks.server.ts so it will be initiated before everything.
export const initDB = async (cloudflareD1: D1Database) => {
	db = drizzle(cloudflareD1, { schema });
	return db;
};
