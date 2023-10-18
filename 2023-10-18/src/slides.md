---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
fonts:
  sans: DM Sans
---

<h1 flex="~ col">
<div>Now, and the Future</div>
<div flex="~ gap3" items-center>of <span inline-block i-logos-nuxt-icon text-1.2em mb-2/> <b font-bold>Nuxt DevTools</b></div>
</h1>

<div uppercase text-sm tracking-widest>
Anthony Fu
</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <img src="/logo-nuxtnation.svg" h-6 alt="Nuxt Nation" />
  <div text-sm opacity-50>Oct. 18th 2023</div>
</div>

---
layout: intro
growX: 10
growY: 90
class: pl30
---

# Anthony Fu

<div class="leading-10 opacity-80">
Core team member of Nuxt, Vue and Vite.<br>
Creator of VueUse, Vitest, Slidev, UnoCSS, and Elk.<br>
Working at NuxtLabs.<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div><a href="https://m.webtoo.ls/@antfu" target="_blank" class="border-none! font-300">antfu@webtoo.ls</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full w-35 abs-tr mt-32 mr-40 />

<div flex="~ gap2">

</div>

---
layout: center
---

# Reasons Why We Built Nuxt DevTools

---
layout: center
growX: 50
growY: 50
---

<h1 font-bold class="text-5xl!">Nuxt Developer Experience</h1>

<div absolute left-100 top-80 v-click>File-based Routing</div>
<div absolute left-52 top-50 v-click>Modules Ecosystem</div>
<div absolute left-100 top-50 v-click>Hot Module Replacement</div>
<div absolute left-50 top-80 v-click>Server-side Rendering</div>

<v-click>

<div absolute left-158 top-50>Nitro</div>
<div absolute left-145 top-80>ESM First</div>
<div absolute left-170 top-80>Vite Powered</div>
<div absolute left-60 top-90 op80>Zero-config</div>
<div absolute left-90 top-90>Edge Rendering</div>

</v-click>
<v-click>

<div absolute left-85 top-40>Hybrid Rendering</div>
<div absolute left-130 top-90>Components Auto Imports</div>
<div absolute left-125 top-40 op70>Composables Auto Imports</div>
<div absolute left-55 top-40 op70>Middleware</div>
<div absolute left-175 top-50 op70>SEO</div>

</v-click>
<v-click>

<div absolute left-145 top-100 op60>Server API</div>
<div absolute left-100 top-30 op70>Serverless</div>
<div absolute left-70 top-30 op70>TypeScript</div>
<div absolute left-130 top-30 op70>Server Components</div>
<div absolute left-120 top-100 op70>Layouts</div>
<div absolute left-70 top-100 op60>Static Site Generation</div>

</v-click>

---
growX: 0
growY: 50
class: flex
---

<div my-auto w-full grid="~ cols-2 gap-5" px20>
<div flex="~ col gap-5">
<h1 v-click>Conventions</h1>
<h1 v-click>Abstractions</h1>
<h1 v-click>Sensible Defaults</h1>
<h1 v-click>Normalizations</h1>
</div>
<div flex="~ gap-5 col items-center justify-center">
<h1 v-click class="text-right" w-full>Transparency</h1>
</div>
</div>

<!-- 
We introduced many conventions to reduce the need of having boilerplates, or code duplications.

We also make quite some abstractions in order to shift the complexities from user app to the framework. So that's when you building an app with Nuxt, you can focusing more on the your own logic instead of worrying about the technical details of how bundler works, etc.

We are trying our best to provide the sensible default that makes Nuxt works out of box with zero configration, while keeping the best practice for you to deliver your app with the best performance and user experience.

We also put quite some effort in terms of normalizations of underlying tools. With unplugin, we smooth out the details between Vite and Webpack, make Nuxt support both interchangeably based on your needs. With Nitro, we make deployment easier than ever. With the same codebase, you can deploy your app to any hosting providers, like Vercel or Netlify, or hosting your own Node or Deno server, without any code changes.

===

