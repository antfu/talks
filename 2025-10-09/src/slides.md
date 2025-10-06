---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: en
title: Vite DevTools
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
class: pl-25
glowSeed: 14
---

<h1 font-serif>Anthony Fu</h1>

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of {Vite} {Vue} and {Nuxt}<br>
Creator of {Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk}<br>
Maintainer of {ESLint Stylistic} {Shiki} {Twoslash}<br>
Working at {NuxtLabs} / {Vercel}<br>
Base in 🇯🇵 Tokyo

</div>

<div mt-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://m.webtoo.ls/@antfu" target="_blank" class="border-none! font-300">antfu@webtoo.ls</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full absolute top-38 right-15 w-40 />

<!--

So for today's topic, let's go straight to the point. Let's talk about...

-->

---
layout: center
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-140 />

<div abs-br mx-10 my-11 flex="~ gap-2 items-center" text-left op75>
  <img src="/viteconf.png" h-12 alt="ViteConf">
  <div>
    <div text-lg>ViteConf</div>
    <div text-xs opacity-75>Oct. 9th, 2025</div>
  </div>
</div>

---
layout: center
glowOpacity: 0
---

<img src="/vite-plus.png" w-280 mix-blend-lighten>

---
layout: center
---

<h1 important-text-5xl font-serif>Why DevTools?</h1>

<!-- So, first thing first, why do we need DevTools? -->

---
layout: none
class: h-full
---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">General Developer Tools</h2>

  <div text-2xl text-amber v-click="3">"Tools for developers"</div>

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
      Vite itself is a also developer tool!
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">Special DevTools</h2>

  <div text-2xl text-lime v-click="5">"Tools for using tools better"</div>

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

<!--
Before we talk about why, let's first discuss what **IS** DevTools.

When we talk about the DevTools, it can either means the general developer tools, or the specialized term devtools.

-->

---
class: text-2xl
glow: right
---

# Good Tools Principles

<div grid="~ cols-[max-content_min-content_auto] items-center gap-x-10 gap-y-10" py10>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-stairs-duotone text-2xl />
    <span>Entry Barrier</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Easy to get started, simple config, explainable in one sentence</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div i-ph-book-bookmark-duotone text-2xl />
    <span>Intuitive Design</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Meets user expectations and intuition, good user experience</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>Transparency</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Transparent to the internal state, easy to debug and optimize</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div i-ph-puzzle-piece-duotone text-2xl />
    <span>Composability</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Decoupled modules, easy to combine and extend</div>

  <div flex="~ gap-2 items-center" text-purple relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>Extensibility</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>Flexible plugin system and customizations</div>
</div>

<div absolute top-67 left-9 w-225 h-15 border="2 amber rounded-xl" bg-amber:10 z--1 v-click />

<!--
Besides good
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>Transparency</span>
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

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/overview.png" w-120 />
<div flex="~ col gap-2 justify-center">

# Build Overview

Current Vite DevTools visualizes build process and information<br>by consuming Rolldown's output<br>

</div>
</div>

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/modules.png" w-140 />
<div flex="~ col gap-2 justify-center">

# Bundle File List

Display all files participating in the bundle,<br>providing filtering and search functionality.

</div>
</div>

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/folders.png" w-180 />
<div flex="~ col gap-2 justify-center">

# Bundle File Tree

</div>
</div>

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/graph.png" w-180 />
<div flex="~ col gap-2 justify-center">

# Module Relationship Graph

</div>
</div>

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/flow.png" w-100 />
<div flex="~ col gap-2 justify-center">

# Module Transformation Flow

<div op50>
Parse <span op50>→</span> Resolve <span op50>→</span> Transform <span op50>→</span> Chunk <span op50>→</span> Bundle <span op50>→</span> Output
</div>

<div op50 mt5>
Track the entire process, find bottlenecks and optimizations
</div>

</div>
</div>

---
class: text-center
---

