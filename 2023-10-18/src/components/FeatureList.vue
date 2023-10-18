<script setup lang="ts">
const list = [
  'Components Graph',
  'Function Timeline',
  'Auto Imports',
  'Composables',
  'Open Graph',
  'Assets Viewer',
  'Server API',
  'Transform Inspector',
  'Component Inspector',
  'Production Build Analyzer',
  'Modules Integrations',
  'Integrated VS Code Editor',
  'Plugins Inspector',
  'Storage Management',
  'One-click Module Installation',
  'Modules Management',
  'Terminals',
  'Picture-in-Picture Popup',
  'Open in Editor',
  'Payload State Editor',
  'Integrated Documentation',
  'Pages Inspector',
  'Navigation Time Metrics',
  'Split Panels',
  'Assets Uploads',
  'Nitro Virtual Files',
  'In App DevTools',
]
</script>

<template>
  <div flex="~ gap-x-10 gap-y-5 wrap justify-center" text-2xl scale-115>
    <span
      v-for="item of list"
      :key="item"
      :style="{
        transition: 'all 0.2s ease-in-out',
        animation: `features-pulse ${3 + item.length * 0.2}s infinite`,
        opacity: 0,
        fontWeight: item.length % 3 === 0 ? 'bold' : 'normal',
        animationDelay: `${item.length * 0.1 - 0.5}s`,
      }"
    >{{ item }}</span>
  </div>
</template>

<style>
@keyframes features-pulse {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}
</style>
