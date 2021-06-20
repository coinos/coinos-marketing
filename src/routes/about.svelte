<div class="container px-12 mt-10">
	<div class="xl:max-w-xl mx-auto">
		<h1 class="mb-10">About</h1>
		<p>
			Coinos is an open source bitcoin web wallet, point of sale, ecommerce marketplace and exchange
			platform. Development started in Vancouver in September 2012 as a way to provide local merchants
			with a convenient way to accept bitcoin payments.
		</p>

		<p>
			The feature set has grown over the years to accomodate a wide variety of use cases with the
			goal of making it as easy as possible for anyone to get started using Bitcoin quickly,
			cheaply, and securely.
		</p>

		<p>
			Anyone can
			<a href="https://github.com/asoltys/coinos">download the source code</a>
			and host their own instance of the platform backed by their own
			<a href="https://bitcoin.org/en/download">bitcoin</a>,
			<a href="https://docs.blockstream.com/liquid/node_setup.html">liquid</a> or
			<a href="https://lightning.readthedocs.io/INSTALL.html">lightning</a>
			nodes, or reach out and we'll gladly set this up for you.
		</p>

		<p>
			Once signed in, you can create both custodial and non-custodial wallets within your account.
			The default custodial wallet allows funds to be deposited on any of the
			<a href="https://bitcoin.org">bitcoin</a>,
			<a href="https://blockstream.com/liquid/">liquid</a> or
			<a href="http://lightning.network/">lightning</a> networks and seamlessly withdrawn over any other
			network without any conversion process or fee.
		</p>

		<p>
			Using a non-custodial wallet means keys are generated client-side in your browser so we never
			have access to the funds. Transactions from these accounts are subject to on-chain transaction
			fees and Lightning Network payments are not supported but we advise using this account type or
			a paper wallet for storing larger amounts.
		</p>

		<p>
			Accounts denominated in USDt and LCAD stablecoins and other Liquid assets are also supported.
		</p>

		<p>
			Intra-account transfers between custodial wallets of different users on our server are
			completely free, instant, and unlimited.
		</p>
	</div>
	<div>
		<h2 class="text-center my-12">Our team</h2>

		<div class="flex flex-wrap lg:grid lg:grid-cols-2 mx-auto mt-12">
			<div class="max-w-lg mx-auto">
				<img src="/static/kris.jpg" class="mb-4 w-full" alt="Kris Constable" />
				<h4 class="text-2xl">Kris Constable</h4>
				<h4 class="text-lg mb-8">Chief Executive Officer</h4>
				<ul>
					<li>Professionally involved in bitcoin/blockchain first in Jan 2014</li>
					<li>Global Security Expert for Canada's biggest company</li>
					<li>
						International Trainer on Privacy; Investigator & Advisor to privacy regulator since 2005
					</li>
					<li>Founder of IDVPN.ca, unique privacy centric KYC/AML/CTF compliance platform</li>
					<li>Over 15 years founding companies, advising companies, and leading teams</li>
					<li>Volunteer, humanitarian, iconoclast, perpetually curious</li>
				</ul>
			</div>
			<div class="max-w-lg mx-auto">
				<img src="/static/adam.jpg" class="mb-4 w-full" alt="Adam Soltys" />
				<h4 class="text-2xl">Adam Soltys</h4>
				<h4 class="text-lg mb-8">Chief Technical Officer</h4>
				<ul>
					<li>Running Bitcoin since 2011</li>
					<li>20+ years web development experience in government and industry</li>
					<li>Early Bitcoin Vancouver meetup organizer</li>
					<li>Founder of The Bitcoin Co-op and early supporter of Decentral Vancouver</li>
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
	hr {
		@apply mb-4;
	}

	h1 {
		@apply text-4xl;
	}
	h2 {
		@apply text-2xl;
	}
	li {
		@apply mb-2;
	}

	a {
		@apply underline;
	}
</style>
