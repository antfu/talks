---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: zh-CN
title: Vite DevTools 前瞻介绍
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-30
---

# Anthony Fu

<div class="[&>*]:important-leading-10 opacity-80">

{Vite} {Vue} {Nuxt} 核心团队成员<br>
{Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk} 作者<br>
{ESLint Stylistic} {Shiki} {Twoslash} 维护者<br>
就职于 {NuxtLabs}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-bluesky-line op50 ma text-xl ml4/>
  <div><a href="https://bsky.app/antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/668380" target="_blank" class="border-none! font-300" ws-nowrap>AnthonyFu 一个托尼</a></div>
</div>

<img src="https://antfu.me/avatar.png" absolute top-36 right-30 w-40 rounded-full />


---
layout: center
glowOpacity: 0.1
---

<img src="/voidzero-nuxtlabs.png" w-120>

---

TODO: Vite Plus

---
layout: fact
---

## 为什么需要 DevTools？

---

## 广义的 Developer Tools

「开发者工具」<span op50>Vite 本身就是一种开发者工具</span>

<div mt20 />

## 狭义的 DevTools

「为更好的使用工具而提供的工具」

Nuxt DevTools, ESLint Config Inspector, Vite Plugin Inspect, Bundle Analyzer, etc.

---
layout: center
glowOpacity: 0
---

<img src="/vite-plus.png" w-280 mix-blend-lighten>

---

<img src="/minecraft-furnace-white-line.webp" w-40 absolute top="1/2" left="1/2" translate-x="-50%" translate-y="-50%" />


---
class: text-2xl
glow: right
---

# 好工具原则

<div grid="~ cols-[max-content_min-content_auto] items-center gap-6" py8>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>入门门槛</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after></div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div i-ph-book-bookmark-duotone text-2xl />
    <span>直觉设计</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after></div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div i-ph-currency-circle-dollar-duotone text-2xl />
    <span>信息透明</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>可以清楚的看到内部的状态和过程，便于调试和优化</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>可扩展性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>灵活的插件和配置系统</div>

  <div flex="~ gap-2 items-center" text-purple relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>可组合性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>模块互相解耦，易于组合和扩展</div>
</div>

---
class: p0
glow: bottom
---

<div class="grid grid-cols-2 gap-4 h-full">
  <img src="/vite-devtools.png" w-80 ma />

  <div border="l main" h-full py10 flex="~ col gap-8 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>ResolveId、Transform 分析</div>
        <div op50>
          展示每個插件對於每個文件的轉換結果
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>ModuleGraph、ChunkGraph 可视化</div>
        <div op50>
          展示每个文件的依赖关系和 chunk 的组成
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>打包分析</div>
        <div op50>
          展示打包的結果，包括分包尺寸、优化建议等。
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>开发模式</div>
        <div op50>
          展示每個插件對於每個文件的轉換結果
        </div>
      </div>
    </div>
     <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>DevTools Kit</div>
        <div op50>
          可扩展的 DevTools 架构
        </div>
      </div>
    </div>
  </div>
</div>

## Vite DevTools

- 目前的重心
  - 构建模式的打包分析
  - 插件優化
  - 分包優化

- 未來的目標
  - 开发/生产环境
  - 跨框架公用 DevTools 架构 (DevTools Kit)

---

// TODO: 截图

---
clicks: 20
---

<DevToolsKit />

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢

幻灯片在 [antfu.me](https://antfu.me)
