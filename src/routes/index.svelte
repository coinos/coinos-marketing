<script>
	import Cash from '../icons/cash.svelte';
	import Computer from '../icons/computer.svelte';
	import Ticket from '../icons/ticket.svelte';
	import Card from '../components/card.svelte';
	import ContactSalesBtn from '../components/contact-sales-btn.svelte'; 

	import { fade } from 'svelte/transition';

	let showAnim, animateReady 

	//delay a second before animating... 
	setTimeout(() => animateReady = true, 240)

  $: { //re-render: 
		console.log('homepage rendered')
		if(animateReady) {
			showAnim = true
			setTimeout(() => {
				showAnim = false 
				animateReady = false
				//^ never animate again (until page reloads) 
			}, 1900)
		}
	}

</script>

<div style="min-height:90vh; margin-top:-4px;">
	<div class="bg-black border-white border-opacity-30" style="border-top-width: 4px;">
<div style="min-height:90vh;">
	<div class="bg-black border-white border-opacity-20" style="border-top-width: 4px;">
		<div class="text-white max-w-1100px mx-auto pl-10 pr-7 relative min-h-600px sm:min-h-500px">
			<div class="absolute z-20">
				<div class="pb-24 pt-12 md:pt-24 w-2/3 flex-grow z-20">
					<p class="text-4xl">
						<b>We make Bitcoin more usable every day. </b>
					</p>
					<div class="text-2xl text-gray-200">
						<p class="mb-4">
							<b>Your Bitcoin, Liquid, and Lightning web wallet.</b><br />
	
							The original Bitcoin point-of-sale and white label NFT marketplace provider for businesses
							&amp; brands.
						</p>
	
						<a href="https://coinos.io/register"
							 class="text-center block rounded-xl w-72 mt-14 bg-primary text-black p-4 text-xl"
							>Sign up</a
						>
					</div>
				</div>
			</div>
			{#if showAnim}
				<div transition:fade class="absolute w-full z-10 bottom-0 right-0 flex flex-col opacity-70">
					<div class="flex-auto"></div>
					<img style="width:100%;" src="/honeycomb.gif" />
				</div>
			{/if}			
		</div>
	</div>


	<div class="max-w-1100px mx-auto mt-10 md:grid lg:gap-4 grid-cols-3">
		<Card>
			<Cash slot="icon" />
			<b slot="title">Web wallet</b>

			<ul>
				<li>
					No need to download a privacy invasive app or trust any American app store. Login and use us
					from any internet enabled device
				</li>
				<li>
					We uniquely offer custodial and non-custodial options making it easy for newbies to get
					started while advanced users don’t have to trust us with their keys
				</li>
				<li>
					We seamlessly integrate Bitcoin and layer-2 networks Lightning and Liquid. Lightning makes
					us faster (less than a second!) and cheaper than the competition and Liquid means we've
					added confidentiality and the ability to manage assets and NFTs
				</li>
			</ul>
		</Card>
		<Card>
			<Computer slot="icon" />
			<b slot="title">Point of sale</b>
			<ul>
				<li>Your business can be accepting Bitcoin in less than 15 seconds after reading this</li>
				<li>
					You can keep payments in BTC and risk the volatility or have all sales converted to your
					national currency
				</li>
				<li>
					Instant settlement and transaction finality. Your funds belong to you and can be withdrawn
					as soon as a payment lands in your account
				</li>
			</ul>
		</Card>
		<Card>
			<Ticket slot="icon" />
			<b slot="title">NFT Marketplace</b>
			<ul>
				<li>
					Under 3 cents to mint tokens for art and other assets, compared to over $50 USD per item in
					other popular market places
				</li>
				<li>
					Your company branding and logos on the website, along with your ideal look, feel, and
					experience
				</li>
				<li>
					Bitcoin/Liquid Network based, not Ethereum or other altcoins that are slow, expensive, or
					may disappear
				</li>
				<li>
					A few use cases we have experience with: art, event tickets, physical assets, luxury goods,
					celebrity / brands
				</li>
			</ul>
		</Card>
	</div>

	<div class="pl-12 mt-12">
		<h2 class="text-black text-3xl">Get your business on the <span class="font-black">blockchain today</span>.</h2>
		<div class="mt-7 flex">
			<ContactSalesBtn></ContactSalesBtn>
		</div>

	</div>

	<div class="mt-20"></div>
</div>	

<style>
	p {
		@apply mb-4;
	}

	.mottled {
		border-radius: 0 0 0 300px;
	}

	li {
		@apply my-4;
	}
</style>
