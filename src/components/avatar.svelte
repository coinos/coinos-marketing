<script>
	export let link = '';
	export let image = '';
	export let name = '';
</script>

<div class="m-4">
	<a href={link}
		><img
			src={image}
			alt="avatar"
			class="rounded-full w-28 border-2 border-opacity-0 hover:border-opacity-100 border-primary"
		/></a
	>
	<p class="text-center font-medium">{name}</p>
</div>
