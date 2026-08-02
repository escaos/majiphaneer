// @ts-check
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// SITE_URL is provided by CI (and declared in turbo.json build env so the
// cache can't replay a preview build as production). The localhost fallback
// makes local builds work; the robots.txt host-guard treats it as non-prod.
const site = process.env.SITE_URL ?? 'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [
    preact({ compat: true }),
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en', fr: 'fr', de: 'de' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
