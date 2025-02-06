// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
      },
    integrations: [tailwind(), sitemap(), mdx()],
    site: 'https://trangbui.me',
});