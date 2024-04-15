import { dev } from '$app/environment';
import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { Lucia } from 'lucia';

import { db } from '../db';
import * as schema from '../db/schema';
import type { DatabaseWithSchema } from '$lib/server/db/types';

export let dbAdapter = new DrizzleSQLiteAdapter(
	db as DrizzleD1Database<typeof schema>,
	schema.userSession,
	schema.users
);

export let luciaManager = new Lucia(dbAdapter, {
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

export function updateAdapterWithManagerAtRT(db: DatabaseWithSchema) {
	dbAdapter = new DrizzleSQLiteAdapter(db, schema.userSession, schema.users);
	luciaManager = new Lucia(dbAdapter, {
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
}

declare module 'lucia' {
	interface Register {
		Lucia: typeof luciaManager;
		DatabaseUserAttributes: {
			name: string;
			email: string;
		};
	}
}
