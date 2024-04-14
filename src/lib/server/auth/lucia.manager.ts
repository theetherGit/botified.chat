import { dev } from '$app/environment';

import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Lucia } from 'lucia';

import { db } from '../db';
import * as schema from '../db/schema';

const dbAdapter = new DrizzleSQLiteAdapter(
	db as DrizzleD1Database<typeof schema>,
	schema.userSession,
	schema.users
);

export const luciaManager = new Lucia(dbAdapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},

	getUserAttributes: (attributes) => {
		return {
			name: attributes.name,
			email: attributes.email
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			name: string;
			email: string;
		};
	}
}
