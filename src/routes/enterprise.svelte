<svelte:head>
  <title>Coinos Deployment</title>
</svelte:head>

<script>
  //Template vars: 
  const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 17l5-5l-5-5v10z" fill="currentColor"></path></svg>`

  const contactSalesBtn = classes => //html
    `<button class="bg-black text-white py-2.5 pl-0.5 pr-4 
      border border-white border-opacity-50 
      hover:border-opacity-100 ${classes ? classes : ''}">
      <div class="flex">
        <span class="">${arrowIcon}</span> 
        <span class="inline-block mt-0.5 font-bold text-lg">
          Contact Sales
        </span>
      </div>
    </button>`

</script>

<main class="relative">
	<div class="mx-auto min-h-screen">

    <!-- HEADING ('Deploy your own coinos')-->
    <div class=" bg-gray-600 border-b-8 border-green-300">
      <div class="max-w-1100px px-10 py-24 mx-auto">
        <h1 class="text-white text-5xl">Let us build an <span class="text-green-300">NFT marketplace</span><br>for your brand</h1>
        <p class="text-white max-w-3xl font-light text-2xl">
          The largest brands in the world are in the early stages of integrating NFT technology - and they are using our platform to do it. 
        </p>
        <div class="mt-7 flex">
          {@html contactSalesBtn()}         
        </div>
      </div>
    </div>


    <!-- BODY -->

    <div class="pl-5 pr-10 mt-5 mx-auto max-w-1100px relative pb-5">

      <div class="border-l-8 border-gray-100 pl-3">
        <h2 class="text-black text-2.25r">Open source.  Built on <span class="font-black">Bitcoin</span>.</h2>
      </div>

      <div class="pl-5 max-w-3xl font-light text-lg">
        <p>The revolution in cryptographic token tech would not have been possible for not the incredible community of open source developers who have made the Bitcoin protocol what it is now: a network that has forever changed the face of finance fuelling over <b class="font-bold">$2B</b> of world trading volume everyday.</p>

        <p>Coinos was an early innovator in Bitcoin - and today our web wallet product already powers a fraction of that billion+ world trading volume - thanks to our implementation of another revolutionary tech that was built on top of Bitcoin: the <a href="https://lightning.network/" target="_blank">Lightning network</a> - to move that volume for our users instantly and for a per transaction fee of less than a penny. </p>
      </div>

    </div>

    <div class="border-t-4 border-b-4" style="background-color:#e6e9e8; border-top-color:#ced7d6;
    border-bottom-color:#ccede9;">
      <div class="max-w-1100px mx-auto">
        <img class="max-w-4xl" src="/coinos-lnft-platform.png" />
      </div>
    </div>

    <div class="pl-5 pr-10 mt-5 mx-auto max-w-1100px relative pb-2">

      <div class="border-l-8 border-gray-100 pl-3 mt-9">
        <h2 class="text-black text-2.25r">
          <span class="font-black">Already live</span> & trusted by enterprise.</h2>
      </div>

      
      <p class="pl-5 max-w-3xl font-light text-lg">The next major innovation we are embracing apart of the Bitcoin revolution is <a href="https://blockstream.com/liquid/" target="_blank">Liquid</a>: an open source sidechain technology engineered originally by our colleagues <a href="https://blockstream.com/" target="_blank">Blockstream</a> - a company among the most respected names in Bitcoin and our partner in <a target="_blank" href="https://raretoshi.com/">Raretoshi</a> - one of the first NFT marketplaces, and first Liquid powered NFT marketplace, for artists to upload artwork such as digital stills, video or <i>cryptograffiti</i> that they can then auction off in a way that leverages the excitement, exclusitivity & provably rare benefits of NFT technology.</p>

    </div>

    <div class="flex">
      <div class="w-2/6"></div>
      <div class="text-white pt-6 pb-2 pl-5 pr-10 font-bold text-xl greenGradient">
        <div class="max-w-1100px">
          <div class="flex">
            <div class="flex-auto"></div>
            <div class="mr-2 text-4xl">"</div>
            <p class="">The Raretoshi team (Coinos) are releasing all the code powering the platform as an MIT-licensed open source project called LNFT (Liquid NFT).  This allows anyone to spin up and host their own marketplaces with different themes or focuses. We’re excited to see what other use cases people come up with...  </p>
            <div class="flex-auto"></div>
          </div>
        </div>
      </div>
      <div class="w-2/6"></div>
    </div>

    <div class="mt-4 flex">
      <div class="flex-auto"></div>
      <div class="pt-6 pb-2 px-10 font-light text-lg bg-gradient-to-r from-gray-200">
        <div class="max-w-1100px mx-auto">
          <div class="flex">
            <div class="flex-auto"></div>
            <p class="max-w-md mr-5 my-0">Samson Mow<br>
            <i>Chief Strategy Officer</i></p>
            <img class="mb-4" src="/Blockstream-logo.svg" style="max-width: 150px;" />
            <div class="flex-auto"></div>
          </div>
        </div>
      </div>
      <div class="flex-auto"></div>
    </div>

    <div class="pl-5 pr-10 mt-10 mx-auto max-w-1100px relative pb-32">
      <div class="pl-5 max-w-3xl font-light text-lg mb-14">
        <p>Liquid, and by extension Bitcoin, has opened the door to make NFTs possible and we believe it is the best way to do them since the smartest players & millions of others already trust the Bitcoin protocol.  Competing 'altcoin' based solutions such as those powered by <a href="https://ethereum.org" target="_blank">Ethereum</a> do not have the reputation nor proven track record & sheer market performance of Bitcoin. </p>
        <p>Our technology is open and we've already used it to build an NFT marketplace that has been used by household name known brands. </p>
        <p>Work with us today to build a custom NFT implementation for your brand & receive the tremendous benefits of deploying on our proven Bitcoin based open source technology platform - backed by the expertise of our experienced development team.</p>
      </div>
      {@html contactSalesBtn('ml-5 border-green-400 border-2')}         
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
