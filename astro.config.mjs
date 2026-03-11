// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://roonjha.com',
  build: {
    assets: '_assets',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
