// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
      },
    integrations: [tailwind(), sitemap()],
    site: 'https://trangbui.me',
});