<script setup lang="ts">
import type { DataItem } from 'slidev-addon-graph'

const items: DataItem[] = [
  {
    name: 'icon',
    display: '<Icon>',
    color: '#893842',
    shape: 'circle',
    to: ['client-bundle', 'ssr-payload', 'cache'],
  },
  {
    name: 'ssr-payload',
    display: 'SSR Payload',
    color: '#138442',
  },
  {
    name: 'client-bundle',
    display: 'Client Bundle',
    color: '#498424',
  },
  {
    name: 'server-endpoint',
    display: 'Server Endpoint',
    to: ['server-bundle', 'iconify'],
    color: '#080752',
  },
  {
    name: 'server-bundle',
    display: 'Server Bundle',
    color: '#401408',
  },
  {
    name: 'cache',
    display: 'Cache',
    to: ['server-endpoint'],
    related: ['ssr-payload'],
  },
  {
    name: 'iconify',
    display: 'Iconify API',
    color: '#108598',
  },
]
</script>

<template>
  <div relative>
    <div v-click="4" absolute w-1px h-full top-0 bottom-0 left-80 border="r dashed gray/30" />
    <div v-click="7" absolute w-1px h-full top-0 bottom-0 left-152 border="r dashed gray/30" />
    <div absolute top-2 left-10 text-center>
      <div flex="~ gap-1 items-center justify-center">
        <div i-ph-globe-duotone text-lg />
        Client
      </div>
      <div op50 text-sm>
        Instant rendering with minimal bundle
      </div>
    </div>
    <div v-click="4" absolute top-2 left-86 text-center>
      <div flex="~ gap-1 items-center justify-center">
        <div i-ph-dresser-duotone text-lg />
        Server
      </div>
      <div op50 text-sm>
        Dynamic icons with larger collections
      </div>
    </div>
    <div v-click="7" absolute top-2 left-158 text-center>
      <div flex="~ gap-1 items-center justify-center">
        <div i-ph-network-duotone text-lg />
        Remote
      </div>
      <div op50 text-sm>
        Serve as many icons as possible
      </div>
    </div>
    <SlidevGraph
      id="dataflow"
      h-70 :clicks="0"
      :items="items"
    />
  </div>
</template>
