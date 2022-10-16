import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],
  // sitemap: true,
  vite: {
    ssr: {
      external: ["svgo"],
    },
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
      },
      preserveSymlinks: true
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
  site: 'https://localhost:5000/',
})