# Code Transformation Comparison

<img src="/vd/transform.png" w-240 mt--5 />

---
class: text-center
---

# Bundle Information

<img src="/vd/chunk.png" w-210 mt--5 />

---
class: text-center !pt15
---

# Module Dependency Graph

<img src="/vd/imports.png" w-250 />

---

# Performance Consumption Chart <span text-lime font-mono bg-lime:10 px2 py1 rounded text-xs translate-y--6 inline-block>WIP</span>

<img src="/vd/chart.png" w-200 />

---
class: text-center
layout: center
---

<div text-2.5em op50>Vite DevTools is</div>
<div text-3em><span font-serif font-800>NOT ONLY</span> about Visualizations</div>

---

<h1 text-lime v-click="6">The "Set Union" <div class="inline-block i-gis-union translate-y-1/10" /></h1>

<div mt-10 />

<v-clicks :at="6">

- Extract the universal parts

- Expand the scopes

- Grow the communities

</v-clicks>

<div
  v-click="1"
  absolute w-90 h-90 left-110 top-30 border="~ green rounded-full"
  bg-green:20 text-3xl text-green flex="~ items-center justify-center"
>
  <div i-logos-nuxt-icon text-6xl />
</div>

<div
  v-click="2"
  absolute w-50 h-50 left-192 top-55 border="~ yellow/50 rounded-full"
  bg-yellow:10 text-2xl text-yellow flex="~ gap-3 items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 2 ? '' : 'scale-50 translate-x--40 op0'"
>
   unjs
</div>

<div
  v-click="3"
  absolute w-60 h-60 left-170 top-8 border="~ violet rounded-full"
  bg-violet:20 text-3xl text-violet flex="~ gap-2 items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 3 ? '' : 'scale-50 translate-x--20 translate-y-20 op0'"
>
   nitro
</div>

<div
  v-click="4"
  absolute w-40 h-40 left-184 top-90 border="~ gray rounded-full"
  bg-gray:20 text-gray flex="~ gap-1 items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 4 ? '' : 'scale-50 translate-x--20 translate-y--20 op0'"
>
   unplugin
</div>

<div
  v-click="5"
  absolute w-40 h-40 left-90 top-90 border="~ lime/50 rounded-full"
  bg-lime:10 text-lime flex="~ gap-2 col items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 5 ? '' : 'scale-50 translate-x-20 translate-y--20 op0'"
>
   vite-node
</div>


<!--
If you think about the visual we just talked about, you will find that you might often need them, or they could be a bit too advanced to our daily development.

This is actually totally make sense, because Vite is a framework-agnostic tool. Agnostic means that we don't know about the framework you use, we shouldn't know. This gives Vite great flexibility and extensibility, but also made Vite hard to present the interesting information that are more closer to the actual Vite users, like the app we are building, or the state of the framework we are using etc.

If we stopped here, it means the Vite DevTools can only be the common divisor among all the frameworks, which is not always useful to the majority of the users.

That's why the next thing we are going to talk about is, Extensibility.
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>Extensibility</span>
</div>

<!--
I see Extensibility is one of the most important factors that makes Vite as it is today. There is no reason we should not doing it for Vite DevTools.
-->

---
clicks: 19
---

<DevToolsKit />

<!--
If you have watched my previous talks, this is a slide I made in roughly two years ago, picturing the idea of having a DevTools Kit.
-->

---
clicks: 2
---

<div flex="~ col gap-4 items-center justify-center" text-2xl w-full h-full>
  <img src="/devtools-kit.svg" w-60 op85 transition-all duration-500 :class="$clicks < 1 ? 'translate-y-15 scale-110' : ''"/>
  <div i-ph-arrow-down-duotone text-2xl op50 v-click="1" delay-500 />
  <img src="/vite-devtools.png" w-100 brightness-200 v-click="1" delay-500 />
</div>

---

