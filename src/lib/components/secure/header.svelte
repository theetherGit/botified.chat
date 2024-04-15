<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet";
	import { Input } from "$lib/components/ui/input";
	import { Button } from "$lib/components/ui/button";
	import {
		Badge,
		Home,
		LineChart,
		Menu,
		Package,
		Package2,
		ShoppingCart,
		Users,
		Search,
		CircleUser,
		BotMessageSquare
	} from "lucide-svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import Logo from "$lib/assets/logo.svg"
	import {browser} from "$app/environment";
	import {page} from "$app/stores";
	import {onNavigate} from "$app/navigation";

	let currentPage = [''];

	$: if (browser) {
		currentPage = $page.url.pathname.split('/');
	}

	let openNavbar = false
	onNavigate(() => {
		if (openNavbar) openNavbar = false
	})
</script>

<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
	<Sheet.Root bind:open={openNavbar}>
		<Sheet.Trigger asChild let:builder>
			<Button
					variant="outline"
					size="icon"
					class="shrink-0 md:hidden"
					builders={[builder]}
			>
				<Menu class="h-5 w-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="left" class="flex flex-col">
			<nav class="grid gap-2 text-lg font-medium">
				<a href="/dashboard" class="flex items-center gap-2 text-lg font-semibold">
					<img src={Logo} alt="Botified Chat" class="h-6 w-6">
					<span class="sr-only">Botified Chat</span>
				</a>
				<a
						href="/dashboard"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 {currentPage.includes('dashboard') ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}"
				>
					<Home class="h-5 w-5" />
					Dashboard
				</a>
				<a
						href="/chatbot"
						class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 {currentPage.includes('chatbot') ? 'bg-muted text-primary' : 'text-muted-foreground hover:text-primary'}"
				>
					<BotMessageSquare class="h-5 w-5" />
					Chatbots
					<Badge
							class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
					>
						6
					</Badge>
				</a>
			</nav>
			<div class="mt-auto">
				<Card.Root>
					<Card.Header>
						<Card.Title>Upgrade to Pro</Card.Title>
						<Card.Description>
							Unlock all features and get unlimited access to our support
							team.
						</Card.Description>
					</Card.Header>
					<Card.Content>
						<Button size="sm" class="w-full">Log Out</Button>
					</Card.Content>
				</Card.Root>
			</div>
		</Sheet.Content>
	</Sheet.Root>
	<div class="w-full flex-1">
		<form>
			<div class="relative">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
						type="search"
						placeholder="Search products..."
						class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
				/>
			</div>
		</form>
	</div>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button
					builders={[builder]}
					variant="secondary"
					size="icon"
					class="rounded-full"
			>
				<CircleUser class="h-5 w-5" />
				<span class="sr-only">Toggle user menu</span>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Label>My Account</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Settings</DropdownMenu.Item>
			<DropdownMenu.Item>Support</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Logout</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</header>