import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://shagoto.me',
  output: 'static',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
