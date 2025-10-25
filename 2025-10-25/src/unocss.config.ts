import config from '@slidev/client/uno.config'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { mergeConfigs, presetWebFonts } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-green-400 via-teal-400 to-blue-500',
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          serif: 'Bodoni Moda',
          jp: 'Noto Serif JP',
        },
        timeouts: {
          warning: 10_000,
          failure: 30_000,
        },
        processors: createLocalFontProcessor(),
      }),
    ],
  },
])
