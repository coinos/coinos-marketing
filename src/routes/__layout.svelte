<div class="flex header bg-primary h-24 justify-center border-b-4 border-black">
	<div class="flex my-auto w-full">
		<h1 class="text-4xl ml-4 mr-auto">coinos</h1>
		<div class="flex">
			<a href="/products">Products</a>
			<a href="/blog">Blog</a>
			<a href="/about">About Us</a>
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
			<p class="mt-4">&copy;2021 Coinos</p>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Follow Us</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://twitter.com/coinoswallet">Twitter</a></li>
				<li class="mb-2"><a href="https://t.me/coinos">Telegram</a></li>
				<li class="mb-2"><a href="https://coinos.io/blog">Blog</a></li>
			</ul>
		</div>
		<div class="w-full lg:w-1/4 mb-10">
			<h4 class="font-bold mb-4">Help</h4>
			<ul class="list-none">
				<li class="mb-2"><a href="https://t.me/coinos">Support</a></li>
        <li class="mb-2"><a href="/faq">FAQ</a></li>
				<li class="mb-2"><a href="/privacy">Privacy Policy</a></li>
				<li class="mb-2"><a href="/terms">Terms of Service</a></li>
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
		@apply bg-gray-800;
	}

	.header a {
		@apply block mx-4;
	}
</style>
