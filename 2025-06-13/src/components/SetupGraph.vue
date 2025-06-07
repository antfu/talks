<script setup lang="ts">
import type { DataItem } from 'slidev-addon-graph'

const items: DataItem[] = [
  {
    name: 'bar',
    display: 'typegen(configs)',
    color: '#8080f2',
    shapeProperties: {
      borderRadius: 40,
    },
  },
]
</script>

<template>
  <SlidevGraph
    id="setup"
    :clicks="0"
    :items="items"
  />
</template>
