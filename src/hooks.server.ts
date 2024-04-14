import type { Handle } from '@sveltejs/kit';
import { initDB } from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
	await initDB(event.platform?.PRIMARY_DB as D1Database);
	return resolve(event);
};
