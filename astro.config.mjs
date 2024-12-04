import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nanudmr.github.io/morgado-astro/',
  integrations: [mdx(), sitemap()],
  base: '/morgado-astro/', // Set the base for GitHub Pages
  outDir: 'dist', // Default output directory for Astro builds
});
