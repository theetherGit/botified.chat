import z from 'zod';
import {
	EMAIL_MAX_LENGTH,
	EMAIL_MIN_LENGTH,
	NAME_MAX_LENGTH,
	NAME_MIN_LENGTH,
	PASSWORD_MAX_LENGTH,
	PASSWORD_MIN_LENGTH
} from '$lib/utils/const';
import { zod } from 'sveltekit-superforms/adapters';

export const LoginFormSchema = z.object({
	email: z
		.string({ required_error: 'Email is required for login to your account.' })
		.email('Provide a valid email.')
		.min(EMAIL_MIN_LENGTH, `Email is too short: ${EMAIL_MIN_LENGTH}`)
		.max(EMAIL_MAX_LENGTH, `Email is too long: ${EMAIL_MAX_LENGTH}`),
	password: z
		.string({ required_error: 'Password is also important when you provide email to login.' })
		.min(PASSWORD_MIN_LENGTH, `Invalid Password: Please remember how big is your password.`)
		.max(PASSWORD_MAX_LENGTH, `Invalid Password: Password is not supposed to be this long.`)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			'Invalid Password: Contains something illegal.'
		)
});

export const SignupFormSchema = z.object({
	name: z
		.string({ required_error: 'Name is required.' })
		.min(NAME_MIN_LENGTH, 'Name is too short.')
		.max(NAME_MAX_LENGTH, 'Name is too big.'),
	email: z
		.string({ required_error: 'Email is required to create your account.' })
		.email('Provide a valid email.')
		.min(EMAIL_MIN_LENGTH, `Email is too short: ${EMAIL_MIN_LENGTH}`)
		.max(EMAIL_MAX_LENGTH, `Email is too long: ${EMAIL_MAX_LENGTH}`),
	password: z
		.string({
			required_error: 'Password is also important when you provide email to create account.'
		})
		.min(PASSWORD_MIN_LENGTH, `Minimum length for password is ${PASSWORD_MIN_LENGTH}`)
		.max(PASSWORD_MAX_LENGTH, `Maximum length for password is ${PASSWORD_MAX_LENGTH}`)
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			'Password must contain lowercase, uppercase, number, and special character'
		)
});

export const LoginFormZodAdapter = zod(LoginFormSchema);
export const SignupFormZodAdapter = zod(SignupFormSchema);
