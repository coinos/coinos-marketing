<div class="container px-12 mt-10 mx-auto">
  <h1 class="mb-10">
    <slot name="title" />
  </h1>
	<div class="flex">
		<div class="xl:max-w-xl w-full">
			<slot />
		</div>
	</div>
</div>

<style>
	p,
	h1,
	h2,
	h3,
	hr {
		@apply mb-4;
	}

	h1 {
		@apply text-4xl;
	}
	h2 {
		@apply text-2xl;
	}
	h3 {
		@apply text-xl;
	}
</style>
