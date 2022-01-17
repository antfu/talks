<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<template>
  <a
    class="text-current bg-gray-500/10 hover:bg-gray-500/15 p-4 rounded flex items-center gap-3 !border-none"
    :href="`https://${url}`"
    target="_blank"
  >
    <div class="opacity-50 p-1">
      <slot name="icon" />
    </div>
    <div>
      <slot />
      <pre class="font-mono opacity-50 text-xs">{{ url }}</pre>
    </div>
  </a>
</template>
