CREATE TABLE `chatbots` (
	`id` text PRIMARY KEY NOT NULL,
	`unique_id` text NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`config` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP)
);
