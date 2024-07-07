import fsp from 'node:fs/promises'
import { defineConfig } from 'vite'
import baseConfig from '../../vite.config'

// Ensure the .nuxt directory exists
await fsp.mkdir('yak-shaving-map/.nuxt', { recursive: true })
await fsp.writeFile('yak-shaving-map/.nuxt/tsconfig.json', '{}')

export default defineConfig({
  ...baseConfig,
})
