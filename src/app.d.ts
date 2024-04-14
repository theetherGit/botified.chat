// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			AI: Fetcher
			BOTIFIED_KV: KVNamespace
			PRIMARY_DB: D1Database
			CHAT_DB: D1Database
			BOTIFIED_VECTOR: VectorizeIndex
			PUBLIC_BUCKET: R2Bucket
			PRIVATE_BUCKET: R2Bucket
		}
	}
}

export {};
