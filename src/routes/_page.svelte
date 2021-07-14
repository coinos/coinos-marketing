<div class="container px-12 mt-10">
	<div class="xl:max-w-xl mx-auto">
		<slot />
	</div>
</div>

<style global>
	p,
	h1,
	h2,
	hr {
		@apply mb-4;
	}

	h1 {
		@apply text-4xl;
	}
	h2 {
		@apply text-2xl;
	}
	li {
		@apply mb-2;
	}

	a {
		@apply underline;
	}
</style>
