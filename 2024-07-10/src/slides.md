---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
title: The Set Theory 集合论
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
class: pl-30
glowSeed: 14
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
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/668380" target="_blank" class="border-none! font-300" ws-nowrap>AnthonyFu 一个托尼</a></div>
</div>

<img src="https://antfu.me/avatar.png" absolute top-36 right-30 w-40 rounded-full />

<div flex="~ gap2">

</div>

---
layout: cover
title: Anthony's Roads to Open Source
class: pl20
---

<div
  flex="~ gap-3 col" mt--5
  origin-bottom-left transition duration-500
  :class="$clicks <= 2 ? 'scale-150 translate-y-10' : ''"
>
  <img src="https://antfu.me/avatar.png" rounded-full w-15 h-15 v-click="1" />
  <div flex="~ col">
    <div text-3xl flex="~ items-center gap-2" mb1 v-click="1" >
      <span>Anthony 的开源之路</span>
      <sup v-click="2" text-lg op75 mb2 ml--0.5>之一</sup>
    </div>
    <div text-xl>
      <span v-click op50>Anthony's Roads to </span>
      <span
        inline-block transition duration-500
        :class="$clicks === 0 ? 'scale-150 translate-y--5 translate-x-8' : 'op75'"
      >Open Source </span>
      <sup v-click op50 ml2>1/n</sup>
    </div>
  </div>
</div>
<h1 mt1>
  <span v-click forward:delay-300>The Set Theory</span>
  <span v-click>「集合论」</span>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left v-click="3">
  <span>Vue Shenzhen Meetup</span>
  <div text-xs opacity-75 mt--4>2024.07.10</div>
</div>

<img src="/vue-shenzhen.svg" h-60 absolute bottom-0 right-0 op10 v-click="2" />

---

<div grid="~ cols-2 gap-10" mt4>

<div>
<div op50 font-serif italic mb--1>Part II</div>
<h2><span op75>The Progressive Path</span><br>渐进之路</h2>
<img src="/part2-progressive.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

<div>
<div op50 font-serif italic mb--1>Part III</div>
<h2><span op75>Yak Shaving</span><br>薅牛毛</h2>
<img src="/part3-yak-shaving.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

</div>

<div mt-14 text-xl text-center v-click>

