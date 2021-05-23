import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/theme-default/windi.config'

export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    theme: {
      extend: {
        fontFamily: {
          mono: '"Input Mono", monospace',
        },
      },
    },
  }),
)
