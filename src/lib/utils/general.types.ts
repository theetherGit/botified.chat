import { DrizzleD1Database } from 'drizzle-orm/d1';
import * as schema from '$lib/server/db/schema';

export type AlertMessageType = {
	alertType: 'success' | 'error' | 'warning' | 'info';
	alertText: string;
};
