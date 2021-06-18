<script>
	import Cash from '../icons/cash.svelte';
	import Computer from '../icons/computer.svelte';
	import Ticket from '../icons/ticket.svelte';
	import Card from '../components/card.svelte';
	import Form from '../components/form.svelte';
</script>

<div class="flex">
	<div class="text-white bg-black w-full flex flex-wrap lg:flex-nowrap border-b-8 border-secondary">
		<div class="xl:ml-72 py-24 w-2/3 flex-grow px-12">
			<p class="text-4xl">
				<b>We make bitcoin more usable every day. </b>
			</p>
			<div class="text-2xl text-gray-200">
				<p class="mb-4">
					<b>Liquid and Lightning web wallet.</b>
					The original bitcoin point-of-sale and white label NFT marketplace provider for businesses
					&amp; brands.
				</p>

				<a
					href="https://coinos.io/register"
					class="text-center block rounded-xl w-72 mt-14 bg-primary text-black p-4 text-xl"
					>Sign up</a
				>
			</div>
		</div>
		<img
			class="hidden lg:block ml-auto w-full lg:w-auto lg:object-cover mottled"
			src="/static/mottled.jpg"
			alt="Mottled gray texture"
		/>
	</div>
</div>

<div class="flex flex-wrap text-white my-20 lg:grid xl:gap-4 xl:grid-cols-2">
	<Card>
		<span slot="icon"><Cash /></span>

		<b class="text-2xl">Web wallet</b>

		<ul class="list-disc">
			<li>
				We uniquely offer custodial and non-custodial options. This means it’s easy for newbies and
				nocoiners, while advanced users don’t have to trust us with their keys
			</li>
			<li>
				You can use us completely anonymously -- with no login/account, as well as using the tor
				network if you’re so inclined.
			</li>
			<li class="bg-gray-800 p-2">
				We seamlessly have integrated Bitcoin with Lightning Network and Liquid Network to satisfy
				all of your bitcoin related p2p needs
			</li>
		</ul>
	</Card>
	<Card>
		<span slot="icon"><Cash /></span>

		<b class="text-2xl">Exchange</b>

		<ul class="list-disc">
			<li>Buy bitcoin safely in Canada using email money transfer</li>
			<li class="bg-gray-800 p-2">
				We’re fully open source. With a history of dodgy exchanges we’ve used ourselves in the past,
				we’ve built ours so you don’t have to trust us, you can review the code yourself.
			</li>
			<li>
				We’re registered with FINTRAC as an MSB dealing in virtual currencies, the strongest
				financial crime reporting in Canada
			</li>
			<li>
				Once your ID has been verified (government requirement), you can transfer CAD in and out of
				Bitcoin as fast as the fiat / traditional banking system will allow
			</li>
			<li>We instantly convert your CAD to satoshis (bitcoin), no extra work on your part</li>
		</ul>
	</Card>
	<Card>
		<span slot="icon"><Computer /></span>
		<b class="text-2xl">Point of sale</b>
		<ul class="list-disc">
			<li>Your business can be accepting bitcoin in less than 15 seconds after reading this</li>
			<li>
				You can be selling products with invoice and QR code in less than one minute after reading
				this
			</li>
			<li class="bg-gray-800 p-2">
				We’ve been using Bitcoin since 2014, with layer 2 Lightning Network added in 2019, making us
				faster, more cost effective, and removing the energy usage concerns with proof of work as
				the industry resolves these things internally
			</li>
			<li>
				You can keep payments in BTC and risk the volatility, or have all sales get pegged to the
				Canadian or US dollar at sale time
			</li>
		</ul>
	</Card>
	<Card>
		<span slot="icon"><Ticket /></span>
		<b class="text-2xl mb-2">NFT Marketplace</b>
		<ul class="list-disc">
			<li>
				Under 5 cents to mint art/assets, compared to over $50 USD per item in most market places
			</li>
			<li class="bg-gray-800 p-2">
				Your company branding and logos on the website, along with your ideal look, feel, and
				experience
			</li>
			<li>We can handle digital assets as well as bridge physical assets</li>
			<li>
				Bitcoin/Liquid Network based, not ethereum or other altcoins that are slow, expensive, or
				may disappear
			</li>
			<li>
				A few use cases we have experience with: art, event tickets, physical assets, luxury goods,
				celebrity / brands
			</li>
		</ul>
	</Card>
</div>

<div class="flex flex-wrap py-20 px-12">
	<div class="text-black w-full flex">
		<h1 class="text-4xl mx-auto mb-12">Get in touch</h1>
	</div>
	<div class="flex mx-auto rounded-lg">
		<div class="mr-4">
			<Form />
		</div>
	</div>
</div>

<style>
	p {
		@apply mb-4;
	}

	.mottled {
		border-radius: 0 0 0 300px;
	}

	.list-disc li {
		@apply my-2 px-2;
	}
</style>
