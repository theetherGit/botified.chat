import { type Handle, redirect } from '@sveltejs/kit';
import { initDB } from '$lib/server/db';
import { luciaManager, updateAdapterWithManagerAtRT } from '$lib/server/auth/lucia.manager';
import { deleteSessionCookie } from '$lib/server/auth/utils';
import { DASHBOARD_ROUTE } from '$lib/utils/const';

export const handle: Handle = async ({ event, resolve }) => {
	// Retrieve the session ID from the browser's cookies
	const sessionId = null;
	// const sessionId = event.cookies.get(luciaManager.sessionCookieName);
	// If there's no session ID, set both user and session to null and resolve the request
	if (!sessionId) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const db = await initDB(event.platform?.env.PRIMARY_DB as D1Database);
	updateAdapterWithManagerAtRT(db);

	// Attempt to validate the session using the retrieved session ID
	const { session, user } = await luciaManager.validateSession(sessionId);

	// If the session is newly created (due to session expiration extension), generate a new session cookie
	if (session?.fresh) {
		const sessionCookie = luciaManager.createSessionCookie(session.id);

		// Set the new session cookie in the browser
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}

	// If the session is invalid, generate a blank session cookie to remove the existing session cookie from the browser
	if (!session) {
		await deleteSessionCookie(luciaManager, event.cookies);
	}

	// If a user is logged in and attempts to access the login or register page, redirect them to the dashboard
	if (session && ['/login', '/register'].includes(event.url.pathname)) {
		redirect(303, DASHBOARD_ROUTE);
	}

	// Persist the user and session information in the event locals for use within endpoint handlers and page components
	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};
