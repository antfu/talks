<script setup lang="ts">
import { computed } from 'vue'

const PRESENT_START = 13

const sliderStyle = computed(() => ({
  transform: $clicks.value < PRESENT_START
    ? ''
    : `translateY(${($clicks.value - PRESENT_START + 1) * -1}em)`,
}))
const isAstro = computed(() => $clicks.value === PRESENT_START + 5)
const isNuxt = computed(() => $clicks.value === PRESENT_START)
const isVue = computed(() => isAstro.value || $clicks.value === PRESENT_START + 1)
const isReact = computed(() => isAstro.value || $clicks.value === PRESENT_START + 2)
const isSvelte = computed(() => isAstro.value || $clicks.value === PRESENT_START + 3)
const isSolid = computed(() => isAstro.value || $clicks.value === PRESENT_START + 4)

const isFaded = computed(() => PRESENT_START <= $clicks.value && $clicks.value <= PRESENT_START + 5)
</script>

<template>
  <div relative of-hidden h-1em text-5xl>
    <div transition-all duration-500 :style="sliderStyle">
      <div flex="~ gap-2">
        <img src="/devtools-kit.svg" h-1em>
        <sup v-click op75 text-base translate-y-2 inline-block>计划</sup>
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
        <div i-logos-astro-icon invert hue-rotate-180 /> <div text-orange6>
          Astro
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
    模块化、可组合、互相协作
  </div>

  <div flex="~ gap-2" mt3>
    <DevToolsModule
      v-click icon="i-ri-box-3-line" name="打包分析" logo="i-logos-vitejs" theme="purple"
    />
    <DevToolsModule
      v-after icon="i-ri-search-2-line" name="插件分析" logo="i-logos-vitejs" theme="purple"
    />
    <DevToolsModule
      v-after icon="i-ri-list-settings-line" name="Vite 配置" logo="i-logos-vitejs" theme="purple"
    />
    <DevToolsModule
      v-click icon="i-logos-vitest" name="Vitest" theme="yellow"
    />
    <DevToolsModule v-click name="Oxlint" theme="blue">
      <img src="/oxc.svg" h-1.8em>
    </DevToolsModule>
    <DevToolsModule v-click icon="i-ri-seo-line" name="SEO 工具" />
    <DevToolsModule v-after icon="i-ri-empathize-line" name="无障碍" />
    <DevToolsModule v-after icon="i-simple-icons-pwa" name="PWA" />
  </div>

  <div flex="~ gap-2" mt2>
    <DevToolsModule
      v-click icon="i-carbon-assembly-cluster" name="组件" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-network-4" name="响应式" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-after icon="i-ri-route-line" name="路由" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-after icon="i-icon-park-outline-pineapple" name="Pinia 可视化" theme="green" logo="i-logos-vue"
      :class="{ op30: isFaded && !isVue && !isNuxt }"
      :glow="isVue || isNuxt"
    />
    <DevToolsModule
      v-click icon="i-ri-shapes-line" name="Nuxt 模块" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-function" name="自动导入" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-volume-file-storage" name="文件路由" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
    <DevToolsModule
      v-after icon="i-carbon-network-public" name="服务端 API" theme="teal" logo="i-logos-nuxt-icon"
      :class="{ op30: isFaded && !isNuxt }"
      :glow="isNuxt"
    />
  </div>

  <div flex="~ gap-2" mt2>
    <DevToolsModule
      v-click icon="i-logos-react" name="DevTools" theme="blue"
      :class="{ op30: isFaded && !isReact }"
      :glow="isReact"
    />
    <DevToolsModule
      v-after icon="i-carbon-data-set" name="状态管理" theme="blue" logo="i-logos-react"
      :class="{ op30: isFaded && !isReact }"
      :glow="isReact"
    />
    <DevToolsModule
      v-after icon="i-ri-route-line" name="路由" theme="blue" logo="i-logos-react"
      :class="{ op30: isFaded && !isReact }"
      :glow="isReact"
    />
    <DevToolsModule
      v-click icon="i-ri-route-line" name="文件路由" theme="red" logo="i-logos-svelte-icon"
      :class="{ op30: isFaded && !isSvelte }"
      :glow="isSvelte"
    />
    <DevToolsModule
      v-after icon="i-carbon-assembly-cluster" name="组件" theme="red" logo="i-logos-svelte-icon"
      :class="{ op30: isFaded && !isSvelte }"
      :glow="isSvelte"
    />
    <DevToolsModule
      v-click icon="i-carbon-network-4" name="响应式" theme="blue" logo="i-logos-solidjs-icon"
      :class="{ op30: isFaded && !isSolid }"
      :glow="isSolid"
    />
    <DevToolsModule
      v-click icon="i-carbon-heat-map" name="分包" theme="purple" logo="i-logos-qwik-icon"
      :class="{ op30: isFaded }"
    />
    <DevToolsModule
      v-click icon="i-carbon:page-scroll" name="数据管理" theme="orange" logo="i-logos-astro-icon invert hue-rotate-180"
      :class="{ op30: isFaded && !isAstro }"
      :glow="isAstro"
    />
  </div>

  <div flex="~ gap-2" mt2>
    <DevToolsModule v-after icon="i-logos-unocss" name="UnoCSS" />
    <DevToolsModule v-after icon="i-logos-eslint" name="ESLint" theme="purple" />
    <DevToolsModule v-after icon="i-logos-storybook-icon" name="Storybook" theme="pink" />
    <DevToolsModule v-after name="Histoire" theme="green">
      <img src="/histoire.svg" h-1.7em>
    </DevToolsModule>
    <DevToolsModule
      v-after icon="i-ri-more-line" name="更多..." border-dashed
    />
  </div>
</template>
