<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name?: string
  names?: string[]
}>()

const names = computed(() => props.names || [props.name])
</script>

<template>
  <div class="px-2 -mx-2 mt-4 py-2">
    <img src="https://vueuse.org/favicon.svg" class="h-1em -mb-0.5 mr-2 inline-block align-baseline" />
    <span class="opacity-50">在 VueUse 中可用: </span><a v-for="n of names" :key="n" class="font-mono opacity-75 mr-2 hover:opacity-100" :href="`https://vueuse.org/${n}`">{{ n }}</a>
  </div>
</template>
