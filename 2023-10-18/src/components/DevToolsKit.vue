<script setup lang="ts">
import { computed } from 'vue'

const PRESENT_START = 13

const sliderStyle = computed(() => ({
  transform: $clicks.value < PRESENT_START
    ? ''
    : `translateY(${($clicks.value - PRESENT_START + 1) * -1}em)`,
}))
const isNuxt = computed(() => $clicks.value === PRESENT_START)
const isVue = computed(() => $clicks.value === PRESENT_START + 1)
const isReact = computed(() => $clicks.value === PRESENT_START + 2)
const isSvelte = computed(() => $clicks.value === PRESENT_START + 3)
const isSolid = computed(() => $clicks.value === PRESENT_START + 4)
const isQwik = computed(() => $clicks.value === PRESENT_START + 5)
const isModernJS = computed(() => $clicks.value === PRESENT_START + 6)
const isYours = computed(() => $clicks.value === PRESENT_START + 7)

const isFaded = computed(() => PRESENT_START <= $clicks.value && $clicks.value <= PRESENT_START + 6)
</script>

<template>
  <div relative of-hidden h-1em text-5xl>
    <div transition-all duration-500 :style="sliderStyle">
      <div>
        DevTools Kit <sup v-click op75 text-base translate-y--3 inline-block>Early Brainstorming Stage</sup>
      </div>
      <div font-700 flex="~ gap-2">
        <div i-logos-nuxt-icon /> <div text-green>
          Nuxt
        </div> DevTools
      </div>
      <div font-700 flex="~ gap-2">
        <div i-logos-vue /> <div text-green>
          Vue
        </div> DevTools
      </div>
      <div font-700 flex="~ gap-2">
        <div i-logos-react /> <div text-blue>
          React
        </div> DevTools?
      </div>
      <div font-700 flex="~ gap-2">
        <div i-logos-svelte-icon /> <div text-red>
          Svelte
        </div> DevTools?
      </div>
      <div font-700 flex="~ gap-2">
        <div i-logos-solidjs-icon /> <div text-blue>
          Solid
        </div> DevTools?
      </div>
      <div font-700 flex="~ gap-2">
        <div i-logos-qwik-icon /> <div text-purple>
          Qwik
        </div> DevTools?
      </div>
      <div font-700 flex="~ gap-2" :class="isYours ? 'op0' : 'op100'" transition duration-300 delay-200>
        <img src="/modern-js-logo.svg" w-1em h-1em scale-115> <div text-blue>
          Morden.js
        </div> DevTools?
      </div>
      <div font-700 flex="~ gap-2">
        <div i-twemoji-winking-face /> <div text-yellow>
          Your
        </div> DevTools?
      </div>
    </div>
  </div>

  <div v-click op50 my2>
    Modular, composable, collabrative.
  </div>

  <div flex="~ gap-2" mt3>
    <DevToolsModule v-click icon="i-ri-seo-line" name="SEO Tools" />
    <DevToolsModule v-after icon="i-ri-code-box-line" name="Editors" />
    <DevToolsModule v-after icon="i-ri-empathize-line" name="Accessability" />
    <DevToolsModule v-after icon="i-simple-icons-pwa" name="PWA" />
    <DevToolsModule v-after icon="i-ri-folder-image-line" name="Assets" />
    <DevToolsModule
      v-click icon="i-ri-box-3-line" name="Bundle Size" logo="i-logos-vitejs" theme="purple"
      :class="{ op30: isFaded && isModernJS }"
    />
    <DevToolsModule
      v-after icon="i-ri-search-2-line" name="Vite Inspect" logo="i-logos-vitejs" theme="purple"
      :class="{ op30: isFaded && isModernJS }"
    />
    <DevToolsModule
      v-after icon="i-ri-list-settings-line" name="Vite Configs" logo="i-logos-vitejs" theme="purple"
      :class="{ op30: isFaded && isModernJS }"
    />
  </div>

  <div flex="~ gap-2" mt2>
    <DevToolsModule
      v-click icon="i-carbon-assembly-cluster" name="Components" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-network-4" name="Reactivity" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-after icon="i-ri-route-line" name="Router" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-after icon="i-icon-park-outline-pineapple" name="Pinia" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-click icon="i-ri-shapes-line" name="Nuxt Modules" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-function" name="Auto Imports" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-volume-file-storage" name="Pages" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-network-public" name="Server API" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
  </div>

  <div flex="~ gap-2" mt2>
    <DevToolsModule
      v-click icon="i-logos-react" name="DevTools" theme="blue"
      :class="{ op30: isFaded && !isReact && !isModernJS }"
      :glow="isReact || isModernJS"
    />
    <DevToolsModule
      v-after icon="i-carbon-data-set" name="State" theme="blue" logo="i-logos-react"
      :class="{ op30: isFaded && !isReact && !isModernJS }"
      :glow="isReact || isModernJS"
    />
    <DevToolsModule
      v-click icon="i-ri-route-line" name="Routes" theme="red" logo="i-logos-svelte-icon"
      :class="{ op30: isFaded && !isSvelte }"
      :glow="isSvelte"
    />
    <DevToolsModule
      v-after icon="i-carbon-assembly-cluster" name="Components" theme="red" logo="i-logos-svelte-icon"
      :class="{ op30: isFaded && !isSvelte }"
      :glow="isSvelte"
    />
    <DevToolsModule
      v-click icon="i-carbon-network-4" name="Reactivity" theme="blue" logo="i-logos-solidjs-icon"
      :class="{ op30: isFaded && !isSolid }"
      :glow="isSolid"
    />
    <DevToolsModule
      v-click icon="i-carbon-heat-map" name="Chunking" theme="purple" logo="i-logos-qwik-icon"
      :class="{ op30: isFaded && !isQwik }"
      :glow="isQwik"
    />
    <DevToolsModule
      v-click icon="i-logos-webpack" name="Webpack" theme="blue"
      :class="{ op30: isFaded && !isModernJS && !isNuxt }"
      :glow="isModernJS || isNuxt"
    />
    <DevToolsModule
      v-after name="Rspack" theme="red"
      :class="{ op30: isFaded && !isModernJS }"
      :glow="isModernJS"
    >
      <img src="/rspack.png" h-1.7em>
    </DevToolsModule>
  </div>

  <div flex="~ gap-2" mt2>
    <DevToolsModule
      v-click icon="i-logos-vitest" name="Vitest" theme="yellow"
    />
    <DevToolsModule v-after name="UnoCSS">
      <UnocssIcon h-1.7em />
    </DevToolsModule>
    <DevToolsModule
      v-after icon="i-logos-storybook-icon" name="Storybook" theme="pink"
    />
    <DevToolsModule v-after name="Historie" theme="green">
      <img src="/histoire.svg" h-1.7em>
    </DevToolsModule>
    <DevToolsModule
      v-after icon="i-ri-more-line" name="More..." border-dashed
    />
  </div>
</template>
