<script setup lang="ts">
defineProps<{
  icon?: string
  name: string
  logo?: string
  theme?: string
  glow?: boolean
}>()

const themes = {
  default: 'bg-active border-gray:20 shadow-white:50',
  green: 'text-green2 border-green:20 bg-green:10 shadow-green:50',
  teal: 'text-teal2 border-teal:20 bg-teal:10 shadow-teal:50',
  blue: 'text-blue2 border-blue:20 bg-blue:10 shadow-blue:50',
  red: 'text-red2 border-red:20 bg-red:10 shadow-red:50',
  pink: 'text-pink2 border-pink:20 bg-pink:10 shadow-pink:50',
  yellow: 'text-yellow2 border-yellow:20 bg-yellow:10 shadow-yellow:50',
  purple: 'text-purple2 border-purple:20 bg-purple:10 shadow-purple:50',
}
</script>

<template>
  <div
    border="~ rounded " pt4 flex="~ col items-center gap-2" w-20 h-20 relative duration-500
    :class="themes[theme || 'default']"
    :style="{
      'box-shadow': glow ? '0 0 6px 0 var(--un-shadow-color)' : '0 0 0 0 var(--un-shadow-color)',
    }"
  >
    <slot>
      <div text-3xl :class="icon" />
    </slot>
    <div text-11px op50>
      {{ name }}
    </div>
    <div :class="logo" absolute top-1 right-1 text-sm />
  </div>
</template>
