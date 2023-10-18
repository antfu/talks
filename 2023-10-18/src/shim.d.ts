import type { Ref } from 'vue'

declare global {
  const $clicks: Ref<number>
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $clicks: Ref<number>
  }
}

export {}
