<div class="container px-12 mt-10">
	<div class="mx-auto">
		<h1 class="mb-10">About</h1>
		<div class="flex">
			<div class="xl:max-w-xl">
				<hr />
				<h2>Company history</h2>
				<hr />
				<p>
					Coinos is an open source bitcoin web wallet. Anyone can
					<a href="https://github.com/asoltys/coinos">download the code that runs it</a>
					and host it on their own server to let people access their
					<a href="https://bitcoin.org/en/download">bitcoind</a>,
					<a href="https://docs.blockstream.com/liquid/node_setup.html">liquid</a>,
					<a href="https://lightning.readthedocs.io/INSTALL.html">c-lightning</a>
					or
					<a href="https://github.com/lightningnetwork/lnd/blob/master/docs/INSTALL.md">lnd</a>
					nodes on the web.
				</p>

				<p>
					Coinos lets you create both custodial and non-custodial wallets within your account. The
					advantage of using a custodial wallet is that funds can be deposited via any of the
					<a href="https://bitcoin.org">bitcoin</a>,
					<a href="https://blockstream.com/liquid/">liquid</a> or
					<a href="http://lightning.network/">lightning</a> networks and seamlessly converted and sent
					over any of the other two networks regardless of how they were deposited.
				</p>

				<p>
					We don't charge any fees. Transfers between users on the same server are automatically
					done off-chain and are completely free and unlimited.
				</p>

				<p>
					The bitcoin to US dollar exchange rate is streamed every second from
					<a href="https://binance.com/">Binance</a> and converted to other currencies using rates
					from
					<a href="https://fixer.io/">Fixer</a>.
				</p>
			</div>
		</div>
	</div>
	<div>
		<hr />
		<h2>Our team</h2>
		<hr />

		<div class="flex grid grid-cols-2 gap-4">
      <div class="p-8">
				<img src="/static/kris.jpg" class="mb-4 w-full" />
				<h4 class="text-2xl">Kris Constable</h4>
				<h4 class="text-lg mb-8">Chief Executive Officer</h4>
				<ul>
					<li>Professionally involved in bitcoin/blockchain first in Jan 2014</li>
					<li>Global Security Expert for Canada's biggest company</li>
					<li>International Trainer on Privacy</li>
					<li>Investigator & Advisor to privacy regulator since 2005</li>
					<li>Founder of IDVPN.ca, unique privacy centric KYC/AML/CTF compliance platform</li>
					<li>Over 15 years founding companies, advising companies, and leading teams</li>
				</ul>
			</div>
			<div class="p-8">
				<img src="/static/adam.jpg" class="mb-4 w-full" />
				<h4 class="text-2xl">Adam Soltys</h4>
				<h4 class="text-lg mb-8">Chief Technical Officer</h4>
				<ul>
					<li>Running Bitcoin since 2011</li>
          <li>20+ years web development experience in government and industry</li>
          <li>Former front-end developer at althea.net</li>
          <li>Co-founder of The Bitcoin Co-op and Decentral Vancouver</li>
          <li>Yogi, permaculturist, anarchist, decentralist</li>
          <li>Husband, father, brother, son</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	p,
	h1,
	h2,
	h3,
	hr {
		@apply mb-4;
	}

	h1 {
		@apply text-4xl;
	}
	h2 {
		@apply text-2xl;
	}
	h3 {
		@apply text-xl;
	}
	li {
		@apply mb-2;
	}
</style>
