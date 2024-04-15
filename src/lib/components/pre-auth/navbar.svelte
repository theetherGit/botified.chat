<script lang="ts">
    import Logo from "$lib/assets/logo.svg"
    import ArrowRight from "lucide-svelte/icons/arrow-right";
    import {onNavigate} from "$app/navigation";
    import {slide} from "svelte/transition";
    let expanded = false
    onNavigate(() => {
        if (expanded) expanded = false
    })
</script>

<header class="py-4 md:py-6">
    <div class="container px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
            <div class="flex-shrink-0">
                <a href="/" title="" class="flex rounded outline-none focus:outline-none">
                    <img class="block h-8 w-auto drop-shadow-md mr-1" src={Logo} alt="Botified Chat Logo" />
                    <span class="text-3xl font-bold text-primary-700 drop-shadow-lg	">Botified.chat</span>
                </a>
            </div>

            <div class="flex lg:hidden">
                <button
                        class="relative h-8 w-10 p-6"
                        on:click={() => {
						expanded = !expanded;
					}}
                >
                    <span class="sr-only">Open main menu</span>
                    <div
                            class="absolute left-1/2 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform"
                    >
						<span
                                aria-hidden="true"
                                class="hamburger-line {expanded === true ? 'rotate-45' : '-translate-y-1.5'}"
                        />
                        <span
                                aria-hidden="true"
                                class="absolute block h-0.5 w-3 transform rounded bg-foreground transition duration-500 ease-in-out {expanded ===
							true
								? 'opacity-0'
								: ''}"
                        />
                        <span
                                aria-hidden="true"
                                class="hamburger-line {expanded === true ? '-rotate-45' : 'translate-y-1.5'}"
                        />
                    </div>
                </button>

            </div>

            <div class="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a href="#" title="" class="text-base font-medium text-secondary-foreground transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                <a href="#" title="" class="text-base font-medium text-secondary-foreground transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>
            </div>

            <div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <a href="#" title="" class="text-base font-medium text-secondary-foreground transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Sign Up </a>

                <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center px-4 py-2 text-base font-bold leading-7 text-foreground transition-all duration-200 bg-primary border border-primary rounded-xl hover:bg-transparent hover:text-primary font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/90"
                        role="button"
                >
                    Login
                    <ArrowRight class="ml-1"/>
                </a>
            </div>
        </div>
<!--        <div class="container">-->
            {#if expanded}
                <nav transition:slide
                     class="w-full {expanded ? 'z-10 block bg-opacity-90 backdrop-blur pr-7' : ''} fixed">
                    <div class="px-1 py-8">
                        <div class="grid gap-y-7">
                            <a href="/" title="" class="flex items-center p-3 -m-3 text-base font-medium text-secondary-foreground transition-all duration-200 rounded-xl hover:bg-secondary focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                            <a href="/" title="" class="flex items-center p-3 -m-3 text-base font-medium text-secondary-foreground transition-all duration-200 rounded-xl hover:bg-secondary focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>


                            <a href="/register" title="" class="flex items-center p-3 -m-3 text-base font-medium text-secondary-foreground transition-all duration-200 rounded-xl hover:bg-secondary focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Sign Up </a>

                            <a
                                    href="/login"
                                    title=""
                                    class="inline-flex items-center justify-center px-4 py-2 text-base font-bold leading-7 text-primary-foreground bg-primary transition-all duration-200 border border-primary rounded-xl hover:bg-transparent hover:text-primary font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-primary"
                                    role="button"
                            >
                                Login
                                <ArrowRight class="ml-1"/>
                            </a>
                        </div>
                    </div>
                </nav>
            {/if}
        </div>
<!--    </div>-->
</header>

<style>
    .hamburger-line {
        @apply absolute block  h-0.5 w-5 transform rounded bg-foreground transition duration-500 ease-in-out;
    }
</style>