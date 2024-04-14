import { DrizzleD1Database } from 'drizzle-orm/d1';
import * as schema from '$lib/server/db/schema';
import { users } from '$lib/server/db/schema';

export type DatabaseWithSchema = DrizzleD1Database<typeof schema>;

export type UserInsertSchema = typeof users.$inferInsert;
