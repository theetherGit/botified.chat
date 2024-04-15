<script lang="ts">
	import type {PageServerData} from "./$types";
	import {ScrollArea} from "$lib/components/ui/scroll-area";
	import EmptyBoard from "$lib/components/secure/create-chatbot-board.svelte"
	export let data: PageServerData
</script>
<div class="flex items-center"><h1 class="text-lg font-semibold md:text-2xl">Dashboard</h1></div>
{#if data.chatbotList}
	<ScrollArea class="flex flex-1 rounded-md border ">
		<div class="flex flex-col h-full w-full">

		</div>
	</ScrollArea>
{:else }
	<EmptyBoard />
{/if}
