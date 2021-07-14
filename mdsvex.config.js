const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

  layout: {
		page: './src/routes/_page.svelte',
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
