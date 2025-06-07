<script setup lang="ts">
import type { DataItem } from 'slidev-addon-graph'

const items: DataItem[] = [
  {
    name: 'sfc',
    display: 'Vue SFC',
    color: '#42b883',
    to: ['define-wc'],
  },
  {
    name: 'define-wc',
    display: 'defineCustomComponent',
    color: '#125353',
    to: ['wc'],
    shapeProperties: {
      borderRadius: 40,
    },
  },
  {
    name: 'wc',
    display: 'WebComponents',
    color: '#7178f8',
    to: ['index.ts'],
    clicks: 2,
  },
  {
    name: 'index.ts',
    display: 'index.ts',
    color: '#3178c6',
    to: ['tsdown'],
  },
  {
    name: 'tsdown',
    display: 'tsdown',
    color: '#f8df71',
    shapeProperties: {
      borderRadius: 40,
    },
    to: ['packagejson', 'unocss'],
  },
  {
    name: 'unocss',
    display: 'UnoCSS',
    color: '#914324',
    shapeProperties: {
      borderRadius: 40,
    },
    from: ['sfc'],
    to: ['define-wc'],
  },
  {
    name: 'packagejson',
    display: 'package',
    color: '#991243',
  },
]
</script>

<template>
  <SlidevGraph
    id="setup"
    :clicks="-1"
    :items="items"
  />
</template>
