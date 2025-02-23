import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://nanudmr.github.io/',

  // Correct base for GitHub Pages
  base: '/morgado-astro',

  integrations: [mdx(), sitemap()],
  adapter: netlify(),
});