回放请见 [antfu.me](https://antfu.me)

</div>

---
clicks: 4
---

## 思考你的目标用户

<div
  v-click="1"
  absolute w-200 h-200 left-20 border="~ gray/50 rounded-full" bg-gray:20 text-5xl
  flex="~ items-center justify-center"
  transition-all duration-500
  :class="$clicks === 4 ? 'scale-100' : 'scale-80'"
>
  目标用户
  <div
    v-click="2"
    absolute w-70 h-70 left-65 top-10 border="~ green rounded-full"
    bg-green:20 text-4xl text-green flex="~ items-center justify-center"
    transition-all duration-500
    :class="$clicks >= 3 ? 'scale-100' : 'scale-80'"
  >
    实际用户
  </div>
</div>

<!--
Today's topic is a quite abstract one, I'd call it the Set Theory. A way of thinking on planning the directions and roadmaps of your projects.

So let's say we already have an Open Source project, or planning to create one. To be a little bit practical, we might want to gain certain amount of adoption, or just that we want people to enjoy our hard work.

One of the things to consider is how we picturing our target users. For example, like "Is my tool for end users or developers?", "Or for Vue users or React users?", etc.

We know the fact that among all of the target users, only a portion of them will become our actual users. In order to gain more users to our project, we can try to convert more potential users to the actual users. Maybe by doing more marketing or polishing. In that case, the amount of the target users you have, actually becomes the upper limit of how many actual users you could possibly have. On the other hand, we can also try to find a way to expand our target users to include more people. And naturally, you will also have more actual users from it.

Under this idea, let's take a look at some examples of how we can do that.
-->

---
layout: center
class: text-center
glowX: -10
glowY: 50
---

#### 一个例子 {.op60.mb2}

<v-clicks>

## <span w-10 inline-block /> 我的第一个开源项目 <sup op40>2019</sup>

<code text-xl>antfu/vscode-vue-i18n-ally</code>

<img src="/vue-i18n-ally.svg" alt="" w-25 ma mb--10 />

</v-clicks>

<!--
The first example I am going to show you is actually my first open source project back in 2019.

The repo name is call `vscode-vue-i18n-ally`. It's a VS Code extension for helping Vue developers to work with i18n, or so call internationalization, like preview the translations in code, or manage keys for each language, etc.
-->

---
layout: center
---

![](/i18n-ally-hover.png){.h-100.contrast-110}

<!--
This is a screenshot of the extension that shows its basic features. Well, the extension itself isn't our main topic today. But hopefully this can give you a basic idea of what it is.
-->

---
glowX: 0
glowY: 100
clicks: 10
class: h-full
---

<h1 v-click="5" text-purple>
<div inline-bloc i-gis-intersection class="translate-y-1/10" inline-block />「交集」<span text-3xl>"Set Intersection"</span>
</h1>

<div px4 ml--4 py3 bg-gray:10 rounded inline-block>
  <div op50>项目名</div>
  <pre text-2xl flex="~">
    <span :class="$clicks >= 1 ? 'text-blue' : ''">vscode</span>
    <span text-gray>-</span>
    <span transition :class="[$clicks >= 9 ? 'line-through op30' : '', $clicks >= 2 ? 'text-green' : '']">vue</span>
    <span text-gray>-</span>
    <span :class="$clicks >= 3 ? 'text-amber' : ''">i18n</span>
    <span text-gray>-</span>
    <span :class="$clicks >= 4 ? 'text-purple' : ''">ally</span>
  </pre>
</div>

<div mt-8 />
<v-clicks :at="9">

- 打破圈子

- 扩大交集

</v-clicks>

<div absolute left-100 top-20>
  <div
    v-click="1"
    absolute w-80 h80 left-0 top-0 border="~ blue rounded-full"
    bg-blue:20 text-3xl text-blue flex="~ items-center justify-center"
  >
    VS Code
  </div>
  <div
    v-click="2"
    absolute w-90 h-90 left-40 top--40 border="~ green rounded-full"
    bg-green:20 text-3xl text-green flex="~ items-center justify-center"
    :class="$clicks >= 9 ? 'op30 border-dashed' : ''"
  >
    Vue
  </div>
  <div
    v-click="3"
    absolute w-100 h-100 left-45 top-25 border="~ amber rounded-full"
    bg-amber:20 text-3xl text-amber flex="~ items-center justify-center"
  >
    i18n
  </div>
  <Arrow
    v-click="4"
    x1="60" y1="360" x2="280" y2="160" text-purple
    transition-all duration-500
    :class="$clicks >= 9 ? 'scale-y-50 scale-x-50 top-19 left--10' : ''"
  />
  <div
    v-click="4"
    absolute top-90 left-3 text-purple ws-nowrap px2
  >目标用户</div>

  <div
    v-click="[6, 9]"
    text-teal left-50 top-13 absolute text-2xl border="~ teal rounded-xl" px2 bg-teal:20
  >Vetur Volar</div>
  <div
    v-click="[7, 9]"
    text-lime left-82 top-32 absolute text-2xl border="~ lime rounded-xl" ws-nowrap px2 bg-lime:20
  >vue-i18n</div>
  <div
    v-click="[8, 9]"
    text-red left-55 top-55 absolute text-2xl border="~ red rounded-xl" ws-nowrap px2 bg-red:20
  >???</div>
</div>

<!--
At that time, I'm eager to make this project popular as I really want to prove myself in open source. I was super happy when I got the first 100, 200 stars, and received the apperications from the community. After that, I started to seek for higher goals. Back then, I was dreaming to work full time on open source, for example, like Evan You. So my ambition was to make something as popular as Vue. Then I suddenly saw the fundamental difference between my project and Vue -- they are directly reflects on the project names. Look into my project name, we see it's quite long and composed by multiple words.

Let's break it down to see part by part. So first, this is a VS Code extension, so it basically means only VS Code users would use this extension. We can draw a circle indicating VS Code users here. And then it's for Vue because it's built based on my need. Then we could have the Vue circle. And finally this is a helper for internationalization, meaning not all Vue users would use this extension. So we can draw another circle for i18n.

Then we find out that our target users are limited inside the intersection of these three Set circles. Meaning that, only a Vue developer who is working on an i18n app that happend to choice VS Code as their editor, would ever try this extension. That sounds quite limited. This is a phenomenon I call it the "Set Intersections".

Before we dive into the solutions, let's have a look of this graph. What would the other intersections means? We will soon realize that the intersection between VS Code and Vue is actually Volar, or Vetur at that time, the VS Code IDE support for Vue. As the result, we knew that Vetur and Volar have a huge user base, because both the Vue and VS Code have huge communities, making there intersection large enough. Simliar, we see that the interection between Vue and i18n are projects like `vue-i18n` which is also super popular.

And then when it comes to the intersection between VS Code and i18n, we see that there seems to be no such projects at that time. A straightforward thinking -- let's be that one. In practice, we could try to make the extension decoupled from Vue, so that it could be used with other frameworks as well.

In short, let's make it universal by breaking the set cirles and expand the intersection.
-->

---
layout: center
glowX: 0
glowY: 50
---

<div flex="~ items-center justify-center gap-6" mr15>
<div flex="~ gap-0 col items-center justify-center" v-click>

![](/vue-i18n-ally.svg){.w-25}

<div>Vue i18n Ally</div>

</div>
<div i-carbon-arrow-right text-xl op50 v-click/>
<div flex="~ gap-0 col items-center justify-center" v-after>

![](/i18n-ally.svg){.w-25}

<div>i18n Ally</div>

</div>
</div>

![](/ecosystem/vue.svg){.absolute.left-30.top-60.w-20 v-click=""}

![](/supported-frameworks.png){.absolute.right-10.top-43.w-65 v-click=""}

<!--
And that's how I did it! I took some time to do a huge refactor, designed a plugin interface and make the core features universal. At 1.0, I renamed the project from `Vue i18n Ally` to `i18n Ally`. From a Vue-only extension to a universal i18n helper for VS Code that supports a wide range of frameworks, including backend frameworks like Laravel, Ruby on Rails, and even native-targeted frameworks. And they are customizable and extensible!
-->

---
layout: center
glow: topmost
---

![](/stars.png){.w-150.mix-blend-lighten}

:arrow{x1=316 y1=285 x2=345 y2=375 width=1.2 .text-amber v-click=""}

"重写"{.absolute.left-72.top-61.text-amber.text-sm v-after}

<!--
When it comes to numbers, we can clear see a steep increase of the stars at the time of we doing the release. The stars almost doubled within a month at that time.
-->

---
layout: center
glowX: 50
glowY: 35
glowSize: 0.6
clicks: 2
---

<img src="/ecosystem/vite.svg" alt="" w-25 ma />

<div flex="~ col items-center gap-2" p4>
  <div v-click="1" :class="$clicks >= 2 ? 'line-through op50' : ''" transition>Vue 专用工具</div>
  <div i-carbon-arrow-down op50 v-click="2"/>
  <div v-click="2">框架无关的前端工具链</div>
</div>

<!--
Then let's talk about our old friend, Vite. This is a story that probably most of you are already familiar with. Initially, Vite was an experiments on developmenting tooling for Vue when Evan first started it. When the idea seems to work out well, Evan decided to make it framework-agnostic by the extracting Vue's handling into a plugin and polishing the API. Then we have the Vite we know today
-->

---
glowX: 50
glowY: 0
preload: false
---

<ViteEco w-full h-full v-if="$renderContext === 'slide'" />

<!--
I'd say, Vite's success turns out to be far beyond my initial imagination. It's now has a incredibly huge community and ecosystem. Basically all modern meta-frameworks are building on top of it. And the collabrations across multiple frameworks and community are really outstanding. There are many other factories that make Vite to reach what it is today, but I'd say been extensible and agnostic really widen the door for the community to join and contribute.
-->

---

## 通用化的好处

<div h-100 flex="~ items-center">
<v-clicks>

- 更广阔的用户群体

- 更多的贡献者
- 联合力量共同协作
- 减少碎片化和维护成本
- 更好的抽象和架构
- 造福整个生态系统

</v-clicks>
</div>

<!--
By making our project more universal, meaning we could reach out to a large user base and naturally we might then have more contributors to join the force and work together.

Trying to refactor things to become universal would also help us to revise the design and abstraction, and often we could end up with a more maintainable and extensible architecture.

And finally, if your project started to gain more usages from various needs, making improvements in our project could end up benefit everyone in the ecosystem.
-->

---
layout: intro
---

### 但是！{.op50.mb-2.ml5}

## 「特例化」也不是坏事 {v-click}

<!--
So, we know that being universal has a lot great benefits. But actually, being specific is also not a bad thing.
-->

---
layout: center
glowX: 50
glowY: 50
---

<h1 font-bold class="text-5xl!" flex="~ gap-3 items-center">
  <span v-click>Developer</span>
  <div i-logos-nuxt-icon text-6xl inline-block />
  <span v-after>Experience</span>
</h1>

<div absolute left-50 top-80 v-click>Server-side Rendering</div>
<div absolute left-100 top-80 v-click>File-based Routing</div>
<div absolute left-52 top-50 v-click>Modules Ecosystem</div>
<div absolute left-100 top-50 v-click>Nuxt DevTools</div>

<v-click>

<div absolute left-137 top-50>Vite / Webpack</div>
<div absolute left-145 top-80>ESM First</div>
<div absolute left-170 top-80>Nitro</div>
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

<!--
One of the great examples I can thinking of is Nuxt. Nuxt is a meta-framework that is specific to Vue. Out of many benefits of choosing Nuxt, one thing I'd like to highlight is the Developer Experience. In Nuxt, we provide quite a lot of features to help you build apps faster in an organized way. We have server-side-rendering for better user land performance and SEO, and file-base routing for better organization. We also have a powerful modules ecosystem for integrations and also Nuxt DevTools, etc.

Many of these are built with the assumption that we use Vue and have a bundling pipeline. Nuxt also use Vite as the default dev server and bundler, meaning we are inherit the the great plugins ecosystem as well as the fast HMR from Vite. For Nuxt to be a bit specific than Vite, allowing us to bring many cool features and integrations that would be hard to achieve in a universal way. I think that's also why we have many meta-frameworks like SvelteKit, Astro, SoildStart for different needs.

And here, let's look into a couple of features Nuxt provides.
-->

---
class: h-full
glowX: 50
glowY: -20
clicks: 10
---

## 部署平台

<div flex="~ col gap-1 items-center justify-center" h="95%" scale-120>
  <div flex="~ gap-5">
    <div ml-5 />
    <div flex="~ col items-center gap-1" text-xs v-click="9">
      <div i-logos-solidjs-icon h-1em w-1em text-4xl scale-90 />
      Solid Start
    </div>
    <div flex="~ col items-center gap-1" text-xs v-click="7">
      <img src="/ecosystem/analog.svg" h-1em w-1em text-4xl />
      Analog
    </div>
    <div flex="~ col items-center gap-1" text-xs v-click="1">
      <div i-logos-nuxt-icon text-4xl />
      Nuxt
    </div>
    <div flex="~ col items-center gap-1" text-xs v-click="8">
      <img src="/stacks.svg" h-1em w-1em text-4xl />
      Stacks
    </div>
    <div flex="~ col items-center gap-1" text-xs v-click="10" >
      <div text-4xl i-logos-nodejs-icon-alt scale-90 />
      Node.js
    </div>
    <div flex="~ col items-center gap-1" text-xs v-click="10" >
      <div text-4xl i-ri-more-line op50 scale-90 />
      <span op50>more</span>
    </div>
  </div>
  <div w-1px h-8 border="l gray" transition-all duration-1000
    :class="$clicks >= 6 ? '' : 'op0 mt--15'"
   />
  <div
    transition-all duration-1000
    flex="~ col items-center"
    :class="$clicks >= 6 ? '' : 'op0 mt--13'"
  >
    <img src="/ecosystem/nitro.svg" w-1em text-5xl />
    Nitro
  </div>
  <img
    src="/lines-nitro.svg"
    h-16 max-w-inherit mb1
    v-click="5"
  />
  <div flex="~ gap-4" text-3xl>
    <div i-logos-azure-icon v-click="4" />
    <div i-logos-aws v-click="4" />
    <div i-logos-digital-ocean v-click="4" />
    <div i-logos-firebase v-click="4" />
    <div i-logos-netlify-icon v-click="3" scale-110/>
    <div i-logos-cloudflare-icon v-click="2" scale-110 />
    <div i-logos-vercel-icon invert v-click="3" />
    <div i-logos-github-icon invert v-click="4" />
    <div i-logos-deno v-click="4" />
    <div i-logos-bun v-click="4" />
    <div op50 v-click="4">⋯</div>
  </div>
</div>

<!--
When we talk about Server-side Rendering and Server APIs, we know that in those cases, we need a server in some form to work together with our frontend. Other than a self-hosted Node.js server, there are also many hosting services out there, for example like Cloudflare, Netlify, Vercel, etc. To leverage the full potential for each provider, we might want to utilize the edge rendering and serverless functions based on what they have offered. One thing to note is that each provide has their own format, some might also comes with specific tooling. In Nuxt, we don't want to our users to be stuck on a single platform, and we want to support as many platforms as possible builtin. So we build them and even supported auto detection, so the app can be written isomorphically and deployed to various of platforms without changing any configuration.

And then we realize that is a problem that probably every meta-framework has to deal with, and it doesn't have to be Nuxt specific. So we extract that into a standalone tool called Nitro.

It's a universal server builder, and it's pretty much like a Vite but for servers. With Nitro taking care of the details of dealing servers, it actually allows Nuxt to have a more clear architecture to handling SSR and APIs etc. And since Nitro is a general propose server tools, we see more and more meta-frameworks started to use it, or new frameworks to build on top of it.

We have Analog, a popular Angular meta-framework has migrated Nitro. Stacks, a framework-agnostic full-stack framework. Even without a framework, I also find Nitro to be very handy to build pure API server, etc.
-->

---
glowX: 50
glowY: 0
clicks: 4
class: h-full
---

## 打包工具

<div flex="~ col gap-5 items-center justify-center" h="90%">
  <div flex="~ gap-5">
    <div text-6xl i-logos-nuxt-icon />
  </div>
  <div w-1px h-8 border="l gray" transition-all duration-1000
    :class="$clicks >= 3 ? '' : 'op0 mt--20'"
   />
  <div
    transition-all duration-1000
    flex="~ col gap-1 items-center"
    :class="$clicks >= 3 ? '' : 'op0 mt--20'"
  >
    <img src="/ecosystem/unplugin.svg" w-1em text-5xl />
    unplugin
  </div>
  <div w-1px h-8 border="l gray" transition-all duration-1000 v-click="2" />
  <div flex="~ gap-4" text-5xl>
    <div i-logos-esbuild v-click="4" />
    <div i-logos-rollupjs v-click="4" />
    <div i-logos-webpack v-click="1" />
    <div i-logos-vitejs v-click="1" />
    <img src="/rspack.png" w-1em v-click="4" />
    <div op50 v-click="4">⋯</div>
  </div>
</div>

<!--
And similarly in terms of bundle tools. Nuxt 2 was built on top of Webpack, in Nuxt 3, we want to keep that for compatibility and easy migration, while we also love the innvations and DX on Vite. So we try to support both tools interchangably. We provide first party integrations to both Webpack and Vite, pre-configured for Nuxt so ideally the app would works the same with both tools. However, we know that the architectures as well as the plugin systems are quite different in them. For example, if we add some transformation to some modules in our pipeline, that usually means we need to implement the logic twice for each plugin format. What would basically double our work, as well as the effort for community modules to support them.

That's the initial motivation for us to create `unplugin`, an unified plugin interface for both Webpack and Vite. With that, we are able to save a lot of effort on digging into the details or misalignment for each tool. And since `unplugin` get extracted as a standalone tool, it also form it's own community and expand the scope to support also Rollup, esbuild and rspack, and possibly more in the future. With the work done by the unplugin community, it also opens the door for Nuxt to start experimenting the support of rspack as the bundler.
-->

---
class: h-full
glowX: 0
clicks: 9
---

<h1 v-click="6" text-lime>
<div inline-bloc i-gis-intersection class="translate-y-1/10" inline-block />「并集」<span text-3xl>"Set Union"</span>
</h1>

<div mt-10 />

<v-clicks :at="7">

- 提取可以通用化的部分

- 扩大覆盖领域和范围

- 扩大社区

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
   <img src="/ecosystem/unjs.png" w-1em text-5xl ml2 />
   unjs
</div>

<div
  v-click="3"
  absolute w-60 h-60 left-170 top-8 border="~ violet rounded-full"
  bg-violet:20 text-3xl text-violet flex="~ gap-2 items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 3 ? '' : 'scale-50 translate-x--20 translate-y-20 op0'"
>
   <img src="/ecosystem/nitro.svg" w-1em text-5xl />
   nitro
</div>

<div
  v-click="4"
  absolute w-40 h-40 left-184 top-90 border="~ gray rounded-full"
  bg-gray:20 text-gray flex="~ gap-1 items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 4 ? '' : 'scale-50 translate-x--20 translate-y--20 op0'"
>
   <img src="/ecosystem/unplugin.svg" w-1em text-4xl />
   unplugin
</div>

<div
  v-click="5"
  absolute w-40 h-40 left-90 top-90 border="~ lime/50 rounded-full"
  bg-lime:10 text-lime flex="~ gap-2 col items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 5 ? '' : 'scale-50 translate-x-20 translate-y--20 op0'"
>
   <img src="/ecosystem/vite-node.svg" w-1em text-5xl />
   vite-node
</div>

<!--
Those just two examples. We also have the UnJS community that provide many high quality tools throughout the entire JavaScript ecosystem. And actually `Nitro` and `unplugin` are parts of the UnJS community. We also have `vite-node`, made from our server-side code executor, later becomes the core engine of Vitest and made it possible.

These tools are created from Nuxt's needs, but as later we extract them and make them universal, they have formed their own communities and ecosystems that can benefit much wider range of users and scenarios. Nuxt can be the framework that is a bit specific for providing better experiences, while the underlying tools can be shared and collaborated with other frameworks and communities. That is where make Open Source amazing, isn't it?

So different from the "Set Intersaction" we were talking about, I'd call it the set union.

We extract the universal parts, expand the scope and grow the communities, which also eventually benefit back to ourselves.
-->

---
clicks: 10
---

<div
  class="left-50% top-50% absolute relative w-0 h-0"
  :class="$clicks < 6 ? '' : 'scale-80'"
  transition-all duration-600
>
  <div
    v-click="2"
    absolute border="~ green rounded-full"
    translate="x--50% y--50%"
    :class="$clicks < 3 ? 'ml--40 w-150 h-150' : 'ml--70 w-60 h-60'"
    transition-all duration-800
    bg-green:20 text-3xl text-green flex="~ items-center justify-center"
  >
    <div i-logos-nuxt-icon text-6xl />
  </div>
  <div
    z--1
    absolute border="~ rounded-full"
    translate="x--50% y--50%"
    :class="$clicks < 1 ? 'border-color-transparent! bg-transparent! w-50 h-50' : $clicks < 3 ? 'w-50 h-50 border-green bg-green:20' : 'h-100 w-100 border-gray bg-white:20 border-dashed'"
    transition-all duration-800
    text-3xl text-white flex="~ items-center justify-center"
  >
    <div
      h-1em
      :class="$clicks < 1 ? 'scale-200' : $clicks < 3 ? 'scale-90' : 'scale-140'"
      of-hidden transition-all duration-800>
      <div
        flex="~ col gap-2 items-center"
        transition-all duration-600 delay-1000
        :style="{
          transform: $clicks < 3 ? '' : 'translateY(-1.1em)'
        }"
      >
        <NuxtDevTools h-0.8em/>
        <img src="/devtools-kit.svg" h-full />
      </div>
    </div>
  </div>
  <div
    v-click="5"
    absolute border="~ green rounded-full"
    translate="x--50% y--50%"
    ml--50 mt--42 w-60 h-60
    transition-all duration-800
    bg-green:20 text-3xl text-green flex="~ items-center justify-center"
  >
    <div i-logos-vue text-6xl />
  </div>
  <div
    v-click="6"
    absolute border="~ red rounded-full"
    translate="x--50% y--50%"
    mt--65 ml-8 w-60 h-60
    transition-all duration-800
    bg-red:20 text-3xl text-red flex="~ items-center justify-center"
  >
    <div i-logos-svelte-icon text-6xl />
  </div>
  <div
    v-click="7"
    absolute border="~ blue rounded-full"
    translate="x--50% y--50%"
    mt--30 ml-60 w-60 h-60
    transition-all duration-800
    bg-blue:20 text-3xl text-blue flex="~ items-center justify-center"
  >
    <div i-logos-react text-6xl />
  </div>
  <div
    v-click="8"
    absolute border="~ purple rounded-full"
    translate="x--50% y--50%"
    mt-32 ml-60 w-60 h-60
    transition-all duration-800
    bg-purple:20 text-3xl text-purple flex="~ items-center justify-center"
  >
    <div i-logos-qwik-icon text-6xl />
  </div>
  <div
    v-click="9"
    absolute border="~ blue rounded-full"
    translate="x--50% y--50%"
    mt-55 ml3 w-60 h-60
    transition-all duration-800
    bg-blue:20 text-3xl text-blue flex="~ items-center justify-center"
  >
    <div i-logos-solidjs-icon text-6xl />
  </div>
  <div
    v-click="10"
    absolute border="~ gray rounded-full"
    translate="x--50% y--50%"
    mt-45 ml--47 w-40 h-40
    transition-all duration-800
    bg-gray:20 text-3xl text-gray flex="~ items-center justify-center"
  >
    <div i-ri-more-line text-6xl />
  </div>
