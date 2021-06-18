<script>
	import Right from '../icons/right.svelte';
</script>

<div class="border rounded-lg mx-4 bg-secondary p-8 flex flex-col mb-4">
	<div class="flex">
		<div class="h-12">
			<slot name="icon" />
		</div>
		<div class="ml-8">
			<slot />
		</div>
	</div>
	<a
		class="mt-auto text-center block rounded-xl w-72 mt-14 text-primary p-4 text-lg"
		href="/products"
	>
		<div class="flex">
			<div class="mr-2">Learn more</div>
			<Right />
		</div>
	</a>
</div>
