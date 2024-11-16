<script setup lang="ts">
import { DataSet, Timeline } from 'vis-timeline/standalone'
import { onMounted, ref, watch } from 'vue'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  const end = '2025-05-12'
  const groups = new DataSet([
    { id: 1, content: 'Blog' },
    { id: 2, content: 'Stages' },
    { id: 3, content: 'ESLint v8' },
    { id: 4, content: 'ESLint v9' },
  ])
  let id = 0
  const items = new DataSet([
    {
      id: id++,
      content: 'RFC',
      group: 2,
      start: '2019-01-20',
      end: '2020-07-10',
      type: 'range',
      className: 'text-center rounded-lg! bg-amber:20! text-amber! border-amber:50!',
    },
    {
      id: id++,
      content: 'Implementation',
      group: 2,
      start: '2020-07-11',
      end: '2023-07-14',
      type: 'range',
      className: 'text-center rounded-lg! bg-gray:20! text-gray! border-gray:50!',
    },
    // {
    //   id: id++,
    //   content: 'Feature complete',
    //   group: 2,
    //   start: '2023-07-16',
    //   end,
    //   type: 'range',
    //   className: 'text-center rounded-lg! bg-gray:20! text-gray! border-gray:50!',
    // },

    {
      id: id++,
      content: 'Blog: Flat config rollout plans',
      group: 1,
      start: '2023-10-10',
      className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!',
    },
    {
      id: id++,
      content: 'Blog: Flat config introductions (3 parts)',
      group: 1,
      start: '2022-08-03',
      className: 'px2 rounded-lg! bg-green:20! text-green! border-green:50!',
    },
    {
      id: id++,
      content: 'Blog: What\'s coming in v9.0',
      group: 1,
      start: '2023-11-07',
      className: 'px2 rounded-lg! bg-lime:20! text-lime! border-lime:50!',
    },

    {
      id: id++,
      content: 'Experimental since v8.21.0+',
      group: 3,
      start: '2022-08-01',
      end: '2023-07-14',
      type: 'range',
      className: 'px2 rounded-l-lg! bg-blue:20! text-blue! border-blue:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: 'Feature complete since v8.45.0+',
      group: 3,
      start: '2023-07-14',
      end,
      type: 'range',
      className: 'px2 rounded-r-lg! bg-blue:20! text-blue! border-blue:50!',
    },
    {
      id: id++,
      content: 'Alpha & Beta',
      group: 4,
      start: '2023-12-29',
      end: '2024-04-20',
      type: 'range',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: 'Flat config as default in v9.0',
      group: 4,
      start: '2024-04-20',
      end,
      type: 'range',
      className: 'px2 rounded-r-lg! bg-purple:20! text-purple! border-purple:50!',
    },
  ])

  // Create a Timeline
  const timeline = new Timeline(el.value, null, {
    stack: true,
    height: 350,
    width: 1900,
    horizontalScroll: false,
    verticalScroll: false,
    zoomable: false,
    moveable: false,
    margin: {
      item: {
        horizontal: 0,
      },
    },
  })
  timeline.setGroups(groups)
  timeline.setItems(items)

  timeline.redraw()
  // @ts-expect-error missing type
  watch([$clicks, $page], () => {
    timeline.redraw()
  })
})
</script>

<template>
  <div v-click mb-3 flex="~ col">
    <div scale-50 origin-left-top relative mb--42>
      <div ref="el" absolute h-350px w-1800px />
    </div>
    <div text-xs op50 mla mr--10 flex="~ inline gap-1">
      Data Source:
      <a
        href="https://gist.github.com/nzakas/58dce526e839b7d53bd89fc81d65ce9e"
        target="_blank" rel="noopener noreferrer"
      >
        Flat config rollout timelime by Nicholas C. Zakas
      </a>
    </div>
  </div>
</template>

<style>
.vis-timeline {
  border: 0 !important;
}

.vis-labelset .vis-label,
.vis-time-axis .vis-text {
  color: inherit;
  opacity: 0.8;
}

.vis-grid,
.vis-label,
.vis-group,
.vis-panel {
  border-color: #333 !important;
}
</style>
