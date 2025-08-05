<script setup lang="ts">
import type { DataItem } from 'slidev-addon-graph'

const items: DataItem[] = [
  {
    name: 'blog-post',
    display: '部落格文章',
    color: '#f87171',
    to: ['static-site-generator'],
    shapeProperties: {
      borderRadius: 40,
    },
  },
  {
    name: 'static-site-generator',
    display: '靜態網站生成器',
    color: '#fb923c',
    to: ['framework', 'bundler', 'markdown-compiler', 'image-process'],
  },
  {
    name: 'framework',
    display: '框架',
    color: '#4ade80',
    to: ['routing', 'state-management', 'ide-plugins', 'devtools', 'compiler', 'testing'],
  },
  {
    name: 'routing',
    display: '路由',
    color: '#a78bfa',
    to: ['ssr'],
    clicks: 4,
  },
  {
    name: 'state-management',
    display: '狀態管理',
    color: '#facc15',
    to: ['state-machine'],
    clicks: 4,
  },
  {
    name: 'ide-plugins',
    display: 'IDE 插件',
    color: '#60a5fa',
    to: ['lsp', 'highlight'],
    clicks: 4,
  },
  {
    name: 'devtools',
    display: '開發者工具',
    color: '#2dd4bf',
    clicks: 4,
  },
  // Extra
  {
    name: 'compiler',
    display: '編譯器',
    clicks: 6,
  },
  {
    name: 'bundler',
    display: '打包工具',
    clicks: 6,
  },
  {
    name: 'lsp',
    display: '語言伺服器協議',
    clicks: 6,
  },
  {
    name: 'ssr',
    display: '伺服器端渲染',
    clicks: 6,
  },
  {
    name: 'testing',
    display: '測試工具',
    to: ['dots4'],
    clicks: 6,
  },
  {
    name: 'markdown-compiler',
    display: 'Markdown 編譯器',
    to: ['dots3'],
    clicks: 6,
  },
  {
    name: 'image-process',
    display: '圖片處理',
    clicks: 6,
  },
  {
    name: 'state-machine',
    display: '狀態機',
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
    display: '語法高亮',
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
