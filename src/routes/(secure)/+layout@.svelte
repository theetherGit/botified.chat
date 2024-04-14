<script lang="ts">
	import 'root-styles';
</script>

<!--<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper="">-->
<!--    <div class="w-full h-full theme-zinc">-->
<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<div class="hidden border-r bg-muted/40 md:block">
		<div class="flex h-full max-h-screen flex-col gap-2">
			<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
				<a href="/" class="flex items-center gap-2 font-semibold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-package-2 h-6 w-6"
					>
						<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
						<path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
						<path d="M12 3v6"></path>
					</svg>
					<span class="">Acme Inc</span></a
				>
				<button
					type="button"
					tabindex="0"
					class="ml-auto inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					data-button-root=""
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-bell h-4 w-4"
					>
						<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
						<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
					</svg>
					<span class="sr-only">Toggle notifications</span></button
				>
			</div>
			<div class="flex-1">
				<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
					<a
						href="##"
						class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide-icon lucide lucide-home h-4 w-4"
						>
							<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
							<polyline points="9 22 9 12 15 12 15 22"></polyline>
						</svg>
						Dashboard</a
					>
					<a
						href="##"
						class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide-icon lucide lucide-shopping-cart h-4 w-4"
						>
							<circle cx="8" cy="21" r="1"></circle>
							<circle cx="19" cy="21" r="1"></circle>
							<path
								d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
							></path>
						</svg>
						Orders
						<span
							class="ml-auto flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
							>6</span
						></a
					>
					<a
						href="##"
						class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide-icon lucide lucide-package h-4 w-4"
						>
							<path d="m7.5 4.27 9 5.15"></path>
							<path
								d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
							></path>
							<path d="m3.3 7 8.7 5 8.7-5"></path>
							<path d="M12 22V12"></path>
						</svg>
						Products</a
					>
					<a
						href="##"
						class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide-icon lucide lucide-users h-4 w-4"
						>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
						Customers</a
					>
					<a
						href="##"
						class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide-icon lucide lucide-line-chart h-4 w-4"
						>
							<path d="M3 3v18h18"></path>
							<path d="m19 9-5 5-4-4-3 3"></path>
						</svg>
						Analytics</a
					>
				</nav>
			</div>
			<div class="mt-auto p-4">
				<div
					class="rounded-lg border bg-card text-card-foreground shadow-sm"
					data-x-chunk-name="dashboard-02-chunk-0"
					data-x-chunk-description="A card with a call to action"
				>
					<div class="flex flex-col space-y-1.5 p-2 pt-0 md:p-4">
						<h3 class="text-lg font-semibold leading-none tracking-tight">Upgrade to Pro</h3>
						<p class="text-sm text-muted-foreground">
							Unlock all features and get unlimited access to our support team.
						</p>
					</div>
					<div class="p-2 pt-0 md:p-4 md:pt-0">
						<button
							type="button"
							tabindex="0"
							class="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
							data-button-root=""
							>Upgrade
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<button
				type="button"
				tabindex="0"
				aria-haspopup="dialog"
				aria-expanded="false"
				data-melt-dialog-trigger=""
				data-dialog-trigger=""
				class="inline-flex h-10 w-10 shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden"
				data-button-root=""
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide-icon lucide lucide-menu h-5 w-5"
				>
					<line x1="4" x2="20" y1="12" y2="12"></line>
					<line x1="4" x2="20" y1="6" y2="6"></line>
					<line x1="4" x2="20" y1="18" y2="18"></line>
				</svg>
				<span class="sr-only">Toggle navigation menu</span></button
			>
			<div class="w-full flex-1">
				<form>
					<div class="relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide-icon lucide lucide-search absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="m21 21-4.3-4.3"></path>
						</svg>
						<input
							class="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pl-8 text-sm shadow-none ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:w-2/3 lg:w-1/3"
							type="search"
							placeholder="Search products..."
						/>
					</div>
				</form>
			</div>
			<button
				type="button"
				tabindex="0"
				aria-controls="CWXU_61Frg"
				aria-expanded="false"
				data-state="closed"
				id="Br34YaBymW"
				data-melt-dropdown-menu-trigger=""
				data-menu-trigger=""
				class="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full bg-secondary text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
				data-button-root=""
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide-icon lucide lucide-circle-user h-5 w-5"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<circle cx="12" cy="10" r="3"></circle>
					<path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
				</svg>
				<span class="sr-only">Toggle user menu</span></button
			>
		</header>
		<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			<div class="flex items-center">
				<h1 class="text-lg font-semibold md:text-2xl">Inventory</h1>
			</div>
			<div
				data-x-chunk-name="dashboard-02-chunk-1"
				data-x-chunk-description="An empty state showing no products with a heading, description and a call to action to add a product."
				class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
			>
				<div class="flex flex-col items-center gap-1 text-center">
					<h3 class="text-2xl font-bold tracking-tight">You have no products</h3>
					<p class="text-sm text-muted-foreground">
						You can start selling as soon as you add a product.
					</p>
					<button
						type="button"
						tabindex="0"
						class="mt-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						data-button-root=""
						>Add Product
					</button>
				</div>
			</div>
		</main>
	</div>
