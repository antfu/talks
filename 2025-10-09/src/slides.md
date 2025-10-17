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

Core team member of {Vite} {Vue} {Nuxt}<br>
Creator of {Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk}<br>
Maintainer of {ESLint Stylistic} {Shiki} {Twoslash}<br>
Working at {NuxtLabs} / {Vercel}<br>
Based in 🇯🇵 Tokyo

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
...

For today's topic, let's get straight to the point. Let's talk about...
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

<!--
You might have already heard about the Vite Plus plan, which aims to provide a unified toolchain for the JavaScript ecosystem.

Starting from Vite, we're building Rolldown and the underlying Oxc, which will provide fast and more consistent linting, formatting, bundling, and minification.

On top of Vite, we'll also integrate Vitest as part of the Vite Plus ecosystem for testing on both Node.js and browser environments.

With such an ambitious roadmap, we also want to provide UI devtools for better visualization and analysis experiences. This is where Vite DevTools comes into play.
-->

---
zoom: 1.6
---

<div flex="~ col gap-2">
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>dev</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>build</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>test</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>lint</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>format</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>lib</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
</div>

<!--
For a more concrete example,

We know that we have the CLI `vite dev` for the dev server and `vite build` for building the production bundle.

[click] We're going to have `vite test`, which will be powered by Vitest to run your test suites.

[click] Then we'll have `vite lint` and `vite format` powered by Oxc, which will use the same parser as Vite and Rolldown.

[click] And then we might have `vite lib` for building libraries, built on top of `tsdown` and Rolldown.

[click] And so on. As we mentioned, the goal is to provide a single unified toolchain with incredible performance for the JavaScript ecosystem.

[click] Regarding Vite DevTools, it will be presented as a CLI flag `--ui` for all subcommands, showing the UI interface for each operation and helping you understand the internals better.
-->

---
layout: center
---

<h1 important-text-5xl font-serif>Why DevTools?</h1>

<!-- So, first things first, why do we need DevTools? -->

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
      Vite itself is also a developer tool!
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

When we talk about DevTools, it can either mean [click] general developer tools, or the [click] specialized term, DevTools.

I would define general developer tools as [click] tools for developers. In that sense, the tools we use daily in our development like [click] Vite, Vitest, Vue, Nuxt, etc., are all developer tools.

On the other hand, for the special DevTools, we usually mean [click] tools for using tools better.
For example, [click] we know Chrome has built-in DevTools, and then we have Nuxt DevTools, Vue DevTools, etc.

The DevTools we're going to talk about today all refer to the latter.
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
Why are we building tools for using tools?

If you think about what makes a good tool, I would give the following points.

The first thing is the [click] Entry Barrier, [click] A good tool should be easy to start with, easy to configure, and usually easy to explain in one single sentence.

Then the second would be [click] Intuitive, [click] we should meet users' expectations and intuition, to create a good developer experience and make it easy to discover new features.

The third I would pick is [click] Transparency, [click] when using a tool, it's better for users to know how it works and what its state is. If something goes wrong, we can find out why and fix it more easily.

Then it would be [click] Composability, [click] having decoupled modules would make features easier to combine and extend with other tools to leverage their full power.

The final one I would pick is [click] Extensibility, [click] What makes software different from one-off scripts is that software is meant to adopt and handle different scenarios. Being extensible with a flexible plugin system and the ability to customize is one of the very important aspects of good software.

That said, the reason we're building DevTools is to provide great [click] Transparency for our tools, to help users understand the tools better and see through the internal state.
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>Transparency</span>
</div>

<!--
So let's talk about Transparency.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-unocss />
  UnoCSS Inspector
</h3>

<img src="/devtools/uno-inspector.png" w-250 />

<!--
My personal journey with building DevTools starts with UnoCSS. Since UnoCSS generates CSS utilities on-demand based on the codebase, when working on it, one thing I found tricky was knowing why one utility was included and why another wasn't. So I built this inspector to show how each file is scanned and how they contribute to the utilities list. This kind of transparency helped us build the engine more efficiently with better accuracy.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect.png" w-250 />

