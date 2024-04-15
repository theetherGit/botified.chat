import { db } from './index';
import { users } from './schema';
import type { UserInsertSchema } from './types';

export const insertNewUser = async (user: UserInsertSchema) => {
	return db?.insert(users).values(user);
};