</div>
<div
	class="group invisible rounded-xl bg-background shadow-xl"
	data-x-chunk-container-for="dashboard-02-chunk-0"
	style="z-index: 40; position: absolute; top: 1142px; left: 16px; width: 247px; height: 170px;"
>
	<div class="relative z-30">
		<div
			class="rounded-lg border bg-card text-card-foreground shadow-sm"
			data-x-chunk-name="dashboard-02-chunk-0"
			data-x-chunk-description="A card with a call to action"
			style="z-index: 40; width: 247px; height: 170px;"
		>
			<div class="flex flex-col space-y-1.5 p-2 pt-0 md:p-4">
				<h3 class="text-lg font-semibold leading-none tracking-tight">Upgrade to Pro</h3>
				<p class="text-sm text-muted-foreground">
					Unlock all features and get unlimited access to our support team.
				</p>
			</div>
			<div class="p-2 pt-0 md:p-4 md:pt-0">
				<button
					type="button"
					tabindex="0"
					class="inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					data-button-root=""
					>Upgrade
				</button>
			</div>
		</div>
	</div>
	<div
		class="absolute inset-x-0 top-0 z-20 flex px-4 py-3 opacity-0 transition-all duration-200 ease-in group-hover:-translate-y-12 group-hover:opacity-100"
	>
		<div class="flex w-full items-center justify-end gap-2">
			<button
				type="button"
				tabindex="0"
				aria-describedby="SwQ6FrIBKQ"
				id="GLJO460LPm"
				data-state="closed"
				data-melt-tooltip-trigger=""
				data-tooltip-trigger=""
				class="[&amp;_svg]:size-3.5 inline-flex h-7 w-7 items-center justify-center whitespace-nowrap rounded-[6px] border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				name="dashboard-02-chunk-0"
				data-button-root=""
				><span class="sr-only">Copy</span>
				<svg
					width="24"
					height="24"
					role="img"
					aria-label="clipboard,"
					viewBox="0 0 15 15"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</div>
	</div>
</div>
<div
	class="group invisible rounded-xl bg-background shadow-xl"
	data-x-chunk-container-for="dashboard-02-chunk-1"
	style="z-index: 40; position: absolute; top: 140px; left: 304px; width: 2224px; height: 1164px;"
>
	<div class="relative z-30">
		<div
			data-x-chunk-name="dashboard-02-chunk-1"
			data-x-chunk-description="An empty state showing no products with a heading, description and a call to action to add a product."
			class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
			style="z-index: 40; width: 2224px; height: 1164px;"
		>
			<div class="flex flex-col items-center gap-1 text-center">
				<h3 class="text-2xl font-bold tracking-tight">You have no products</h3>
				<p class="text-sm text-muted-foreground">
					You can start selling as soon as you add a product.
				</p>
				<button
					type="button"
					tabindex="0"
					class="mt-4 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					data-button-root=""
					>Add Product
				</button>
			</div>
		</div>
	</div>
	<div
		class="absolute inset-x-0 top-0 z-20 flex px-4 py-3 opacity-0 transition-all duration-200 ease-in group-hover:-translate-y-12 group-hover:opacity-100"
	>
		<div class="flex w-full items-center justify-end gap-2">
			<button
				type="button"
				tabindex="0"
				aria-describedby="mGHmdErXCW"
				id="G_21KjgXBZ"
				data-state="closed"
				data-melt-tooltip-trigger=""
				data-tooltip-trigger=""
				class="[&amp;_svg]:size-3.5 inline-flex h-7 w-7 items-center justify-center whitespace-nowrap rounded-[6px] border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				name="dashboard-02-chunk-1"
				data-button-root=""
				><span class="sr-only">Copy</span>
				<svg
					width="24"
					height="24"
					role="img"
					aria-label="clipboard,"
					viewBox="0 0 15 15"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</div>
	</div>
</div>
<!--    </div>-->
<!--</div>-->
