// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: false,
  stylistic: {
    indent: 2,
    semi: true,
  },
})
