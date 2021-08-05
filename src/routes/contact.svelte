<script>
	import Form from '../components/form.svelte';
</script>

<div style="min-height: 90vh;">
	<div class="mx-auto max-w-1100px mt-10 pl-10 pr-7">
		<h1 class="mb-10">Contact</h1>
		<div class=" max-w-xl">
			<p>
				Coinos is an open source bitcoin web wallet, point of sale, ecommerce marketplace and exchange
				platform. Development started in Vancouver in September 2012 as a way to provide local merchants
				with a convenient way to accept bitcoin payments.
			</p>
		</div>
	</div>
	
	<div class="mx-auto max-w-1100px mt-10">
		<div class="max-w-2xl pl-10 pr-7 pb-12">
			<Form />
		</div>
	</div>
</div>

<style>
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
