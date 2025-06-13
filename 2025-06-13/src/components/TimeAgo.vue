<script setup lang="ts">
const props = defineProps<{
  date: string
}>()

const formatter = new Intl.RelativeTimeFormat('en-US')
const time = formatter.format(Math.ceil((+new Date(props.date) - (+new Date())) / 1000 / 60 / 60 / 24), 'days')
</script>

<template>
  <time :datetime="date">
    {{ time }}
  </time>
</template>
