<script lang="ts">
	import {browser} from "$app/environment";
	import {page} from "$app/stores";
	import {
		Badge,
		Bell,
		BotMessageSquare,
		Home,
		LineChart,
		Package,
		Package2,
		ShoppingCart,
		Users
	} from "lucide-svelte";
	import {Button} from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import * as Card from "$lib/components/ui/card/index.js";
	import Logo from "$lib/assets/logo.svg"

	let currentPage = [''];

	$: if (browser) {
		currentPage = $page.url.pathname.split('/');
	}
</script>
<div class="hidden border-r bg-muted/40 md:block">
	<div class="flex h-full max-h-screen flex-col gap-2">
		<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
			<a href="/dashboard" class="flex items-center gap-2 font-semibold">
				<img src={Logo} class="h-6 w-6" alt="Botified Chat"/>
				<span class="">Botified Chat</span>
			</a>
			<Button variant="outline" size="icon" class="ml-auto h-8 w-8">
				<Bell class="h-4 w-4" />
				<span class="sr-only">Toggle notifications</span>
			</Button>
		</div>
		<div class="flex-1">
			<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
				<a
						href="/dashboard"
						class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all {currentPage.includes('dashboard') ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}"
				>
					<Home class="h-4 w-4" />
					Dashboard
				</a>
				<a
						href="/chatbot"
						class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all {currentPage.includes('chatbot') ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}"
				>
					<BotMessageSquare class="h-4 w-4" />
					Chatbots
<!--					<Badge-->
<!--							class="ml-auto flex text-primary h-6 w-6 shrink-0 items-center justify-center rounded-full"-->
<!--					>-->
<!--						<span>6</span>6-->
<!--					</Badge>-->
				</a>
			</nav>
		</div>
		<div class="mt-auto p-4">
			<Card.Root
					data-x-chunk-name="dashboard-02-chunk-0"
					data-x-chunk-description="A card with a call to action"
			>
				<Card.Header class="p-2 pt-0 md:p-4">
					<Card.Title>Upgrade to Pro</Card.Title>
					<Card.Description>
						I'm just getting started.
					</Card.Description>
				</Card.Header>
				<Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
					<Button size="sm" class="w-full">Log Out</Button>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</div>