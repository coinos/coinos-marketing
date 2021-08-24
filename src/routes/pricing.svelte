<svelte:head>
  <title>Coinos Pricing</title>
</svelte:head>

<script>
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

      <div class="absolute top-0 right-0  mr-7 z-30">
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

        <div class="float-right">
          <div class="bg-gray-200 rounded-sm p-4 my-3">
            <input class="px-2 py-1.5" placeholder="First name" /><br>
            <input class="px-2 py-1.5 my-2" placeholder="Email name" /><br>
            <input class="px-2 py-1.5" placeholder="Password" />
          </div>
          <div class="text-right">
            {@html deployBtn()}
          </div>
          <div class="text-right">
            {@html btn('mt-2', 'See Pricing') }
          </div>
          <p class="text-right mt-10">Prefer fully managed?<br>
            Try our 
            <b>Enterprise</b> solution. 
          </p>
          <div class="text-right">
            {@html btn('bg-white border-black hover:bg-blue-500 hover:text-white hover:no-underline', 'Contact Sales') }
          </div>
          <p class="text-right mt-10 opacity-50">
            Open source.<br> 
            Trusted by enterprise.
          </p>
          <img style="width:170px;" src="/Blockstream-logo.svg"
              class="float-right" /> 
        </div>

      </div>

      <div class="border-l-8 border-gray-100 pl-3 max-w-lg">
        <div class="flex">
          <h2 class="text-black-70 text-2.25r font-medium">Core nodes</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <div class="COIN-yellow-row flex">
            <span class="w-1/5">Bitcoin</span>
            <span class="w-3/5 font-normal text-center">Pruned Node + Coinos Layer</span>
            <span class="w-1/5 text-right pr-4">$150</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-1/5">Lightning</span>
            <span class="w-3/5 font-normal text-center">Node + 20x Channels</span>
            <span class="w-1/5 text-right pr-2">$100</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-1/5">Liquid</span>
            <span class="w-3/5 font-normal text-center">Elements Core</span>
            <span class="w-1/5 text-right pr-2">$50</span>
          </div>
        </div>
      </div>

      <div class="border-l-8 border-gray-100 pl-3 max-w-lg mt-12">
        <div class="flex">
          <h2 class="text-black-70 text-2r font-medium">Secondary modules</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">Crypto Wallet</span>
            <span class="w-2/6 font-normal text-center opacity-30">(included)</span>
            <span class="w-2/6 text-right pr-2">+ $100</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">Bitcoin Exchange</span>
            <span class="w-2/6 font-normal text-center"></span>
            <span class="w-2/6 text-right pr-2">+ $150</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">Token Exchange</span>
            <span class="w-2/6 font-normal text-center"></span>
            <span class="w-2/6 text-right pr-2">+ $150</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">NFT Checkout</span>
            <span class="w-2/6 font-normal text-center"></span>
            <span class="w-2/6 text-right pr-2">+ $100</span>
          </div>
        </div>
      </div>


      <div class="border-l-8 border-gray-100 pl-3 max-w-lg mt-12">
        <div class="flex">
          <h2 class="text-black-70 text-2r font-medium">Plugins</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">Crypto Wallet</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">+ $30</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">Bitcoin Exchange</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">+ $50</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">Token Exchange</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">+ $60</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span class="w-2/6">NFT Checkout</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">+ $75</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span>Token Based 
              Exclusive Access Area</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">+ $25</span>
          </div>
        </div>
      </div>


      <div class="border-l-8 border-gray-100 pl-3 max-w-lg mt-12">
        <div class="flex">
          <h2 class="text-black-70 text-2r font-medium">Support &amp; Development</h2>
          <div class="flex-auto"></div>
          <div class="text-black-80 font-light mt-2 text-3xl">PRICE <span class="text-base">/MO</span></div>
        </div>
        <div>
          <div class="COIN-yellow-row flex">
            <span>Updates/upgrades & patches</span>
            <span class="flex-auto opacity-50 pl-4 font-light">(included)</span>
            <span class="w-1/6 text-right pr-2">$0</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span>3 Hour Support Pack</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">$360/mo</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span>9 Hour Support Pack</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">$900/mo</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span>Ad Hoc Support</span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">$200/hr</span>
          </div>
          <div class="COIN-yellow-row flex">
            <span>Custom Development<br>
              <span class="font-light">(min 9 hour commitment)</span> 
            </span>
            <span class="flex-auto"></span>
            <span class="w-2/6 text-right pr-2">$150/hr</span>
          </div>
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

  .COIN-yellow-row {
    @apply  bg-opacity-10 p-3 pt-5 border-b-4 border-gray-100 text-xl font-bold;
  }
  .COIN-selected {
    @apply border-primary bg-primary bg-opacity-10
  }
</style>
