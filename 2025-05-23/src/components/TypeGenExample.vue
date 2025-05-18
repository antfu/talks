<script setup lang="ts">
import type { DataItem } from 'slidev-addon-graph'

const items: DataItem[] = [
  {
    name: 'typegen',
    display: 'typegen(configs)',
    color: '#8080f2',
    to: ['configs'],
    shapeProperties: {
      borderRadius: 40,
    },
  },
  {
    name: 'configs',
    display: 'Get ESLint plugins from configs',
    color: '#7178f8',
    to: ['jsonschema'],
    clicks: 1,
  },
  {
    name: 'jsonschema',
    display: 'Get JSON Schema from each rule',
    color: '#f8df71',
    to: ['json-schema-to-typescript'],
    clicks: 2,
  },
  {
    name: 'json-schema-to-typescript',
    display: 'json-schema-to-typescript',
    color: '#71f8a5',
    to: ['file'],
    clicks: 3,
  },
  {
    name: 'file',
    display: 'Write typgen.d.ts',
    color: '#3178C6',
    to: ['augment'],
    clicks: 4,
  },
  {
    name: 'augment',
    display: 'Augment to ESLint Type',
    color: '#3178C6',
    to: ['typegen'],
    clicks: 5,
  },
]
</script>

<template>
  <SlidevGraph
    id="typegen-example"
    :clicks="0"
    :items="items"
  />
</template>
