<script setup lang="ts">
const props = defineProps<{
  title: string,
  headline?: string
  description?: string
  color?: string
}>()
</script>

<template>
  <div flex="~ col" justify-center h-full px-15>
    <div text-6xl font-300 op80 v-if="headline">{{headline}}</div>
    <div :class="color" text-7xl font-700>{{title}}</div>
    <div text-3xl mt-2 v-if="description">{{description}}</div>
  </div>
</template>
