<script>
	import Right from '../icons/right.svelte';
</script>

<div class="border rounded-lg mx-4 p-8 flex flex-col mb-4">
	<div class="flex">
		<div class="h-12 my-auto mr-2">
			<slot name="icon" />
		</div>
		<h2 class="my-auto text-2xl">
      <slot name="title" />
		</h2>
	</div>
	<slot />
</div>
