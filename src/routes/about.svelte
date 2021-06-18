<div class="container px-12 mt-10">
	<div class="mx-auto">
		<h1 class="mb-10">About</h1>
		<div class="flex">
			<div class="xl:max-w-xl w-full">
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
</style>
