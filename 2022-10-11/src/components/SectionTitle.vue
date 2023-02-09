<script setup lang="ts">
defineProps<{
  title: string
  headline?: string
  description?: string
  color?: string
}>()
</script>

<template>
  <div flex="~ col" justify-center h-full px-15>
    <div v-if="headline" text-6xl font-300 op80>
      {{ headline }}
    </div>
    <div :class="color" text-7xl font-700>
      {{ title }}
    </div>
    <div v-if="description" text-3xl mt-2>
      {{ description }}
    </div>
  </div>
</template>
