<script>
  import { page } from "$app/stores"
	let about, enterprise, menuWasToggled, menuIsOpen, currentPage
	const toggleMenu = () => menuWasToggled = true 
  $: { //re-render: 
		if(currentPage !== $page.path) {
			//(on first page load or page change)
			currentPage = $page.path 
			menuIsOpen = false
			about = $page.path === '/about';
			enterprise = $page.path === '/enterprise';
		}
		if(menuWasToggled) {
			menuIsOpen = menuIsOpen ? false : true 
			menuWasToggled = false //< reset 
		}
	}
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="https://coinos.io/" />
	<meta name="twitter:creator" content="@coinoswallet" />

	<meta property="og:title" content="Coinos" />
	<meta property="og:image" content="https://coinos.io/coinos.png" />
	<meta property="og:url" content="https://coinos.io/" />
	<meta name="twitter:title" content="Coinos" />
	<meta name="twitter:image" content="https://coinos.io/coinos.png" />
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
	</style>
</svelte:head>

<div class="header bg-secondary justify-center text-white pt-2 relative z-50"
		 style="min-height: 80px;">
	<div class="max-w-1100px	mx-auto flex pl-10 pr-7">
			<a class="mr-5 text-2.5r text-primary" href="/">
				<span class="text-white ">coin</span>os
			</a>
			<div class="flex mt-5 NAVLINKS text-lg ml-6">
        <a class:enterprise class="hidden sm:block border-b-4 border-secondary border-opacity-0"
					 href="/enterprise">Enterprise</a>				
				<a class:about class="hidden sm:block border-b-4 border-secondary border-opacity-0"
					 href="/about">About</a>
			</div>
			<div class="ml-auto flex mt-3 pt-1 my-auto">
				<a
					href="https://coinos.io/"
					class="px-6 text-lg py-1 hidden md:block">Login</a
				>
				<a
					href="https://coinos.io/register"
          class:bg-primary={$page.path !== '/enterprise'}
          class:bg-green-400={$page.path === '/enterprise'}
					class="text-black px-3 text-lg py-1 hidden rounded-md md:block">Sign Up</a
				>
			</div>

			<div class="my-4 md:hidden cursor-pointer" on:click={toggleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path></svg>
			</div>

			<div class="{menuIsOpen ? 'md:hidden' : 'invisible'}
									absolute right-3 text-white max-w-sm z-50
									bg-secondary text-right"
					 style="top:4.8rem;">
        <a class="block sm:hidden py-6 px-5 hover:bg-white hover:bg-opacity-10" href="/enterprise">Enterprise</a>				
				<a class="block sm:hidden py-6 px-5 hover:bg-white hover:bg-opacity-10" href="/about">About</a>
				<a class="block py-6 px-6 hover:bg-white hover:bg-opacity-10" href="https://coinos.io/">Login</a>
				<a class="block py-6 px-6 -mr-2.5 hover:bg-white hover:bg-opacity-10" href="https://coinos.io/register">
					<span class="bg-primary text-black rounded-md py-2 px-4">Sign Up</span>
				</a>
			</div>

	</div>
</div>

<slot />

<div class="bg-black px-2 font-Poppins">
	<div class="max-w-1100px footer mx-auto flex flex-wrap text-white pt-12 px-10">
		<div class="flex flex-col text-sm w-full lg:w-2/4 mb-10 order-last lg:order-first">
			<a href="/"><img src="/coinos.svg" alt="logo" class="w-48" /></a>
			<p class="mt-4">&copy;2021 Coinos Financial Corporation</p>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Follow Us</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://twitter.com/coinoswallet">Twitter</a></li>
				<li class="mb-2"><a href="https://t.me/coinos">Telegram</a></li>
				<li class="mb-2"><a href="https://github.com/coinos">Github</a></li>
			</ul>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Help</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://t.me/coinos">Support</a></li>
				<li class="mb-2"><a href="/faq">FAQ</a></li>
				<li class="mb-2"><a href="/about">About</a></li>
			</ul>
		</div>
	</div>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		font-family: 'Roboto', sans-serif;
	}

  .NAVLINKS a { @apply mx-4 pb-5 }

  .deploy, .about { @apply border-primary border-opacity-100 } 
  .enterprise { @apply border-green-300 border-opacity-100 } 

	.card {
		@apply rounded;
	}

	.font-Poppins {
		font-family: 'Poppins', serif;
	}

	.text-white-50 {
		@apply text-opacity-50 text-white; 
	}
	.text-black-70 {
		@apply text-opacity-50 text-black; 
	}

	::selection { 
		@apply bg-primary text-black; 
	}
</style>