```ts {7-19}
import type { Plugin } from 'vite'

export default MyPlugin(): Plugin {
  return {
    name: 'my-plugin',
    transform: { /* ... */ },
    devtools: {
      setup(ctx) {
        ctx.views.register({
          id: 'my-plugin',
          type: 'iframe',
          title: 'My Plugin',
          icon: '/my-plugin.svg',
          url: 'http://localhost:3000/my-plugin',
        })
      }
    }
  }
}
```

---

It will be provided as:

- Embedded Floating Panel
- Standalone Webpage
- Deployable SPA
- Browser Extension
- Standalone Electron App (?)

And we will provide all these infrastructure for framework/tools integrations.


---

# Goals & Vision

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:chart-donut-duotone text-teal mb2 />
    <div>Visualization</div>
    <div text-xs op50>Display Vite/Rolldown internal state and process</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>Build Analysis</div>
    <div text-xs op50>Provide suggestions and optimization solutions</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph:plugs-duotone text-yellow mb2 />
    <div>Plugin Analysis</div>
    <div text-xs op50>Help plugin authors follow best practices</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:bug-beetle-duotone text-red mb2 />
    <div>Build Snapshots</div>
    <div text-xs op50>Record build process, shareable and analyzable reproduction</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:stack-plus-duotone text-purple mb2 />
    <div>Vite Plus</div>
    <div text-xs op50>Integrate Vitest UI, Oxlint visualization, etc.</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:circles-three-plus-duotone text-blue mb2 />
    <div>DevTools Kit</div>
    <div text-xs op50>Unified DevTools architecture, allowing upper frameworks to provide extensions</div>
  </div>
</div>

<!--
Bundle optimization
Tree-shaking visualization
Barrel-file detection
CJS/ESM visualization
-->

---
class: p0
glow: bottom
---

<div class="grid grid-cols-[3fr_4fr] gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <img src="/vite-devtools.png" w-80 />
    <div text-orange text-sm bg-orange:10 px2 rounded>Progress</div>
  </div>

  <div border="l main" h-full py10 flex="~ col gap-6 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Module Analysis</div>
        <div op65 text-sm>
          Display each plugin's load and transform results for each file
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Bundle Visualization</div>
        <div op65 text-sm>
          Display dependency relationships of each file and bundle composition
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Bundle Analysis</div>
        <div op65 text-sm>
          Display build size, optimization suggestions, etc.
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>DevTools Kit</div>
        <div op65 text-sm>
          Extensible DevTools architecture
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Development Mode</div>
        <div op65 text-sm>
          Waiting for Full bundle mode
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>Integrations</div>
        <div op65 text-sm>
          Collaborate with frameworks to unified the DevTools experience
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<div scale-200>
  <Repo name="vitejs/devtools"  />
</div>

---
class: text-center
transition: view-transition
---

<div text-4xl mt-20 mb-12>Thanks to</div>

<div flex="~ gap-18 items-center justify-center" >
  <div flex="~ col items-center" v-click>
    <img src="/avatars/webfansplz.png" rounded-full w-30 mb4 view-transition-contributor-webfansplz duration-1000 />
    <div>Arlo</div>
    <div font-mono text-sm op50>@webfansplz</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="/avatars/Akryum.png" rounded-full w-30 mb4 view-transition-contributor-akryum duration-1000 />
    <div>Guillaume Chau</div>
    <div font-mono text-sm op50>@Akryum</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="/avatars/hyf0.png" rounded-full w-30 mb4 view-transition-contributor-hyf0 duration-1000 />
    <div>Yunfei He</div>
    <div font-mono text-sm op50>@hyf0</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="/avatars/atinux.png" rounded-full w-30 mb4 view-transition-contributor-atinux duration-1000 />
    <div>Sébastien Chopin</div>
    <div font-mono text-sm op50>@Atinux</div>
  </div>
</div>

---

<Contributors />

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>Thank You</h1>

Slides available at [antfu.me](https://antfu.me)
