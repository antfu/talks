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

<img src="/voidzero-nuxtlabs.png" w-120 mix-blend-lighten>

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

// TODO: 截圖


---

<img src="/minecraft-furnace-white-line.webp" w-40 absolute top="1/2" left="1/2" translate-x="-50%" translate-y="-50%" />

---

Principle of making Good Tools

- Transparency
- Extensibility
- Learning Curve
  - Sensible defaults
  - Intuitive Design
- Composability

---

## Vite DevTools

- 目前的重心
  - 构建模式的打包分析
  - 插件優化
  - 分包優化

- 未來的目標
  - 开发/生产环境
  - 跨框架公用 DevTools 架构 (DevTools Kit)

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