</div>

<!--
So, for one more example, let't talk about Nuxt DevTools. That we just released v1.0 the last week, and enabled by default since Nuxt 3.8. The overall feedback of Nuxt DevTools is quite possitive, and many projects found it useful helping they to work with their Nuxt projects.

So, after reaching stable, naturally we will starting thinking the future. So, what will be the next?

Using the Set Theory we are talking about, we can consider Nuxt DevTools as a circle. Putting Nuxt into the graph, it's clearly that Nuxt DevTools is in the scope of Nuxt - as it only works for Nuxt currently. It's been long requested that there are users also want to use such DevTools outside of Nuxt, or want to have features from Vue DevTools included in Nuxt DevTools to use in one place.

To get out of the intersection, we could try to extend the scope of Nuxt DevTools. So, we came up with the idea of DevTools Kit. So dreamming big, let's imagine that it could be the shared infrastructure of any frameworks. We could have Vue DevTools, that we could share some logics between Vue and Nuxt. Then maybe also Svelte, React, Solid, Qwik or more.

In the end, it could be much larger scopes with a larger community.
-->

---
clicks: 20
---

<DevToolsKit />

<!--
DevTools Kit is currently just an idea and we are still brainstroming. But here let me share what we imagine it could be.

We see that each feature provided by Nuxt DevTools have each own scope, some are Nuxt specific, some are Vue specific, some are more about general Web Developement. We think in the best world, each feature could be modular, composable and collabrative.

