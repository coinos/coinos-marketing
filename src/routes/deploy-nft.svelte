<svelte:head>
  <title>Coinos Enterprise</title>
</svelte:head>

<script>
  //Template vars: 
  const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 17l5-5l-5-5v10z" fill="currentColor"></path></svg>`

  const contactSalesBtn = classes => //html
    `<button class="bg-black text-white py-2.5 pl-0.5 pr-4 
      border border-white border-opacity-50  rounded-md 
      hover:border-opacity-100 ${classes ? classes : ''}
      transition duration-200 ease-in-out-back
      ">
      <a href="/contact" class="flex">
        <span class="">${arrowIcon}</span> 
        <span class="inline-block mt-0.5 font-bold text-lg">
          Contact Sales
        </span>
      </a>
    </button>`

  let btn = (classes, content) => //html
    `<button class="bg-green-300 text-black hover:border-black 
                   border my-0.5 px-4 hover:underline
                    text-lg py-2.5 ${classes ? classes : ''}
                    ">
        ${content}
    </button>`    

  let deployBtn = classes =>  //html
  `<button class="bg-black text-green-300 py-2.5 pl-0.5 pr-4 
        border border-green-300 border-opacity-50 
        hover:border-opacity-100 ${classes ? classes : ''}">
    <div class="flex">
      <span class="">${arrowIcon}</span> 
      <span class="inline-block mt-0.5 font-bold text-lg">
        Deploy Now
      </span>
    </div>
  </button>`

</script>

<main class="relative">
	<div class="mx-auto min-h-screen">

    <!-- HEADING -->
    <div class="border-b-8 border-green-300 bg-gray-600">
      <div class="max-w-1100px px-10 py-24 mx-auto">
        <h1 class="text-white text-5xl">Deploy your own <span class="text-green-300">NFT</span></h1>
        <p class="text-white max-w-2xl font-light text-2xl">
          Customize & launch your own NFT platform powered by open source, backed by our dedicated development team.
        </p>
        <div class="mt-7 flex">
          <a href="/pricing-nft">{@html deployBtn('mr-3') }</a>
          <a href="/pricing-nft">{@html btn(null, 'See Pricing') }</a>
        </div>
      </div>
    </div>

    <!-- BODY ('Crtyposystem Buffet') -->

    <div class="pl-5 pr-10 mt-5 mx-auto max-w-1100px relative pb-16">

      <div class="absolute top-0 right-0  mr-7">
        <div class="bg-black pb-2 text-white">
          <h3 class="text-1.7r text-green-300 border-b-2 border-gray-500  px-4 pt-2 pb-2">
            <span class="text-white-50">new</span>	
            <span class="text-white ">NFT</span>
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
            <a href="/pricing">{@html deployBtn()}</a>
          </div>
          <div class="text-right">
            <a href="/pricing">{@html btn('mt-2', 'See Pricing') }</a>
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
        <h2 class="text-black text-opacity-80 text-2.25r font-medium">Core nodes included</h2>
      
        <div class="flex max-w-md text-center font-Poppins border border-gray-300 ">
          <div class="group p-4 bg-green-100 cursor-pointer font-bold">
            <div class=" bg-green-400 border-b-4 mb-2">
              <img src="/icons/Bitcoin.svg" />
            </div>
            Bitcoin
          </div>
          <div class="group p-4 bg-green-100 cursor-pointer font-bold">
            <div class="bg-green-400 border-green-300 border-b-4 mb-2">
              <img src="/icons/Lightning.svg" />
            </div>
            Lightning
          </div>
          <div class="group p-4 bg-green-100 cursor-pointer hover:bg-green-300 font-bold">
            <div class="group-hover:bg-white group-hover:border-green-300 bg-green-400 
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
        <h2 class="mt-10 text-black text-opacity-80 text-3xl font-medium">Secondary modules + API included</h2>

        <div class="flex max-w-37r text-center font-Poppins border border-gray-300">
          <div class="group p-4 bg-green-100 cursor-pointer hover:bg-green-300">
            <div class="bg-green-300 group-hover:bg-green-300 group-hover:border-green-300
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Crypto-Wallet.svg" />
            </div>
            Crypto Wallet
          </div>
          <div class="group p-4 bg-green-100 cursor-pointer hover:bg-green-300">
            <div class="group-hover:bg-white bg-green-300  
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/NFT-Checkout.svg" />
            </div>
            NFT Checkout
          </div>    

          <div class="group p-4 bg-green-100 cursor-pointer hover:bg-green-300">
            <div class="group-hover:bg-white   bg-green-300
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Bitcoin-Exchange.svg" />
            </div>
            Token Based Exclusive Access
          </div>

          <div class="group p-4 bg-green-100 cursor-pointer font-bold">
            <div class="group-hover:bg-green-300 bg-green-100 border-green-300 border-b-4 mb-2">
              <img src="/icons/coinos-api.svg" />
            </div>
            API
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
          <div class="group p-4 bg-white cursor-pointer hover:bg-green-100">
            <div class="group-hover:bg-green-300 group-hover:border-bg-green-300 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Token-Exchange.svg" />
            </div>
            Token Exchange
          </div>

          <div class="group p-4 bg-white cursor-pointer hover:bg-green-100">
            <div class="group-hover:bg-green-300 group-hover:border-bg-green-300
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Point-of-Sale.svg" />
            </div>
            Point-of-sale
          </div>

          <div class="invisible group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Point-of-Sale.svg" />
            </div>
            Point-of-sale
          </div>

          <div class="invisible group p-4 bg-white cursor-pointer hover:bg-yellow-100">
            <div class="group-hover:bg-primary group-hover:border-primary 
                        border-gray-300 border-b-4 mb-2 font-light group-hover:font-bold">
              <img src="/icons/Point-of-Sale.svg" />
            </div>
            Point-of-sale
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

    </div>





	</div>

</main>
<div class=" bg-green-400 hidden">hk to include this tw class</div>


<style>
	p,
	h1,
	h2,
	hr {
		@apply mb-4;
	}

  a {
		@apply text-blue-500 font-medium;
	}
  
  .greenGradient {
    background: rgb(0,121,72);
    background: linear-gradient(128deg, rgba(0,121,72,0.8036099137931034) 0%, rgba(0,121,72,0.4415409482758621) 100%);
  }
  
</style>
