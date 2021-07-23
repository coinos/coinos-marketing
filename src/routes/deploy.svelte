<svelte:head>
  <title>Coinos Deployment</title>
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
      <div class="max-w-1100px px-10 py-24 mx-auto">
        <h1 class="text-primary text-5xl">Deploy your own <span class="text-white">coin</span>os</h1>
        <p class="text-white max-w-md font-light text-2xl">
          Customize & launch your own instance of our open source cryptocurrency system.
        </p>

        <div class="mt-7 flex">
          {@html deployBtn('mr-3') }
          {@html btn(null, 'See Pricing') }
        </div>
      </div>
    </div>


    <!-- BODY ('Crtyposystem Buffet') -->

    <div class="pl-5 pr-10 mt-5 mx-auto max-w-1100px relative pb-16">

      <div class="absolute top-0 right-0  mr-7">
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

      <div class="border-l-8 border-gray-100 pl-3">
        <h2 class="text-black-70 text-2.25r font-medium">Choose your core nodes</h2>
      
        <div class="flex max-w-md text-center font-Poppins border border-gray-300 ">
          <div class="group p-4 bg-yellow-200 cursor-pointer font-bold">
            <div class="bg-primary border-primary border-b-4 mb-2">
              <img src="/icons/Bitcoin.svg" />
            </div>
            Bitcoin
          </div>
          <div class="group p-4 bg-yellow-200 cursor-pointer font-bold">
            <div class="bg-primary border-primary border-b-4 mb-2">
              <img src="/icons/Lightning.svg" />
            </div>
            Lightning
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Liquid.svg" />
            </div>
            Liquid
          </div>
        </div>

        <div class="flex max-w-md text-center uppercase mt-2 text-sm  text-gray-300">
          <div class="flex-auto">
            <span class="font-bold">✓</span> Required
          </div>
          <div class="flex-auto">
            <span class="font-bold">✓</span> Selected
          </div>
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>    
        </div>
      </div>

      <div class="border-l-8 border-gray-100 pl-3">
        <h2 class="mt-10 text-black-70 text-3xl font-medium">Choose your secondary modules</h2>

        <div class="flex max-w-37r text-center font-Poppins border border-gray-300">
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Crypto-Wallet.svg" />
            </div>
            Crypto Wallet
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Bitcoin-Exchange.svg" />
            </div>
            Bitcoin Exchange
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Token-Exchange.svg" />
            </div>
            Token Exchange
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/NFT-Checkout.svg" />
            </div>
            NFT Checkout
          </div>    
        </div>

        <div class="flex max-w-md text-center uppercase mt-2 text-sm  text-gray-300">
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>          
        </div>
      </div> 


      <div class="border-l-8 border-gray-100 pl-3">
        <h2 class="mt-5 text-black-70 text-3xl font-medium">Add plugins</h2>

        <div class="flex max-w-37r text-center font-Poppins border border-gray-300">
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Point-of-Sale.svg" />
            </div>
            Point-of-sale
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Fiat-Bank-Transfer.svg" />
            </div>
            Fiat Bank Transfer
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/AI-Trader-Bot.svg" />
            </div>
            AI Trader Bot
          </div>
          <div class="group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Bill-Payments.svg" />
            </div>
            Bill Payments
          </div>    
        </div>

        <div class="flex max-w-md text-center uppercase mt-2 text-sm  text-gray-300">
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>          
        </div>
      </div>


      <div class="border-l-8 border-gray-100 pl-3">
        <h2 class="mt-5 text-black-70 text-3xl font-medium">Build apps</h2>  

        <div class="flex max-w-37r text-center font-Poppins border border-gray-300"
            style="max-width:147.5px;">
          <div class="group p-4 bg-yellow-200 cursor-pointer font-bold">
            <div class="bg-primary border-primary border-b-4 mb-2">
              <img src="/icons/coinos-api.svg" />
            </div>
            API
          </div>  
        </div>

        <div class="flex max-w-md text-center uppercase mt-2 text-sm  text-gray-300">
          <div class="flex-auto cursor-default px-4">
            <span class="font-bold">✓</span> Included
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
          </div>  
          <div class="flex-auto text-white cursor-default">
            <span class="font-bold">✓</span> Selected
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
</style>
