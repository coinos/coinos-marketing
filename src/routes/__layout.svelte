<script>
	import { page } from '$app/stores';
	let about, community, menuWasToggled, menuIsOpen, currentPage, pos, pay;
	const toggleMenu = () => (menuWasToggled = true);
	$: {
		//re-render:
		if (currentPage !== $page.url.pathname) {
			currentPage = $page.url.pathname;
			menuIsOpen = false;
			about = $page.url.pathname === '/about';
			community = $page.url.pathname === '/community';
			pos = $page.url.pathname === '/pos';
			pay = $page.url.pathname === '/pay';
		}
		if (menuWasToggled) {
			menuIsOpen = menuIsOpen ? false : true;
			menuWasToggled = false; //< reset
		}
	}

	const date = new Date();
	const year = date.getFullYear();
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
	<script src="/js/index.bundle.js"></script>
</svelte:head>

<div class="header bg-secondary justify-center  pt-2 relative z-50" style="min-height: 80px;">
	<div class="max-w-1100px	mx-auto flex pl-10 pr-7">
		<a class="mr-5 text-2.5r text-primary" href="/">
			<span class="text-white ">coin</span>os
		</a>
		<div class="flex mt-5 NAVLINKS text-lg ml-6">
			<a
				class:about
				class="hidden sm:block border-b-4 border-secondary border-opacity-0
															text-opacity-90 text-white
															hover:text-opacity-100 transition duration-100 ease-in-out"
				href="/about">About</a
			>
			<a
				class:community
				class="hidden sm:block border-b-4 border-secondary border-opacity-0
													text-opacity-90 text-white
													hover:text-opacity-100 transition duration-100 ease-in-out"
				href="/community">Community</a
			>
			<a
				class:pos
				class="hidden sm:block border-b-4 border-secondary border-opacity-0
													text-opacity-90 text-white
													hover:text-opacity-100 transition duration-100 ease-in-out"
				href="/pos">Point of Sale</a
			>
			<a
				class:pay
				class="hidden sm:block border-b-4 border-secondary border-opacity-0
													text-opacity-90 text-white
													hover:text-opacity-100 transition duration-100 ease-in-out"
				href="/pay">Pay with Bitcoin</a
			>
		</div>
		<div class="ml-auto flex mt-3 pt-1 my-auto">
			<a
				href="https://coinos.io/"
				class="px-6 text-lg py-1 hidden md:block
							 text-opacity-90
							 hover:text-opacity-100 transition duration-100 ease-in-out text-white"
			>
				Login
			</a>
			<a
				href="https://coinos.io/register"
				class="bg-primary text-black px-3 text-lg py-1 hidden rounded-md md:block
							 border-white border-2 border-opacity-0
								 transition duration-200 ease-in-out-back hover:bg-black hover:text-white
			  			   hover:border-opacity-60"
			>
				Register</a
			>
		</div>

		<div class="my-4 md:hidden cursor-pointer text-white" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ic"
				width="32"
				height="32"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 24 24"
				><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" /></svg
			>
		</div>

		<div
			class="{menuIsOpen ? 'md:hidden' : 'invisible'}
									absolute right-3 text-white max-w-sm z-50
									bg-secondary text-right"
			style="top:4.8rem;"
		>
			<a class="block sm:hidden py-6 px-5 hover:bg-white hover:bg-opacity-10" href="/about">About</a
			>
			<a class="block sm:hidden py-6 px-5 hover:bg-white hover:bg-opacity-10" href="/community"
				>Community</a
			>
			<a class="block sm:hidden py-6 px-5 hover:bg-white hover:bg-opacity-10" href="/pos"
				>Point of Sale</a
			>
			<a class="block sm:hidden py-6 px-5 hover:bg-white hover:bg-opacity-10" href="/pay"
				>Pay with Bitcoin</a
			>
			<a class="block py-6 px-6 hover:bg-white hover:bg-opacity-10" href="https://coinos.io/login"
				>Login</a
			>
			<a
				class="block py-6 px-6 -mr-2.5 hover:bg-white hover:bg-opacity-10"
				href="https://coinos.io/register"
			>
				<span class="bg-primary text-black rounded-md py-2 px-4">Register</span>
			</a>
		</div>
	</div>
</div>

<slot />

<div class="bg-black px-2 font-Poppins">
	<div class="max-w-1100px footer mx-auto flex flex-wrap text-white pt-12 px-10">
		<div class="flex flex-col text-sm w-full lg:w-2/4 mb-10 order-last lg:order-first">
			<a href="/"><img src="/coinos.svg" alt="logo" class="w-48" /></a>
			<p class="mt-4">&copy;{year} Coinos Financial Corporation</p>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Follow Us</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://coinos.medium.com/">Medium</a></li>
				<li class="mb-2"><a href="https://twitter.com/coinoswallet">Twitter</a></li>
				<li class="mb-2"><a href="https://t.me/coinos">Telegram</a></li>
				<li class="mb-2"><a href="https://github.com/coinos">GitHub</a></li>
			</ul>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Help</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://t.me/coinos">Support</a></li>
				<li class="mb-2"><a href="/faq">FAQ</a></li>
				<li class="mb-2"><a href="/about">About</a></li>
				<li class="mb-2"><a href="/community">Community</a></li>
				<li class="mb-2"><a href="/pos">Point of Sale</a></li>
				<li class="mb-2"><a href="/pay">Pay with Bitcoin</a></li>
				<li class="mb-2"><a href="/jobs">Jobs</a></li>
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

	.NAVLINKS a {
		@apply mx-4 pb-5;
	}

	.deploy,
	.about,
	.community,
	.pos,
	.pay {
		@apply border-primary border-opacity-100 text-opacity-100;
	}

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
