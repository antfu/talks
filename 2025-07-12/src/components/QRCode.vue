<script setup lang="ts">
import { renderSVG } from 'uqr'
import { computed } from 'vue'

const props = defineProps<{
  text: string
  white?: string
  black?: string
}>()

const html = computed(() => renderSVG(props.text, {
  whiteColor: props.white,
  blackColor: props.black,
}))
</script>

<template>
  <div v-html="html" />
</template>
