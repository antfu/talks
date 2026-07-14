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
    '**/dist-stale/**',
  ],
})
  .removeRules(
    'markdown/require-alt-text',
    'markdown/no-multiple-h1',
    'markdown/heading-increment',
    'markdown/no-missing-link-fragments',
    'import/newline-after-import',
  )
