<script>
	import 'root-styles';
	import Navbar from '$lib/components/pre-auth/navbar.svelte';
	import { Toaster } from "$lib/components/ui/sonner";
</script>

<Toaster />

<div class="flex min-h-screen flex-col bg-background">
	<Navbar />
	<slot />
</div>
