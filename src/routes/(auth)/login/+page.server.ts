import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { LoginFormZodAdapter } from '$lib/utils/schema.zod';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { luciaManager } from '$lib/server/auth/lucia.manager';
import { createAndSetSession } from '$lib/server/auth/utils';
import { redirect } from '@sveltejs/kit';
import { DASHBOARD_ROUTE } from '$lib/utils/const';
import { validateScryptHash } from '$lib/server/auth/scrypt';

export const load: PageServerLoad = async () => {
	return {
		loginForm: await superValidate(LoginFormZodAdapter)
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const loginForm = await superValidate(request, LoginFormZodAdapter);

		if (!loginForm.valid) {
			return message(loginForm, {
				type: 'error',
				message: 'Please check your form, there is a problem with your submitted form.'
			});
		}

		const existingUser = await db?.query.users.findFirst({
			where: eq(users.email, loginForm.data.email),
			columns: {
				id: true,
				name: true,
				password: true
			}
		});

		if (!existingUser) {
			return setError(loginForm, 'email', 'Email is not registered.');
		}

		const validPassword = await validateScryptHash(loginForm.data.password, existingUser.password);

		if (!validPassword) {
			return setError(loginForm, 'password', 'Incorrect password.');
		}

		await createAndSetSession(luciaManager, existingUser.id, cookies);
		redirect(303, DASHBOARD_ROUTE);
	}
};
