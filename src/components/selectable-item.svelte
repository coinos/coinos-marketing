<script>
  export let title
  export let description 
  export let price
  export let css
  export let selected = false 
  export let theme = "BITCOIN"

  const select = () => {
    if(title === "Bitcoin") return 
    selected = !selected
  }

  $ : {
    if(title === "Bitcoin") selected = true 
  }

</script>

<div class="selecatble-row flex cursor-pointer {theme}" class:selected="{selected}"
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
  .selecatble-row {
    @apply  bg-opacity-10 p-3 pt-5 border-b-4 border-gray-100 text-xl font-bold;
  }
  .selecatble-row.BITCOIN:hover {
    @apply hover:bg-yellow-200
  }
  .selected.BITCOIN {
    @apply border-primary bg-primary bg-opacity-10
  }
  .selected.NFT {
    @apply border-green-200 bg-green-300 bg-opacity-10
  }
  .selecatble-row.NFT:hover {
    @apply hover:bg-green-200
  }
</style>