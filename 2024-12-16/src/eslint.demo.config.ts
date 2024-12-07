// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: false,
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json'
  },
  stylistic: {
    indent: 2,
    semi: true,
  },
})