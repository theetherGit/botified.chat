// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { ExecutionContext } from '@cloudflare/workers-types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env: {
				AI: Fetcher;
				BOTIFIED_KV: KVNamespace;
				PRIMARY_DB: D1Database;
				CHAT_DB: D1Database;
				BOTIFIED_VECTOR: VectorizeIndex;
				PUBLIC_BUCKET: R2Bucket;
				PRIVATE_BUCKET: R2Bucket;
			};
			ctx: ExecutionContext;
		}
	}
}

export {};
