<script lang="ts">
	import type {PageServerData} from "./$types";
	import {ScrollArea} from "$lib/components/ui/scroll-area";
	import EmptyBoard from "$lib/components/secure/create-chatbot-board.svelte"
	import * as Table from "$lib/components/ui/table/index.js";
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import {Activity, Brain, CreditCard, DollarSign, MessageSquareDot, Send, Users} from "lucide-svelte";

	export let data: PageServerData
</script>
<div class="flex items-center"><h1 class="text-lg font-semibold md:text-2xl">Dashboard (It's Just for show)</h1></div>
{#if data.chatbotList}
	<ScrollArea class="flex flex-1 rounded-md ">
		<div class="flex flex-col h-full w-full">
			<div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 px-2">
				<Card.Root
						data-x-chunk-name="dashboard-01-chunk-0"
						data-x-chunk-description="A card showing the total revenue in USD and the percentage difference from last month."
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">Total Message</Card.Title>
						<Send class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">45,231.89</div>
						<p class="text-xs text-muted-foreground">+20.1% from last month</p>
					</Card.Content>
				</Card.Root>
				<Card.Root
						data-x-chunk-name="dashboard-01-chunk-1"
						data-x-chunk-description="A card showing the total subscriptions and the percentage difference from last month."
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">New Customers</Card.Title>
						<Users class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+2350</div>
						<p class="text-xs text-muted-foreground">+180.1% from last month</p>
					</Card.Content>
				</Card.Root>
				<Card.Root
						data-x-chunk-name="dashboard-01-chunk-2"
						data-x-chunk-description="A card showing the total sales and the percentage difference from last month."
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">Neurons Used</Card.Title>
						<Brain class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+12,234</div>
						<p class="text-xs text-muted-foreground">+19% from last month</p>
					</Card.Content>
				</Card.Root>
				<Card.Root
						data-x-chunk-name="dashboard-01-chunk-3"
						data-x-chunk-description="A card showing the total active users and the percentage difference from last hour."
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-sm font-medium">Live Conversations</Card.Title>
						<MessageSquareDot class="h-4 w-4 text-muted-foreground" />
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">+5</div>
						<p class="text-xs text-muted-foreground">+4 since last hour</p>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</ScrollArea>
{:else }
	<EmptyBoard />
{/if}
