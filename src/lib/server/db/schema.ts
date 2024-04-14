import { sql } from 'drizzle-orm';
import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import type { ChatbotConfig } from '$lib/utils/chatbot.types';

export const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	password: text('password').notNull(),
	createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: text('updated_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.$onUpdateFn(() => sql`(CURRENT_TIMESTAMP)`)
});

export const userSession = sqliteTable('session', {
	id: text('id').notNull().primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	expiresAt: integer('expires_at').notNull()
});

export const chatbots = sqliteTable('chatbots', {
	id: text('id').primaryKey(),
	uniqueId: text('unique_id').notNull(),
	userId: text('user_id').notNull(),
	name: text('name').notNull(),
	config: text('config', { mode: 'json' }).$type<ChatbotConfig>()
});
