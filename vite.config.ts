import MarkdownItMagicLink from 'markdown-it-magic-link'
import { defineConfig } from 'vite'
import '@slidev/cli'

export default defineConfig({
  optimizeDeps: {
    include: [
      'chroma-js',
      'vis-network',
      'vis-data',
    ],
  },
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            'NuxtLabs': { link: 'https://nuxtlabs.com', imageUrl: 'https://nuxtlabs.com/nuxt.png' },
            'Vitest': 'https://github.com/vitest-dev/vitest',
            'Slidev': 'https://github.com/slidevjs/slidev',
            'VueUse': 'https://github.com/vueuse/vueuse',
            'UnoCSS': 'https://github.com/unocss/unocss',
            'Elk': 'https://github.com/elk-zone/elk',
            'Type Challenges': 'https://github.com/type-challenges/type-challenges',
            'Vue': 'https://github.com/vuejs/core',
            'Nuxt': 'https://github.com/nuxt/nuxt',
            'Vite': 'https://github.com/vitejs/vite',
            'Shiki': 'https://github.com/shikijs/shiki',
            'Twoslash': 'https://github.com/twoslashes/twoslash',
            'ESLint Stylistic': 'https://github.com/eslint-stylistic/eslint-stylistic',
            'Unplugin': 'https://github.com/unplugin',
            'Nuxt DevTools': 'https://github.com/nuxt/devtools',
            'Vite PWA': 'https://github.com/vite-pwa',
            'i18n Ally': 'https://github.com/lokalise/i18n-ally',
            'ESLint': 'https://github.com/eslint/eslint',
            'Astro': 'https://github.com/withastro/astro',
            'TwoSlash': 'https://github.com/twoslashes/twoslash',
            'Anthony Fu Collective': { link: 'https://opencollective.com/antfu', imageUrl: 'https://github.com/antfu-collective.png' },
            'Netlify': { link: 'https://netlify.com', imageUrl: 'https://github.com/netlify.png' },
            'Stackblitz': { link: 'https://stackblitz.com', imageUrl: 'https://github.com/stackblitz.png' },
            'Vercel': { link: 'https://vercel.com', imageUrl: 'https://github.com/vercel.png' },
            'No Coding Today': { link: 'https://bento.me/nocodingtoday', imageUrl: 'https://creatorspace.imgix.net/users/cm7ba0sfb02ziqa01b7vij5bp/qGq9BEgucXOxVACu-logo.jpg?w=100&h=100' },
            '尖不想寫扣': { link: 'https://bento.me/nocodingtoday', imageUrl: 'https://creatorspace.imgix.net/users/cm7ba0sfb02ziqa01b7vij5bp/qGq9BEgucXOxVACu-logo.jpg?w=100&h=100' },
          },
        })
      },
    },
  },
})
