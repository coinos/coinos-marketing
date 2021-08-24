<svelte:head>
  <title>Coinos Pricing</title>
</svelte:head>

<script>

  import SelectableItem from '../components/selectable-item.svelte'; 

  //Template vars: 
  const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 17l5-5l-5-5v10z" fill="currentColor"></path></svg>`

  let deployBtn = classes =>  //html
    `<button class="bg-black text-primary py-2.5 pl-0.5 pr-4 
         border border-primary border-opacity-50 
         hover:border-opacity-100 ${classes ? classes : ''}">
      <div class="flex">
        <span class="">${arrowIcon}</span> 
        <span class="inline-block mt-0.5 font-bold text-lg">
          Deploy Now
        </span>
      </div>
    </button>`
  
  let btn = (classes, content) => //html
    `<button class="bg-primary text-black hover:border-black 
                    border-primary border my-0.5 px-4 hover:underline
                    text-lg py-2.5 ${classes ? classes : ''}
                    ">
        ${content}
    </button>`

</script>

<main class="relative">
	<div class="mx-auto min-h-screen">

    <!-- HEADING ('Deploy your own coinos')-->
    <div style="background-color:#454412" class="border-b-8 border-primary">
      <div class="max-w-1100px px-10 py-12 mx-auto">
        <h1 class="text-primary text-5xl">Deployment Pricing</h1>
      </div>
    </div>


    <!-- BODY ('Crtyposystem Buffet') -->

    <div class="pl-5 pr-10 mt-5 mx-auto max-w-1100px relative pb-16">

      <div class="absolute top-0 right-0  mr-7 z-30 max-w-md">
        <div class="bg-black pb-2 text-white">
          <h3 class="text-1.7r text-primary border-b-2 border-gray-500  px-4 pt-2 pb-2">
            <span class="text-white-50">new</span>	
            <span class="text-white ">coin</span>os
            deployment
          </h3>
          <div class="text-xl px-4 my-2">
            <span class="text-white-50">Nodes:</span> Bitcoin, Lightning
          </div>
          <div class="text-xl px-4 my-2">
            <span class="text-white-50">SSD Size:</span> 20GB
          </div>
          <div class="text-xl px-4 my-2">
            <span class="text-white-50">CPU-RAM:</span> 2x CPU | 4GB
          </div>
          <div class="text-xl px-4">
            <span class="text-white-50">Secondary modules:</span><br>
            Crypto Wallet
          </div>
          <div class="text-lg px-4 mt-1">
            <span class="text-white-50">+ API for extension & customization</span>
          </div> 
        </div>

        <div class="bg-black pb-2 text-white float-right mt-4 max-w-sm">
          <h3 class="text-1.7r text-primary border-b-2 border-gray-500  px-4 pt-2 pb-2">
            <span class="text-white-50">estimated total.....</span>	
            $250/mo
          </h3>
          <div class="text-lg px-4 my-2 text-right">
            <span class="text-white-50">(does not include sales tax, fill in country
              and region below)</span>
          </div>
        </div>


        <div class="bg-black pb-2 text-white float-right mt-4 text-right max-w-sm">
          <h3 class="text-1.7r border-b-2 border-gray-500  px-4 pt-2 pb-2 text-opacity-70 text-white ">
            setup timeframe
          </h3>
          <div class="text-lg px-4 my-2 text-white text-opacity-70">
            Please allow our engineers <span class="font-bold text-primary text-opacity-100">2 business days</span> to setup & test your deployment. 
          </div>
        </div>

        <div></div>

        <div class="float-right">
          <div class="bg-gray-200 rounded-sm p-4 my-3 text-lg">
            <input class="px-2 py-1.5 my-2" placeholder="First name" /><br>
            <input class="px-2 py-1.5 my-2" placeholder="Email name" /><br>
            <input class="px-2 py-1.5 my-2" placeholder="Phone" /><br>
            <input class="px-2 py-1.5 my-2" placeholder="Country" /><br>
            <input class="px-2 py-1.5 my-2" placeholder="State/Province/Region" /><br>
            <input class="px-2 py-1.5 my-2" placeholder="Password" />
          </div>
          <div class="text-right">
            {@html deployBtn()}
          </div>
      
          <p class="text-right mt-10">Prefer fully managed?<br>
            Try our 
            <b>Enterprise</b> solution. 
          </p>
          <div class="text-right">
            {@html btn('bg-white border-black hover:bg-blue-500 hover:text-white hover:no-underline', 'Contact Sales') }
          </div>
        </div>

      </div>

      <div class="border-l-8 border-gray-100 pl-3 max-w-lg">
        <div class="flex">
          <h2 class="text-black-70 text-2.25r font-medium">Core nodes</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <SelectableItem 
            title="Bitcoin" 
            description="Pruned Node + Coinos Layer"
            css="pl-12">
          </SelectableItem>
          <SelectableItem 
            title="Lightning" 
            description="Node + 20x Channels"
            price="+$100">
          </SelectableItem>
          <SelectableItem 
            title="Liquid" 
            description="Elements Core"
            price="+$50">
          </SelectableItem>
        </div>
      </div>

      <div class="border-l-8 border-gray-100 pl-3 max-w-lg mt-12">
        <div class="flex">
          <h2 class="text-black-70 text-2r font-medium">Secondary modules</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <SelectableItem 
            title="Crypto Wallet" 
            description="(included)"
            css="font-light"
            price="+$100">
          </SelectableItem>

          <SelectableItem 
            title="Bitcoin Exchange" 
            price="+$150">
          </SelectableItem>

          <SelectableItem 
            title="Token Exchange" 
            price="+$150">
          </SelectableItem>

          <SelectableItem 
            title="NFT Checkout" 
            price="+$100">
          </SelectableItem>
        </div>
      </div>


      <div class="border-l-8 border-gray-100 pl-3 max-w-lg mt-12">
        <div class="flex">
          <h2 class="text-black-70 text-2r font-medium">Plugins</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>

          <SelectableItem 
            title="Crypto Wallet" 
            price="+$30">
          </SelectableItem>

          <SelectableItem 
            title="Bitcoin Exchange" 
            price="+$50">
          </SelectableItem>

          <SelectableItem 
            title="Token Exchange" 
            price="+$60">
          </SelectableItem>

          <SelectableItem 
            title="NFT Checkout" 
            price="+$75">
          </SelectableItem>

          <SelectableItem 
            title="Token Based 
            Exclusive Access Area" 
            price="+$25">
          </SelectableItem>

        </div>
      </div>


      <div class="border-l-8 border-gray-100 pl-3 max-w-lg mt-12">
        <div class="flex">
          <h2 class="text-black-70 text-2r font-medium">Support &amp; Development</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <SelectableItem 
            title="Updates/upgrades & patches" 
            description="(included)">
          </SelectableItem>

          <SelectableItem 
            title="3 Hour Support Pack" 
            price="$360/mo">
          </SelectableItem>
          
          <SelectableItem 
            title="9 Hour Support Pack" 
            price="$900/mo">
          </SelectableItem>

          <SelectableItem 
            title="Ad Hoc Support" 
            price="$200/mo">
          </SelectableItem>

          <SelectableItem 
            title="Custom Development" 
            description="(min 9 hour commitment)"
            price="$150/mo">
          </SelectableItem>

        </div>
      </div>
    </div>



	</div>
	<div class="absolute right-0" style="bottom:-190px;">
    <img style="width:620px;"
         src="/honey-nodes.png">
  </div>
</main>


<style>
	p,
	h1,
	h2,
	hr {
		@apply mb-4;
	}


</style>
