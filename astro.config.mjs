import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nanudmr.github.io/morgado-astro/',
  base: '/morgado-astro/',
  integrations: [mdx(), sitemap()],
});
