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

<div class="header bg-secondary justify-center text-white pt-2">
	<div class="max-w-1100px	mx-auto flex pl-10 pr-7">
			<a class="mr-5 text-2.5r text-primary" href="/">
				<span class="text-white ">coin</span>os
			</a>
			<div class="flex mt-5 NAVLINKS text-lg ml-6">
				<a class="pb-5 border-b-4 border-secondary" href="/deploy">Deploy</a>
				<a class="pb-5 border-b-4 border-secondary" href="/enterprise">Enterprise</a>				
				<a class="pb-5 border-b-4 border-secondary" href="/about">About</a>
			</div>
			<div class="ml-auto flex mt-3 pt-1 my-auto">
				<a
					href="https://coinos.io/"
					class="px-6 text-lg py-1">Login</a
				>
				<a
					href="https://coinos.io/register"
					class="SIGNUP bg-primary text-black px-3 text-lg py-1">Sign Up</a
				>
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

	.header a {
		@apply block;
	}

	.NAVLINKS a { @apply mx-4 }

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
</style>