<!--
At the beginning of the Vite ecosystem, I was building quite a few plugins for Vite and it was always tricky to debug as I had to console.log here and there to see the internal state of the transformed code. So I ended up building this UI called Vite Plugin inspect, showing the transform internals.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-vitest />
  Vitest UI
</h3>

<img src="/devtools/vitest-ui.png" w-250 />

<!--
Then I built the UI for Vitest to visualize the status and also the module relationships for each test file.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-imports.png" w-250 />

<!--
Nuxt DevTools was a significant project that displays the internal state of Nuxt in various aspects, while also providing an API for Nuxt modules to contribute to DevTools. This is actually the main source of inspiration for Vite DevTools.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-files.png" w-250 />

<!--
Then I also built the ESLint Config Inspector to visualize the relationships in ESLint's new flat config. It started as a fun side project and later became the official one for ESLint.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-graph.png" w-250 />

<!--
You probably heard the joke about the black hole of your node_modules, but have you ever been curious about what things are actually inside it? I was, so I made the Node Modules Inspector to show the full graph of the relationships of all the packages inside your node_modules so you can play with it.
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-sunbrust.png" w-250 />

<!--
You can also see how each package contributed to your node_modules in side-by-side visuals.
-->

---
layout: center
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-120 />

<!--
For all of that, what I want is to show you how DevTools can be interesting in many different aspects and also share my own journey towards building DevTools.

So, finally, let's see what we have in Vite DevTools.
-->

---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/overview.png" w-120 />
<div flex="~ col gap-2 justify-center">

# Build Overview

Current focusing on build mode<br>by consuming Rolldown's output<br>

</div>
</div>

<!--
So for Vite DevTools, we are currently focusing on the build mode of Rolldown Vite by consuming the output data from Rolldown.
-->

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

<!--
The first thing we wanted you to know is how many modules are built into your bundle. Whether they are from your own source code, npm packages, or some generated virtual modules from plugins you have installed.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/folders.png" w-180 />
<div flex="~ col gap-2 justify-center">

# File Tree

Bundled files in tree view

</div>
</div>

<!--
We also provide different views like tree, where you group them by type and folders
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/graph.png" w-180 />
<div flex="~ col gap-2 justify-center">

# Module Relationship Graph

</div>
</div>

<!--
Or the graph view to see how and why each module has been included, and know their import relationship.
-->

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

<!--
And then, inside each module, we show the whole transformation and bundling flow to see how your module is being processed from the source code, ID resolution, transform, chunking, tree-shaking, bundling, etc. This takes a big step forward from the previous vite-plugin-inspect by leveraging the full metadata from Rolldown. This would be useful for finding bugs in plugins or optimizing your chunking.
-->

---
class: text-center
---

# Code Transformation Comparison

<img src="/vd/transform.png" w-240 mt--5 />

<!--
In transform, you can see the before and after between each plugin's process and we will highlight the differences.
-->

---
class: text-center
---

# Chunk Information

<img src="/vd/chunk.png" w-210 mt--5 />

<!--
Then in the chunking, you can see how many modules are in each of your chunks. For example, ideally, you don't want your entry chunk to be too big, as it would need to be loaded on every page. This page will explain why the chunk became big and provide guidance on how to optimize it.
-->

---

# Performance Consumption Chart <span text-lime font-mono bg-lime:10 px2 py1 rounded text-xs translate-y--6 inline-block>WIP</span>

<img src="/vd/chart.png" w-200 />

<!--
We also care about performance. This table would tell you when working on that module, how each hook and how every plugin is costing you time, and potentially find the slow plugins to optimize.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/plugins.png" w-120 mt20 />
<div flex="~ col gap-2 justify-center">

# Plugins

List of all the plugins in their order of execution

</div>
</div>

<!--
Talking about plugins, they are the essential components that make Vite have such a powerful ecosystem, but they could also commonly become the bottleneck of your build performance. Here we list all the plugins that are participating in your build pipeline, where you can click into each of them.
-->

---
class: text-center !pt10
---

# Plugin Hooks

