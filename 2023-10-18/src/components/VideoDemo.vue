<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
}>()

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const controls = ref(false)
</script>

<template>
  <video
    type="video/mp4"
    :src="base + src" loop muted autoplay :controls="controls"
    w-190 ma shadow-2xl
    :style="{
      'border-radius': '1% / 1.5%',
    }"
    @click="controls = !controls"
  />
</template>
