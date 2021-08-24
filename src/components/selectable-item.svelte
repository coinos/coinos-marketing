<script>
  export let title
  export let description 
  export let price
  export let css
  let selected = false 

  const select = () => {
    if(title === "Bitcoin") return 
    selected = !selected
  }

  $ : {
    if(title === "Bitcoin") selected = true 
  }

</script>

<div class="yellow-row flex cursor-pointer hover:bg-yellow-200" class:selected="{selected}"
on:click="{select}">
  <span class="">{title}</span>

  <span class="flex-auto font-normal text-center {css}">
    {description ? description : ''}
  </span>

  <span class="w-1/6 text-right pr-2">
    {price ? price : "$0"}
  </span>
</div>

<style>
  .yellow-row {
    @apply  bg-opacity-10 p-3 pt-5 border-b-4 border-gray-100 text-xl font-bold;
  }
  .selected {
    @apply border-primary bg-primary bg-opacity-10
  }
</style>