<img src="/vd/plugins-details.png" w-300 mt--5 />

<!--
Inside that, you can see how this plugin is using the hooks and how it contributes to the entire build pipeline. This could be interesting to see which plugin on which file is slowing down the most. In the future, we will also provide some actionable suggestions that you can use to report to upstream and inform the plugin authors about them.
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/chunks-list.png" w-150 />
<div flex="~ col gap-2 justify-center">

# Chunking

Relationship between chunks and files

</div>
</div>

<!--
About chunking, we also visualize what files are included in them and what's the relationship between each chunk.
-->

---
class: text-center !pt10
---

# Bundled Packages

with Duplicated Packages Detection

<img src="/vd/packages.png" w-300 mt--5 />

<!--
A huge portion of our app usually comes from 3rd-party npm packages. But usually we overlook their impact on our apps. This tab lists all the packages that went into our bundle and their bundled size. And most importantly, it shows the versions and would tell you when you are having duplicated packages with different versions, which we likely want to avoid.
-->

---
class: text-center !pt10
---

# Packages Size Graph

<img src="/vd/packages-size.png" w-300 mt--5 />

<!--
About the package size, don't let the package authors tell you how small their packages are, as when tree-shaking takes place, the size can vary based on your usage. In Vite DevTools, we have a visual representation of the size of your dependencies based on your real usage.
-->

---
class: text-center
layout: center
---

<div text-2.5em op50>Vite DevTools is</div>
<div text-3em><span font-serif font-800>NOT ONLY</span> about Visualizations</div>

<!--
That said, I also wanted to mention that Vite DevTools is NOT ONLY about internal data visualizations.
-->

---

<div font-serif text-5xl my-10 mb-20>Being Agnostic</div>

<ul>
  <li v-click my8>Far from Users' Interests (Too Low-level)</li>

  <li v-click="3" my8>"Common Divisor" Among All the Frameworks</li>

  <li v-click="4" my8>Have to also be "Extensible"</li>
</ul>

<div absolute top-10 right-10>
  <img
    v-click="2"
    src="/set-intersections.png" w-120 transition-all duration-400
    :class="$clicks === 3 ? 'saturate-0' : ''"
  >
  <div
    border-2 border-purple rounded-full absolute transition-all delay-200 duration-500
    flex
    v-click="3"
    :class="[
      $clicks <= 3 ? 'w-20.5 h-20.5 top-50 left-50 bg-purple:20' : 'w-110 h-110 top-5 left-5'
    ]"
  >
    <div i-logos-vitejs ma text-4xl />
  </div>
</div>

<!--
If you think about the UI we just talked about, you'll find that you might not often need them, or they could be a bit too advanced for daily development.

[click] This actually makes total sense, because Vite is a framework-agnostic tool. Agnostic means that we don't know about the framework you use, and we shouldn't know. This gives Vite great flexibility and extensibility to be the infrastructure of modern frameworks, but it also makes it hard for Vite to present interesting information that's closer to actual Vite users, like the app we're building or the state of the framework we're using, etc.

[click] If you look at the graph on the right, imagine each circle represents a specific framework or integration. Being agnostic means that Vite DevTools can only be the [click] common divisor among all frameworks, which is quite limited and not always useful to the majority of users.

[click] That's why the next thing we're going to talk about is Extensibility. In order to bring interesting, framework-specific information to users, we have to provide the capability for frameworks to do so.
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>Extensibility</span>
</div>

<!--
I see Extensibility as one of the most important factors that makes Vite what it is today. There's no reason we shouldn't do the same for Vite DevTools.
-->

---
clicks: 19
---

<DevToolsKit />

<!--
If you've watched my previous talks, this is a slide I made roughly two years ago when presenting Nuxt DevTools, [click] picturing the idea of having a shared interface for building DevTools, called DevTools Kit.

[click] The idea is to create a modular, composable, collaborative DevTools ecosystem.

[click] For example, we know that we have some features that are general and not coupled to other frameworks. [click] Then we have features from the Vite Plus ecosystem, like Vitest and [click] Oxc-related tools like linting and formatting.
[click] Maybe going to the frontend, we could also have some general web-related information like SEO, accessibility, PWA, and so on.

