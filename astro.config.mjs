import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import client from './src/data/client.json' with { type: 'json' };

export default defineConfig({
  site: client.domain,
  integrations: [
    sitemap({
      serialize(item) {
        // Homepage: highest priority
        if (item.url === client.domain + '/' || item.url === client.domain) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
          return item;
        }
        // Top-level service pages: high priority
        if (item.url.includes('/services/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
          return item;
        }
        // City index: medium
        if (/\/service-area\/[^/]+\/?$/.test(item.url)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
          return item;
        }
        // City + service combo: slightly lower
        if (/\/service-area\/[^/]+\/[^/]+\/?$/.test(item.url)) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
          return item;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
