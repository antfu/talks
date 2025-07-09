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
就职于 {NuxtLabs} / {Vercel}<br>

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
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-120 />
<div text-3xl mt4 mb-8 tracking-0.5em text-lime>前瞻介绍</div>

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left op75>
  <span>VueConf Shenzhen</span>
  <div text-xs opacity-75 mt--4>2025.07.12</div>
</div>

<img src="/vue-shenzhen.svg" h-50 absolute bottom-0 right-0 op10 />

---
layout: center
glowOpacity: 0.1
---

<img src="/voidzero-nuxtlabs.png" w-150>

---
layout: center
glowOpacity: 0.1
---

<div flex="~ col gap-2 items-center">
  <img src="/vercel-nuxtlabs.jpg" w-150>
  <div text-2xl mt1>NuxtLabs is joining Vercel</div>
</div>

---
layout: center
glowOpacity: 0.1
---

<div flex="~ col gap-2 items-center">
  <img src="/voidzero-vercel.png" w-140>
</div>

---
layout: center
glowOpacity: 0
---

<img src="/vite-plus.png" w-280 mix-blend-lighten>

---
layout: center
---

<h1 important-text-5xl>为什么需要 DevTools？</h1>

---
layout: none
class: h-full
---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">广义的 Developer Tools</h2>

  <div text-2xl ml--3 text-amber v-click="3">「给开发者使用的工具」</div>

  <div mt-6 v-click="4">
    <div flex="~ gap-2 items-center" text-2xl>
      <div i-logos-vitejs w-8 />
      <div i-logos-vitest w-8 />
      <div i-logos-vue w-8 />
      <div i-logos-nuxt-icon w-8 />
      <div i-logos-react w-8 />
      <div i-logos-eslint w-8 />
      <div i-logos-unocss w-8 />
      <div op50>...</div>
    </div>
    <div mt3 op75>
      Vite 本身就是一种开发者工具
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">狭义的 DevTools</h2>

  <div text-2xl ml--3 text-lime v-click="5">「为更好的使用工具而提供的工具」</div>

  <div v-click="6" mt-6 flex="~ gap-2 wrap">
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-chrome/> Chrome DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-nuxt-icon w-5 /> Nuxt DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vue w-5 /> Vue DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-carbon-ibm-watson-discovery/> Vite Plugin Inspect</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-unocss/> UnoCSS Inspector</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-eslint/> ESLint Config Inspector</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vitest/> Vitest UI</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><img src="/node-modules-inspector.svg" w-5/> Node Modules Inspector</div> 
    <div op50>...</div>
  </div>
</div>
</div>

---
class: text-2xl
glow: right
---

# 好工具原则

<div grid="~ cols-[max-content_min-content_auto] items-center gap-10" py10>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-stairs-duotone text-2xl />
    <span>入门门槛</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>容易上手，简单配置，一句话讲明白在做什么</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div i-ph-book-bookmark-duotone text-2xl />
    <span>直觉设计</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>符合用户期待和直觉，优秀的用户体验</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>信息透明</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>信息透明，可以看到内部的状态和过程，便于调试和优化</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div i-ph-puzzle-piece-duotone text-2xl />
    <span>可组合性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>模块互相解耦，易于组合和扩展</div>

  <div flex="~ gap-2 items-center" text-purple relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>可扩展性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>灵活的插件和配置系统</div>
</div>

<div absolute top-66 left-9 w-220 h-17 border="2 amber rounded-xl" bg-amber:10 z--1 v-click />

<!--
除了好
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-amber2 text-5xl>Transparency</div>
  <span text-amber>信息透明</span>
</div>

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-unocss />
  UnoCSS Inspector
</h3>

<img src="/devtools/uno-inspector.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect-graph.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect-plugin-time.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-vitest />
  Vitest UI
</h3>

<img src="/devtools/vitest-ui.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-components-graph.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-imports.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-files.png" w-250 />

---


<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-overview.png" w-250 />

---


<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-plugins.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-overview.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-graph.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-sunbrust.png" w-250 />

---
layout: center
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-120 />

---

# 目标愿景

<div mt5 />

<v-clicks depth="2">

- Vite 内部状态可视化

- 提供建议和优化方案

  - 分包优化

  - Tree-shaking 可视化

  - Barrel-file 检测

  - CJS/ESM 可视化

- 插件和构建性能分析

- Vite Plus 集成，例如 Vitest UI、Oxlint 可视化等等

- 提供统一的 DevTools 架构，让上层框架可以轻松的扩展

</v-clicks>

---
class: p0
glow: bottom
---

<div class="grid grid-cols-2 gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <img src="/vite-devtools.png" w-80 />
    <div text-orange text-sm bg-orange:10 px2 rounded>Working in progress</div>
  </div>

  <div border="l main" h-full py10 flex="~ col gap-8 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>模块分析</div>
        <div op50>
          展示每个插件对每个文件的 load 和 transform 结果
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>模块依赖和分包可视化</div>
        <div op50>
          展示每个文件的依赖关系和分包的组成
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>打包分析</div>
        <div op50>
          展示打包的結果，包括分包尺寸、优化建议等
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>开发模式</div>
        <div op50>
          展示开发模式下的模块分析和依赖关系
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

---

// TODO: 截图

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-purple2 text-5xl>Extensibility</div>
  <span text-purple>可扩展性</span>
</div>

---
clicks: 19
---

<DevToolsKit />


---
layout: center
---

<div scale-200>
  <Repo name="vitejs/devtools"  />
</div>

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢

幻灯片在 [antfu.me](https://antfu.me)
