<script setup lang="ts">
import contributors from '../contributors.json'

const COLUMNS = 17
const OFFSET_X = 20
const OFFSET_Y = 20
const SIZE = 45
const PADDING = 10

function getPosition(index: number, login: string) {
  const row = Math.floor(index / COLUMNS)
  const column = index % COLUMNS
  const odd = row % 2 === 1
  return {
    left: `${column * (SIZE + PADDING) + (odd ? (SIZE + PADDING) / 2 : 0) + OFFSET_X}px`,
    top: `${row * (SIZE + PADDING) * 0.95 + OFFSET_Y}px`,
    width: `${SIZE}px`,
    height: `${SIZE}px`,
    viewTransitionName: `contributor-${login.toLowerCase()}`,
  }
}
</script>

<template>
  <div flex="~ gap-4 wrap">
    <div v-for="contributor, index of contributors" :key="contributor">
      <img
        :src="`/avatars/${contributor}.png`"
        absolute rounded-full
        :alt="contributor"
        :style="getPosition(index, contributor)"
      >
    </div>
  </div>
</template>
