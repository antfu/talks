import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  react: false,
  pnpm: true,
  formatters: {
    css: true,
    // markdown: true,
    // slidev: {
    //   files: [
    //     '*/src/slides.md',
    //   ],
    // },
  },
  ignores: [
    '**/demo/eslint/**',
  ],
})
  .override('antfu/markdown/disables', {
    rules: {
      'import/newline-after-import': 'off',
    },
  })
