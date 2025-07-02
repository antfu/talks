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
glow: bottom
---

<img src="/vite-devtools.png" w-120 />


---
layout: center
glowOpacity: 0.1
---

<img src="/voidzero-nuxtlabs.png" w-150>

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


---

<div v-click>

## 广义的 Developer Tools

「开发者工具」<span op50>Vite 本身就是一种开发者工具</span>

</div>

<div mt20 v-click>

## 狭义的 DevTools

「为更好的使用工具而提供的工具」

Nuxt DevTools, ESLint Config Inspector, Vite Plugin Inspect, Bundle Analyzer, etc.

</div>


---

<img src="/minecraft-furnace-white-line.webp" w-40 absolute top="1/2" left="1/2" translate-x="-50%" translate-y="-50%" />


---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-amber2 text-5xl>Transparency</div>
  <span text-amber>信息透明</span>
</div>

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
clicks: 20
---

<DevToolsKit />

---

# Vite DevTools 的目标愿景

- Vite 内部状态可视化，便于调试和优化
- 提供建议和优化方案，帮助开发者更好的分包，和获得更好的 Tree-shaking 效果
- 性能分析，找到构建的瓶颈
- Vite Plus 集成，例如 Vitest UI、Oxlint 可视化等等
- 提供统一的 DevTools 架构，让上层框架可以轻松的扩展


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
