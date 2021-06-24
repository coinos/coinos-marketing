<div class="flex header bg-secondary h-24 justify-center border-b-4 border-primary text-white p-4">
	<div class="flex my-auto w-full">
		<a href="/"><img src="/static/coinos.svg" alt="coinos" /></a>
		<div class="flex sm:mt-2">
      <!--
			<a href="/about">About</a>
			<a href="/faq">FAQ</a>
      -->
		</div>
		<div class="ml-auto">
			<a
				href="https://coinos.io/"
				class="rounded-xl bg-primary text-black py-2 px-6 md:text-lg whitespace-nowrap">Log in</a
			>
		</div>
	</div>
</div>

<main>
	<div class="mx-auto min-h-screen">
		<slot />
	</div>
</main>

<div class="bg-black px-2 mt-24">
	<div class="container footer mx-auto flex flex-wrap text-white pt-12">
		<div class="flex flex-col text-sm w-full lg:w-2/4 mb-10 order-last lg:order-first">
			<a href="/"><img src="/coinos.svg" alt="logo" class="w-48" /></a>
			<p class="mt-4">&copy;2021 Coinos Financial Corporation</p>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Follow Us</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://twitter.com/coinoswallet">Twitter</a></li>
				<li class="mb-2"><a href="https://t.me/coinos">Telegram</a></li>
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
		font-family: 'Poppins', serif;
	}

	.header a {
		@apply block mx-4;
	}

	.card {
		@apply rounded;
	}
</style>