For example, we could have general features for Web, such as SEO tools, editor integrations, accessibility, etc.
And then, we could have Vite specific features, such as Bundle Analyzer, Transform Inspector, etc.
About Vue, we could have tabs like components, reactivity inspector and so on.
On top of that, we then could have some Nuxt specific features like Nuxt modules, Server API and so on.

Imagine we might able to integrate React's DevTools, state management. Or routes and components view for Svelte, reactivity tracking for Solid, chunking view for Qwik, or even webpack and rspack integrations.

Other than frameworks and bundlers, we could have other integrations like Vitest, UnoCSS, Storybook, Histories and many many more.

With the whole picture, we could found the Nuxt DevTools, is actually the composition of different features here. Nuxt is a Vue meta framework, so we could have all Vue features adding Nuxt specific features.

With a bit limited scope, excluding Nuxt features, we will have Vue DevTools. Similarly, one day we might see a React DevTools coming, sharing the majority of the common features here, and maybe a Svelte DevTools, a Solid DevTools, a Qwik DevTools, or even Morden.js DevTools that aren't built on top of Vite.

In that regards, maybe you can pick what you need a compose your own DevTools?

So, that's our vision, each feature could share and collabrate across different frameworks and benefit to all frameworks. Indeed there are quite some challenges to make it happen, we will see how far we could go. Stay tuned!
-->

---

# The "Set Theory" 「集合论」

<div mt-10 />

<v-click>

#### [扩大]{.op50}[「交集」]{.text-purple} []{.inline-block.i-gis-intersection.translate-y-1/10.text-purple}

</v-click>
<v-clicks>

- 尝试使项目通用化

- 打破圈子，扩大交集

- 扩大范围，增强社区

</v-clicks>
<div mt-10 />
<v-click>

#### [寻找]{.op50} [「并集」]{.text-lime} []{.inline-block.i-gis-union.translate-y-1/10.text-lime}

</v-click>
<v-clicks>

- 提取可以通用化的部分

- 保留特例化集成以提供更好的体验

- 扩张社区

</v-clicks>

<!--
...

我认为，这些都是关于协作和社区的。我坚信开源是我们建设更美好世界的方式。我期待看到更多开源项目以类似的思维方式构建，并找到更好的协作方式。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢！

幻灯片在 [antfu.me](https://antfu.me)
