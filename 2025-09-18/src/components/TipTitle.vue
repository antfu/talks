<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

defineProps<{
  title: string
  number: number
  description?: string
}>()

const { $clicks, $renderContext } = useSlideContext()
</script>

<template>
  <div translate-y--5>
    <div
      text-1.5em inline-block tracking-widest transform transition-all duration-400 font-bold mb-2
      :class="($clicks >= 1 || $renderContext !== 'slide') ? 'op50' : 'scale-250 translate-y-10'"
    >
      Tip {{ number }}
    </div>

    <div v-click text-3.5em leading-1em font-serif>
      {{ title }}
    </div>

    <div v-if="description" v-click text-1.5em op50 mt2 mb--10>
      {{ description }}
    </div>
  </div>
</template>
