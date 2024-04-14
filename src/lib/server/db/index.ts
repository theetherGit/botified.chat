import {drizzle, DrizzleD1Database} from 'drizzle-orm/d1';

export let db: null | DrizzleD1Database = null

// Always load this on every server route where we are using anything related to Cloudflare D1
export const initDB = async (cloudflareD1: D1Database) => {
    db = drizzle(cloudflareD1)
    return db
}
