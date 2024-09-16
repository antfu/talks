<script setup lang="ts">
/// <reference types="vite/client" />

import { useNow } from '@vueuse/core'
import { computed, onActivated, ref } from 'vue'

const imagesRecord = import.meta.glob('../public/ecosystem/*.{svg,png}', { eager: true, as: 'url' })
const images = Object.values(imagesRecord)
  .map(i => i.replace('/public/', '/'))
  .sort(() => Math.random() - 0.5)

const lines = Array.from({ length: 6 }, (_, idx) => (
  idx % 3 === 0
    ? images.slice(0, images.length / 3)
    : idx % 3 === 1
      ? images.slice(images.length / 3, images.length / 3 * 2)
      : images.slice(images.length / 3 * 2)
).sort(() => Math.random() - 0.5))

const time = useNow({ interval: 'requestAnimationFrame' })
const _now = ref(Date.now())
const offset = computed(() => +time.value - _now.value)

const speed = Array.from({ length: 6 }, _ => 60 + Math.random() * 40)

onActivated(() => {
  _now.value = Date.now()
})
</script>

<template>
  <div flex="~ col gap-6" mt--10>
    <div
      v-for="line, idx in lines" :key="idx"
      flex="~ gap-8 items-center justify-center"
      :class="idx % 2 ? 'ml15' : ''"
      :style="{
        transform: `translateX(${(idx % 2) * 400 + idx * 20 - offset / speed[idx] * (idx % 2 ? 1 : -1)}px)`,
      }"
    >
      <img v-for="url in line" :key="url" :src="url" h-18 max-w-25 object-contain>
      <img v-for="url in line" :key="url + 1" :src="url" h-18 max-w-25 object-contain>
      <img v-for="url in line" :key="url + 2" :src="url" h-18 max-w-25 object-contain>
    </div>
  </div>
</template>
