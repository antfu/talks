import { defineMonacoSetup } from '@slidev/types'

// @unocss-include

export default defineMonacoSetup((monaco) => {
  monaco.editor.onDidCreateEditor((editor) => {
    const collection = editor.createDecorationsCollection()
    function update() {
      collection.set([
        // {
        //   range: new monaco.Range(1, 1, 1, 5),
        //   options: {
        //     inlineClassName: 'bg-red',
        //     hoverMessage: { value: 'Hello' },
        //   },
        // },
      ])
    }
    editor.onDidChangeModel(() => {
      update()
    })
    editor.onDidChangeModelContent(() => {
      update()
    })
  })
})
