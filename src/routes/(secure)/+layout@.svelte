<script>
	import 'root-styles';
	import SideNav from '$lib/components/secure/side-nav.svelte';
	import Header from '$lib/components/secure/header.svelte';
	import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>

<div
	class="relative flex min-h-screen flex-col bg-background"
	id="page"
	data-vaul-drawer-wrapper=""
>
	<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
		<SideNav />
		<div class="flex flex-col">
			<Header />
			<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<slot />
			</main>
		</div>
	</div>
</div>
