import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			postcss: {
				plugins: [tailwind, autoprefixer]
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),
	}
};

export default config;