[click] Going specific to frameworks, let's take Vue as an example, we might have UI for visualizing components, reactivity, routers, etc. [click] Going further, we have meta-frameworks like Nuxt that would also provide Nuxt-specific visualizations.

[click] In that sense, we might also have tools for React, [click] for Svelte, [click] for Solid, [click] for Qwik and so on.

[click] Then we could have tool integrations as well.

If you think all of these blocks are pluggable extensions, then we could compose them easily based on our needs. For example, [click] taking all the Vue and Nuxt features, we could have Nuxt DevTools. [click] Without Nuxt-specific parts, we could have Vite DevTools. [click] Similarly, we could have DevTools for other frameworks easily [click] [click] [click] under the same infrastructure. And in the end, you might be able to customize it based on your project's specific needs and have [click] your own DevTools.
-->

---
clicks: 1
---

<div flex="~ col gap-4 items-center justify-center" text-2xl w-full h-full>
  <img src="/devtools-kit.svg" w-60 op85 transition-all duration-500 :class="$clicks < 1 ? 'translate-y-15 scale-110' : ''"/>
  <div i-ph-arrow-down-duotone text-2xl op50 v-click="1" delay-500 />
  <img src="/vite-devtools.png" w-100 brightness-200 v-click="1" delay-500 />
</div>

<!--
The original idea of DevTools Kit was discontinued due to various reasons, mainly because we weren't sure how many people would adopt it.

But this time is different. Since we're building the DevTools for Vite, it means that when it's ready, all frameworks built on top of Vite would naturally benefit from it without friction.

[click] So we're bringing the vision of DevTools Kit to Vite DevTools, instead of asking DevTools authors to migrate to a common pattern, now they'll just be building plugins for Vite.
-->

---

<div grid="~ cols-[3fr_4fr] gap-4">

<div>

<div font-serif text-2em my6>Vite DevTools Plugin</div>

<v-clicks>

- A Superset of Vite Plugin

- Via the Additional `devtools` Hook

- Built-in RPC Layer

- Built-in Isomorphic Views Hosting
  - Embedded Floating Panel

  - Browser Extension
  - Standalone Webpage
  - Deployable SPA

</v-clicks>

</div>
<div v-click="1">

```ts {*|7-27|8-16|17-26|*}{at:2}
import type { Plugin } from 'vite'

export default function MyPlugin(): Plugin {
  return {
    name: 'my-plugin',
    transform: { /* ... */ },
    devtools: {
      /* pesudo-code for demo */
      async setup({ rpc, views, docks }) {
        rpc.register({
          name: 'my-plugin:hello',
          async handler(message) {
            console.log(`Hello from client, ${message}`)
          }
        })

        views.staticHost('./dist/client', '/.my-plugin')

        docks.register({
          id: 'my-plugin',
          title: 'My Plugin',
          icon: '/.my-plugin/favicon.svg',
          // type can also be 'webcomponent', 'action' etc.
          type: 'iframe',
          url: '/.my-plugin',
        })
      }
    }
  }
}
```

</div>
</div>

<!--
Let's take a glance at how the Vite DevTools Plugin would look.

So in general, a Vite DevTools plugin would be [click] a superset of a Vite Plugin, meaning you don't need to do anything special, but only [click] by adding a `devtools` hook to your plugin, it would work. The code on the right is a pseudo-code snippet of how you would do that. And it actually already works, but the reason I called it pseudo is because nothing is set in stone yet and we're still exploring the interface, and it might change a lot.

[click] Vite DevTools will provide the built-in RPC, remote-procedure call, layer for plugin authors to extend and communicate between the server and clients more easily.

[click] We also wanted to make it possible for users to decide the ways to consume the devtools. In Vite DevTools, we will support an embedded floating panel, similar to Nuxt DevTools, or via a browser extension to be presented in the browser DevTools, or a standalone webpage, or a deployable SPA as a snapshot of your current data, etc. Vite DevTools will provide the abstraction layer for supporting these scenarios isomorphically.

