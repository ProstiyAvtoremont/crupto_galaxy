import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://galaxyspace.xyz',
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap()],
});
