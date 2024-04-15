<script>
	import 'root-styles';
	import Navbar from '$lib/components/pre-auth/navbar.svelte';
</script>

<div class="flex min-h-screen flex-col bg-background">
	<Navbar />
	<slot />
</div>
