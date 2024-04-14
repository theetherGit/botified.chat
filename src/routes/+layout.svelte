<script>
	import '../app.pcss';
	import Navbar from "$lib/components/pre-auth/navbar.svelte"
</script>

<div class="relative flex min-h-screen flex-col bg-background">
	<Navbar />
	<slot />
</div>


