<script setup lang="ts">
defineProps<{
  pros: string[]
  cons: string[]
}>()
</script>

<template>
  <div grid="~ cols-2 gap-x-4 items-end" my4 absolute bottom-0 left-15 right-15>
    <div v-click flex="~ col gap-1" class="pros-cons-drawer">
      <div flex="~ gap-1 items-center" font-600 text-green>
        <div i-ph-thumbs-up-duotone />
        Pros
      </div>

      <div
        text-green1 border="~ green/20 rounded" px3 py3 pb-12 mb--10 relative
        from-green:20 to-teal:15 bg-gradient-to-br flex="~ col gap-2"
      >
        <div v-for="pro in pros" :key="pro" flex="~ gap-2 items-center">
          <div i-ph-check-circle-duotone text-green text-xl />
          {{ pro }}
        </div>
        <div absolute top--4px right-4px left-4px h-3px bg-green:10 border="t x green/15 rounded-t-lg" />
      </div>
    </div>

    <div v-click flex="~ col gap-1" class="pros-cons-drawer">
      <div flex="~ gap-1 items-center" text-red font-600>
        <div i-ph-thumbs-down-duotone />
        Cons
      </div>

      <div
        text-red1 border="~ red/20 rounded" px3 py3 pb-12 mb--10 relative
        from-red:20 to-rose:15 bg-gradient-to-br flex="~ col gap-2"
      >
        <div v-for="con in cons" :key="con" flex="~ gap-2 items-center">
          <div i-ph-warning-duotone text-orange text-xl />
          {{ con }}
        </div>
        <div absolute top--4px right-4px left-4px h-3px bg-red:10 border="t x red/15 rounded-t-lg" />
      </div>
    </div>
  </div>
</template>

<style>
.pros-cons-drawer {
  transition: all 0.15s ease;
}
.pros-cons-drawer.slidev-vclick-hidden {
  transform: translateY(100%);
}
</style>
