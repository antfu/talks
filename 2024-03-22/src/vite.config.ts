import { defineConfig } from 'vite'
import '@slidev/cli'
import MarkdownItMagicLink from 'markdown-it-magic-link'

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink)
      },
    },
  },
})