Those features are super awesome, but we see that the trade-off we have to make is to sacrifice a bit of the transparency. By transparency, I mean, the ability to see what's going on under the hood, the cost of learning and understanding each feature Nuxt provides. This trade-off is inevitable, as for any tools, you have to learn before you can use it. But how we could make it better? That's where Nuxt DevTools comes in.
-->

---
class: ml-30 mt-5
---

<h1><NuxtDevTools h-8/></h1>

<div text-xl flex="~ col gap-6" pl3 mt10>
<v-clicks>

<div flex="~ gap-3 items-center">
  <div i-tabler-3d-cube-sphere text-3xl /> 
  <span op80>Improve Transparency</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-tabler-terminal text-3xl />
  <span op80>Enhance Developer Experience</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-tabler-brand-speedtest text-3xl />
  <span op80>Performance & Bundle Analysis</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-tabler-books text-3xl />
  <span op80>Personalized Documentations</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-tabler-horse-toy text-3xl />
  <span op80>Interactive & Playful</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-tabler-browser-plus text-3xl />
  <span op80>Cross-browsers (works even for mobile!)</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-tabler-puzzle text-3xl />
  <span op80>Extensible</span>
</div>

</v-clicks>
</div>

---
layout: center
class: text-center
growX: 50
growY: 50
---

# In the Past 8 Months

Since the Nuxt DevTools has announced

---
growX: 100
growY: 100
class: ml-20 mt-5
---

## State of Nuxt DevTools

###### As of October 10th, 2023

<div grid="~ cols-[auto_1fr] gap-x-4 gap-y-2" items-center my6>
  <v-clicks :every="2">
    <div text-right text-4xl font-bold color="[#BD3E53]">504K</div><div text-left text-lg op80>Monthly downloads on NPM</div>
    <div text-right text-4xl font-bold color="[#BD7C3E]">24%</div><div text-left text-lg op80>Downloads of Nuxt 3</div>
    <div text-right text-4xl font-bold color="[#A9BD3E]">16K</div><div text-left text-lg op80>Open Source projects dependents</div>
    <div text-right text-4xl font-bold color="[#54BD3E]">2.3K</div><div text-left text-lg op80>Stars on GitHub</div>
    <div text-right text-4xl font-bold color="[#3EBD7C]">18</div><div text-left text-lg op80>Builtin tabs</div>
    <div text-right text-4xl font-bold color="[#3EAABD]">53</div><div text-left text-lg op80>Contributors</div>
    <div text-right text-4xl font-bold color="[#3E55BD]">20+</div><div text-left text-lg op80>Nuxt Modules integrates Nuxt DevTools</div>
  </v-clicks>
</div>


---
class: text-center
growX: 90
growY: 0
preload: false
---

# In App DevTools

<VideoDemo src="/devtools/0-intro.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Pages View

<VideoDemo src="/devtools/1-pages.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Components View

<VideoDemo src="/devtools/2-components.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Auto Imports View

<VideoDemo src="/devtools/3-imports.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Modules Management

<VideoDemo src="/devtools/4-modules.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Static Assets Management

<VideoDemo src="/devtools/5-assets.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Runtime Configs Editor

<VideoDemo src="/devtools/6-runtime-configs.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Payload Editor

<VideoDemo src="/devtools/7-payload.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Open Graph Preview

<VideoDemo src="/devtools/8-open-graph.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Plugins Overview

<VideoDemo src="/devtools/9-plugins.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Timeline View <sup>experimental</sup>

<VideoDemo src="/devtools/10-timeline.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Production Build Analyzer

<VideoDemo src="/devtools/11-build-analyze.mp4" mt--2 />

---
class: text-center
growX: 90
growY: 0
preload: false
---

# Server API Playground

<VideoDemo src="/devtools/12-server-api.mp4" mt--2 />


---
class: text-center
growX: 90
growY: 0
preload: false
---

# Embedded Full-feature VS Code

<VideoDemo src="/devtools/13-vscode.mp4" mt--2 />


---
class: text-center
growX: 90
growY: 0
preload: false
---

# Components Inspector

<VideoDemo src="/devtools/0-inspector.mp4" mt--2 />


