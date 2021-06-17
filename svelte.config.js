import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [tailwind, autoprefixer]
		}
	}),

	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
