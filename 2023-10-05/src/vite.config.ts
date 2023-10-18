import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import '@slidev/cli'

export default defineConfig({
  plugins: [
    Inspect(),
  ],
})
