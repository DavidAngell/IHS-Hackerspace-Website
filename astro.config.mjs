import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],
  vite: {
    ssr: {
      external: ["svgo"],
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
  site: 'https://www.my-site.dev',
})
