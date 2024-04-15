import type { Actions, PageServerLoad } from './$types';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { SignupFormZodAdapter } from '$lib/utils/schema.zod';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { users } from '$lib/server/db/schema';
import { generateId } from 'lucia';
import { insertNewUser } from '$lib/server/db/utils';
import { createAndSetSession } from '$lib/server/auth/utils';
import { luciaManager } from '$lib/server/auth/lucia.manager';
import { redirect } from '@sveltejs/kit';
import { DASHBOARD_ROUTE } from '$lib/utils/const';
import { generateHashWithScrypt } from '$lib/server/auth/scrypt';

export const load: PageServerLoad = async () => {
	return {
		signupForm: await superValidate(SignupFormZodAdapter)
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const signupForm = await superValidate(request, SignupFormZodAdapter);

		if (!signupForm.valid) {
			return message(signupForm, {
				type: 'error',
				message: 'Please check your form, there is a problem with your submitted form.'
			});
		}
		try {
			const existingUser = await db?.query.users.findFirst({
				where: eq(users.email, signupForm.data.email),
				columns: {
					id: true
				}
			});

			if (existingUser) {
				return setError(signupForm, 'email', 'Email is already registered.');
			}

			const userId = generateId(15);
			const hashedPassword = await generateHashWithScrypt(signupForm.data.password);

			await insertNewUser({
				id: userId,
				name: signupForm.data.name,
				email: signupForm.data.email,
				password: hashedPassword
			});

			await createAndSetSession(luciaManager, userId, cookies);
		} catch (error) {
			console.error(error);

			return message(signupForm, {
				alertType: 'error',
				alertText: 'An error occurred while processing your request. Please try again.'
			});
		}
		redirect(303, DASHBOARD_ROUTE);
	}
};
