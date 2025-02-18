import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  react: false,
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
    '**/yak-shaving-map/**',
  ],
})