(next is the demo video)
-->

---
layout: 'none'
class: 'flex h-full'
---

<SlidevVideo autoplay controls muted ma w="90%" rounded border="~ main">
  <source src="/vd/docks-demo.mp4" type="video/mp4" />
</SlidevVideo>

<!--

So here is how it would look. In general, we will provide a dock-like UI to be the entry point of all the integrations. For each integration, we provide frames to render each DevTools UI, or it can be a custom renderer or running scripts. Here is a quick PoC to have Vitest, Nuxt DevTools, and UnoCSS integrated. In the future we will work with more DevTool authors to bring them to Vite DevTools, while also verifying the capability of our plugin API.

-->

---

<h1 font-serif text-4xl>Goals & Vision</h1>

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:chart-donut-duotone text-teal mb2 />
    <div>Visualization</div>
    <div text-xs op50>Display Vite/Rolldown internal state and process</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>Analysis & Suggestions</div>
    <div text-xs op50>Provide suggestions and optimization solutions for build and plugins</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph-chart-line-up-duotone text-yellow mb2 />
    <div>Build Comparison</div>
    <div text-xs op50>Compare and track build results across commits</div>
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
On a broader view, the goal and vision of Vite DevTools is that we will provide better transparency and enable the ecosystem to explore even further.

[click] Built-in, we will provide visualizations of the Vite internals, [click] Analysis and actionable suggestions for your build and plugin pipeline, [click] Build comparison across multiple commits to see how your app changes over time, [click] Build snapshots via deployable SPA for you to even share your build metadata as reproduction, and so on.

[click] Then we're going to have first-party Vite Plus integrations like Vitest UI and Oxlint, [click] and finally the DevTools Kit for plugin authors to build on top of this infrastructure and create even more interesting use cases.
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

<!--
The scope of Vite DevTools has become pretty big, and it's taking a bit longer than we expected.

So currently we have [click] implemented quite a few [click] visualizations, as we talked about before.

And then [click] we're continuing to work on having more insights for bundle analysis, which we're working closely with the Rolldown team on. [click] We have the DevTools Kit baseline working and already have some prototype of porting Nuxt DevTools to Vite DevTools working, but there's a lot of polishing that needs to be done and documentation to be written.

[click] Currently, the core UI of Vite DevTools is focusing on build mode only, and we're waiting for the Vite full bundle mode to roll out to support development mode.

[click] And finally, in the long term, we want to work and collaborate with the ecosystem to bring the effort together and have everybody benefit from this system.

In short, unfortunately, Vite DevTools is not yet usable at this moment, and we're actively working on it. Please be patient and stay tuned - we'll let you know when it's ready to try!
-->

---
class: text-center
transition: view-transition
---

<h1 font-serif text-4xl mt-20 important-mb-16>Thanks to</h1>

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

<!--
Finally, I'd like to say thank you to [click] Arlo who has helped a lot with the development of Vite DevTools; [click] Guillaume for being so inspiring with his previous work on Vue DevTools and testing framework UIs, while also brainstorming and prototyping the idea of DevTools together. [click] Then YunFei for coordinating on the Rolldown side to provide APIs that made Vite DevTools possible. [click] And great thanks to Sebastien who seeded the idea of Nuxt DevTools, and invested so much in building it and now for Vite.
-->

---

<Contributors />

<!--
Also thanks to all the contributors who previously contributed to Vite DevTools, Nuxt DevTools and Vue DevTools. All your contributions and ideas made it possible for us to build Vite DevTools today. Thank you!

Also, I'd invite you to join us and help out!
-->

---
layout: center
---

<div scale-200>
  <Repo name="vitejs/devtools"  />
</div>

<!--
The source code is located at repository `vitejs/devtools`, go check it out! There are many things going on at the same time so it could be overwhelming, but we will try to improve the contribution guides and docs in the meantime for you to contribute better.

I'm really looking forward to seeing how we could work with the whole ecosystem to explore and build even better tooling.

Thank you!
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>Thank You</h1>

Slides available at [antfu.me](https://antfu.me)
