import config from '@slidev/client/uno.config'
import { presetWebFonts } from 'unocss'
import { defineConfig } from 'unocss/vite'

export default defineConfig({
  ...config,
  shortcuts: {
    ...config.shortcuts || {},
    'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
  },
  presets: [
    presetWebFonts({
      fonts: {
        strong: 'Rubik Iso',
        jp: 'Noto Serif JP',
      },
    }),
  ],
})
