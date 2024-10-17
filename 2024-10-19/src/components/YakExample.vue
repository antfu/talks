<script setup lang="ts">
import type { DataItem } from 'slidev-addon-graph'

const items: DataItem[] = [
  {
    name: 'blog-post',
    display: 'Blog Post',
    color: '#f87171',
    to: ['static-site-generator'],
    shapeProperties: {
      borderRadius: 40,
    },
  },
  {
    name: 'static-site-generator',
    display: 'Static Site Generator',
    color: '#fb923c',
    to: ['framework', 'bundler', 'markdown-compiler', 'image-process'],
  },
  {
    name: 'framework',
    display: 'Framework',
    color: '#4ade80',
    to: ['routing', 'state-management', 'ide-plugins', 'devtools', 'compiler', 'testing'],
  },
  {
    name: 'routing',
    display: 'Routing',
    color: '#a78bfa',
    to: ['ssr'],
    clicks: 4,
  },
  {
    name: 'state-management',
    display: 'State Management',
    color: '#facc15',
    to: ['state-machine'],
    clicks: 4,
  },
  {
    name: 'ide-plugins',
    display: 'IDE Plugins',
    color: '#60a5fa',
    to: ['lsp', 'highlight'],
    clicks: 4,
  },
  {
    name: 'devtools',
    display: 'DevTools',
    color: '#2dd4bf',
    clicks: 4,
  },
  // Extra
  {
    name: 'compiler',
    display: 'Compiler',
    clicks: 6,
  },
  {
    name: 'bundler',
    display: 'Bundler',
    clicks: 6,
  },
  {
    name: 'lsp',
    display: 'LSP',
    clicks: 6,
  },
  {
    name: 'ssr',
    display: 'SSR',
    clicks: 6,
  },
  {
    name: 'testing',
    display: 'Testing Utils',
    to: ['dots4'],
    clicks: 6,
  },
  {
    name: 'markdown-compiler',
    display: 'Markdown Compiler',
    to: ['dots3'],
    clicks: 6,
  },
  {
    name: 'image-process',
    display: 'Image Processing',
    clicks: 6,
  },
  {
    name: 'state-machine',
    display: 'State Machine',
    to: ['dots1'],
    clicks: 6,
  },
  {
    name: 'dots1',
    display: '...',
    dashed: true,
    clicks: 6,
  },
  {
    name: 'dots2',
    display: '...',
    dashed: true,
    clicks: 6,
  },
  {
    name: 'dots3',
    display: '...',
    dashed: true,
    clicks: 6,
  },
  {
    name: 'dots4',
    display: '...',
    dashed: true,
    clicks: 6,
  },
  {
    name: 'highlight',
    display: 'Syntax Highlight',
    to: ['dots2'],
    clicks: 6,
  },
]
</script>

<template>
  <SlidevGraph
    id="yak-example"
    :clicks="0"
    :items="items"
  />
</template>
