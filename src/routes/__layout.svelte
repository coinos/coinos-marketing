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

<slot />

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