---
class: text-center
growX: 90
growY: 0
preload: false
---

# Split View

<VideoDemo src="/devtools/0-split-view.mp4" mt--2 />

---
layout: center
growX: 50
growY: 100
---

<FeatureList />

---
growX: 100
growY: 50
---

# Community Modules

Have Integrated Nuxt DevTools already

<ModulesIcons/>

---

# Projects Inspired by Nuxt DevTools

<div pt10 />

<v-clicks>

- <div i-logos-vue h-2em w-2em inline-block align-middle mr2 /> <a href="https://github.com/webfansplz/vite-plugin-vue-devtools">webfansplz/vite-plugin-vue-devtools</a>

- <img src="/pheno.png" h-2em w-2em inline-block align-middle scale-130 mr2 /> <a href="https://github.com/pheno-agency/vite-plugin-devtools">pheno-agency/vite-plugin-devtools</a> <sup op50>experimental</sup>

- <img src="/modern-js-logo.svg" h-2em w-2em inline-block align-middle scale-125 mr2 /> <a href="https://github.com/Asuka109/modern.js/tree/dev/modernjs-devtools/packages/devtools/plugin">Modern.js DevTools</a> <sup op50>work in progress</sup>

- <div i-logos-qwik-icon inline-block align-middle h-2em w-2em mr2 /> <a href="https://github.com/QwikDev/devtools">Qwik DevTools</a> <sup op50>work in progress</sup>

</v-clicks>

<!--

And we are honored to hear that there are a few projects are inspired by Nuxt DevTools

We have vite-plugin-vue-devtools, a Vite plugin that ported some features from Nuxt DevTools, covering the Vue users that are not on Nuxt yet. We are working closely together to explore the possibilities of better experience for Vue and share the common parts.

We also have vite-plugin-devtools, an experiment to have a universal Vite DevTools that works for different frameworks.

Then we have heard that Modern.js and Qwik is building their own DevTools, with the similiar approach of Nuxt DevTools to provide in-app DevTools for their users.

We are super excited to see more and more projects are exploring the possibilities of DevTools and Developer Experience. That we could learn from each other and explore together to make it even better.

-->

---
layout: center
growX: 0
growY: 50
---

# What's Next?

---
layout: center
class: text-center
growX: 50
growY: 50
---

<div relative>

<NuxtDevTools h-15 v-click/>

<div class="springing" v-click relative>
  <div 
    text-25em font-900 font-number
    op20 z--1 pos="absolute left-1/2 top-3/10" translate="x--1/2 y--8.5/15"
  ><span>1.0</span></div>
</div>

</div>

<!-- Announcing Nuxt DevTools 1.0 -->

---
class: ml-30 mt-5
---

<h1 flex="~ gap-2"><NuxtDevTools h-8/> <span font-bold>1.0</span></h1>

<div text-xl flex="~ col gap-6" pl3 mt10>
<v-clicks>

<div flex="~ gap-3 items-center">
  <div i-carbon-3d-mpr-toggle text-3xl /> 
  <span op80>Modules API Stability</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-carbon-tools-alt text-3xl /> 
  <span op80>UI Improvements</span>
</div>

<div flex="~ gap-3 items-center">
  <div i-simple-icons-nuxtdotjs text-3xl />
  <span op80>Ship and enable by default in Nuxt 3</span>
</div>

<div flex="~ gap-3 items-center" ml10>
  <div i-ri-eye-line text-3xl />
  <span op80>Minimal distraction</span>
</div>

<div flex="~ gap-3 items-center" ml10>
  <div i-ri-keyboard-box-line text-3xl /> 
  <span op80>One shortcut away</span>
</div>

<div flex="~ gap-3 items-center" ml10>
  <div i-carbon-storage-pool text-3xl /> 
  <span op80>Seamlessly opt-in</span>
</div>

</v-clicks>
</div>

