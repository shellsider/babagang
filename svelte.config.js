// import adapter from '@sveltejs/adapter-netlify';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     // Consult https://kit.svelte.dev/docs/integrations#preprocessors
//     // for more information about preprocessors
//     preprocess: vitePreprocess(),

//     kit: {
//         adapter: adapter()
//     }
// };

// export default config;

import adapter from 'svelte-adapter-static-digitalocean';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({}),
    }
};


export default config;

// import adapter from '@sveltejs/adapter-node';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const config = {
//     preprocess: vitePreprocess(), // or vitePreprocess() depending on what you're using

//     kit: {
//         adapter: adapter({
//             out: 'build', // Optional: Output directory for the built Node.js server
//             precompress: false, // Optional: Enable gzip and brotli compression
//             envPrefix: '' // Optional: Customize environment variable prefixes
//         })
//     }
// };

// export default config;


