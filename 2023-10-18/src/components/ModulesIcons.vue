<script setup lang="ts">
/// <reference types="vite/client" />

const imagesRecord = import.meta.glob('../public/modules/*.{svg,png}', { eager: true, as: 'url' })
const images = Object.values(imagesRecord)
  .map(i => i.replace('/public/', '/'))
  .sort(() => Math.random() - 0.5)
</script>

<template>
  <div flex="~ gap-8 wrap items-center" pt6 pr-60>
    <img v-for="img of images" :key="img" :src="img" w-20 h-20>
  </div>
</template>