<!--
Nuxt DevTools 1.0 serves as a milestone. There are no many new features in 1.0, but it's more like a statement indicates that Nuxt DevTools' approach is mature enough. We are marking the Modules API as stable, so that module authors could provide the integrations more confidently. We also did some UI improvements since the previous versions. And most importantly, Nuxt DevTools will be ship with Nuxt 3.8 and general available to all Nuxt users. By doing that, we want to make sure the onboarding experience as seamless as possible. Meaning that by default, you won't see any visual different in you app. The DevTools is hidden to minimize the distraction. Instead, we will print an instrution in your terminal telling you that you can press a shortcut to enable it as you want. Making the opt-in as easy as possible.
-->
 
---
layout: center
growX: 0
growY: 0
---

<h1 flex="~ gap-2">
  <NuxtDevTools h-8/>
  <span font-bold>1.0</span>
  <span v-click>released Today</span>
</h1>

<div v-click op60 text-2xl mt--3>And will be shipped by default in Nuxt 3.8 soon</div>

<!--
So that said, Nuxt DevTools will be released later today, and it will be shipped by default in Nuxt 3.8 very soon.
-->

---

# Upcoming

<v-clicks depth="2">

- Nuxt Accessibility Integration

- Pinia Playground
- Vue DevTools Integration
  - Reactivity Inspector
  
  - Render Tree
  - Props Editor
- "DevTools Kit"

  - A shared infra and conventions for building devtools

</v-clicks>

<!--
And after Nuxt DevTools 1.0, there are a few upcoming things I'd like to share with you:

The first is that we are working on a Nuxt Accessibility module, provide accessibility hints and suggestion for you Nuxt app. And we will build an UI for it in Nuxt DevTools.

And the next is the Pinia playground, something that has been requested for a long time. We will provide a playground for you to inspect and play with the states in your Pinia store.

We are also working on Vue team to experiment the reactivity tracking in Vue. Including features like Render Tree and Props Editor. Our plan is to unify Nuxt DevTools and Vue DevTools to have all the things in one place.

And lastly, we came up an idea called DevTools Kit, a shared infrastructures and conventions for building devtools. Let me explain a bit more about it.
-->

---
growX: 120
growY: 90
clicks: 20
---

<DevToolsKit />

<!--
DevTools Kit is currently just an idea and we are still brainstroming it. But here that me share what we imagine it could be. We see that each feature provide by Nuxt DevTools have each own scope, some are Nuxt specific, some are Vue specific, some are more like general Web Developement. We think in the best world, each feature could be modular, composable and collabrative.

For example, we could have general features for Web, such as SEO tools, editor integrations, accessibility, etc.
And then, we could have Vite specific features, such as Bundle Analyzer, Transform Inspector, etc.
About Vue, we could have tabs like components, reactivity inspector and so on.
On top of that, we then could have some Nuxt specific features like Nuxt modules, Server API and so on.

Imagine we might able to integrate React's DevTools, state management. Or routes and components view for Svelte, reactivity tracking for Solid, chunking view for Qwik, or even webpack and rspack integrations.

Other than frameworks and bundlers, we could have other integrations like Vitest, UnoCSS, Storybook, Histories and many many more.

With the whole picture, we could found the Nuxt DevTools, is actually the composition of different features here.
With a bit limited scope, excluding Nuxt specific features, we will have Vue DevTools. Similarly, one day we might see a React DevTools sharing the majority of the features here, a Svelte DevTools, a Solid DevTools, a Qwik DevTools, or even Morden.js DevTools that aren't built on top of Vite.

In that regards, maybe you can pick what you need a compose your own DevTools?

So, that's our vision, and indeed there are quite some challenges to make it happen, we will see how far we could go. Stay tuned!
-->

---
layout: center
class: text-center
growX: 50
growY: -10
---

<div text-6xl font-extrabold>Developer Experience</div>
<div text-5xl mt3 v-click text-transparent bg-clip-text bg-gradient-to-r from-yellow via-green to-blue>Key to Great Softwares</div>

<!-- So in the end, I'd say, that Developer Experience is the key to great softwares as well as better User Experience. I am so glad to see that more and more tools entering the field of developer experience. Together, let's make it even better! That's all for my talk, thank you! -->

---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!

Slides on [antfu.me](https://antfu.me)
