import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const mdsvexOptions = {
	extensions: ['.md']
};
const config = {
	kit: {
		extensions: ['.svelte', '.md'],
		preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
