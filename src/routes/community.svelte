<script>
	import Twitter from '../icons/twitter.svelte';
	import Telegram from '../icons/telegram.svelte';
	import GitHub from '../icons/github.svelte';
	import Medium from '../icons/medium.png';
	import Avatar from '../components/avatar.svelte';
</script>

<div class="px-4 space-y-10 py-20 bg-gray-300">
	<div class="">
		<h1 class="text-center text-4xl">Community</h1>
		<p class="w-full md:w-1/4 mx-auto text-center my-2">
			Since it's creation in 2012 coinos has developed a dedicated and fun community of bitcoiners
			committed to bringing bitcoin to the world!
		</p>
		<div class="flex flex-wrap justify-center items-center md:space-x-4">
			<a
				href="https://github.com/coinos"
				target="_blank"
				class="border-4 border-opacity-0 hover:border-opacity-100 rounded-full border-primary p-2"
				rel="noreferrer"><GitHub slot="icon" /></a
			>
			<a
				href="https://t.me/coinos"
				target="_blank"
				class="border-4 border-opacity-0 hover:border-opacity-100 rounded-full border-primary p-2"
				rel="noreferrer"><Telegram slot="icon" /></a
			>
			<a
				href="https://twitter.com/coinoswallet"
				target="_blank"
				class="border-4 border-opacity-0 hover:border-opacity-100 rounded-full border-primary p-2"
				rel="noreferrer"><Twitter slot="icon" /></a
			>

			<a
				href="https://coinos.medium.com/"
				target="_blank"
				class="border-4 border-opacity-0 hover:border-opacity-100 rounded-full border-primary p-2"
				rel="noreferrer"><img src={Medium} alt="Medium" class="w-12 h-12 rounded-full" /></a
			>
		</div>
	</div>

	<div>
		<h2 class="text-3xl text-center">Enterprise Sponsors</h2>
		<h3 class="text-xl text-center">0.1+ BTC</h3>
		<div class="flex justify-center items-center">
			<Avatar
				link="https://blockstream.com"
				image="/avatars/blockstream.jpg"
				name="Blockstream"
			/>
		</div>
	</div>
	<div>
		<h2 class="text-3xl text-center">Community Sponsors</h2>
		<div class="flex justify-center items-center">
			<Avatar
				link="https://github.com/secondl1ght"
				image="/avatars/secondl1ght.png"
				name="secondl1ght"
			/>
		</div>
	</div>
	<div class="flex justify-center items-center">
		<button
			class="bg-black text-white p-3 border-4 border-primary border-opacity-0 rounded-md
  hover:border-opacity-100"
		>
			<a href="https://coinos.io/donate">
				<span class="inline-block mt-0.5 font-bold text-lg"> Become a Sponsor </span>
			</a>
		</button>
	</div>
	<div>
		<h2 class="text-3xl text-center">Community Integrations</h2>
		<div class="flex flex-wrap justify-center items-center">
			<Avatar link="https://getalby.com" image="/avatars/alby.jpg" name="Alby" />

			<Avatar link="https://bleskomat.com" image="/avatars/bleskomat.jpg" name="Bleskomat" />
			<Avatar
				link="https://github.com/coinos/coinoslib"
				image="/avatars/coinoslib.jpeg"
				name="coinoslib"
			/>
			<Avatar
				link="https://github.com/BTCTranslator/coinosTelegramBot"
				image="/avatars/telegrambot.png"
				name="coinosTelegramBot"
			/>
			<Avatar
				link="https://tokenocean.io"
				image="/avatars/tokenocean.jpg"
				name="Token Ocean"
			/>
		</div>
	</div>
	<div>
		<h2 class="text-3xl text-center">Community Alliances</h2>
		<div class="flex justify-center items-center">
			<Avatar link="https://liquid.net" image="/avatars/liquid.jpg" name="Liquid Network" />
		</div>
	</div>
	<div class="w-full xl:w-1/2 mx-auto">
		<h2 class="text-3xl text-center">Project Contributors</h2>
		<div class="flex flex-wrap justify-center items-center">
			<Avatar
				link="https://github.com/MySolSo"
				image="/avatars/MySolSo.png"
				name="MySolSo"
			/>
			<Avatar link="https://github.com/metoro" image="/avatars/metoro.jpeg" name="metoro" />
			<Avatar
				link="https://github.com/ran-guin"
				image="/avatars/ran-guin.jpeg"
				name="ran-guin"
			/>
			<Avatar
				link="https://github.com/TsuiAnthonYVR"
				image="/avatars/TsuiAnthonYVR.jpeg"
				name="TsuiAnthonYVR"
			/>
			<Avatar
				link="https://github.com/alexmillar"
				image="/avatars/alexmillar.jpeg"
				name="alexmillar"
			/>

			<Avatar
				link="https://github.com/kmalakoff"
				image="/avatars/kmalakoff.jpeg"
				name="kmalakoff"
			/>
			<Avatar
				link="https://github.com/infertux"
				image="/avatars/infertux.jpeg"
				name="infertux"
			/>
			<Avatar link="https://github.com/rikur" image="/avatars/rikur.png" name="rikur" />
			<Avatar
				link="https://github.com/drschwabe"
				image="/avatars/drschwabe.png"
				name="drschwabe"
			/>
			<Avatar
				link="https://github.com/improvethings"
				image="/avatars/improvethings.jpeg"
				name="improvethings"
			/>
		</div>
	</div>
	<div>
		<h2 class="text-3xl text-center">Project Members</h2>
		<div class="flex flex-wrap justify-center items-center">
			<Avatar
				link="https://github.com/secondl1ght"
				image="/avatars/secondl1ght.png"
				name="secondl1ght"
			/>
			<Avatar
				link="https://github.com/mabdullahabid"
				image="/avatars/mabdullahabid.jpeg"
				name="mabdullahabid"
			/>
			<Avatar
				link="https://github.com/ahopk127"
				image="/avatars/ahopk127.png"
				name="ahopk127"
			/>
		</div>
	</div>
	<div>
		<h2 class="text-3xl text-center">Project Maintainers</h2>
		<div class="flex justify-center items-center">
			<Avatar
				link="https://github.com/asoltys"
				image="/avatars/asoltys.jpeg"
				name="asoltys"
			/>
		</div>
	</div>
</div>
