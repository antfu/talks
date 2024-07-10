---
layout: center
colorSchema: dark
transition: fade-out
mdc: true
title: The Set Theory
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
Hello everyone, it's my great honor to be here, and thanks for having me! First, let me introduce a bit about myself.
-->

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---

# Anthony Fu

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of {Vite} {Vue} and {Nuxt}<br>
Creator of {Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk}<br>
Maintainer of {ESLint Stylistic} {Shiki} {Twoslash}<br>
Working at {NuxtLabs}<br>

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

<img src="https://antfu.me/avatar.png" rounded-full w-35 abs-tr mt-32 mr-30 />

<div flex="~ gap2">

</div>

<!--
My name is Anthony Fu...

So, as you can see, at the frontend level, I am pretty much from the Vue community. And this is actually my second time attending a React event. But the event is awesome and really makes me feel home because we have a React conference with the color of Vue. Thanks to everyone that make this event possible. It's my great honor to speak and share my perspective with you here.

Since I don't know a lot of React to talk about, here is the deal, I will try to talk about something you might find interesting, and you gonna teach me how to properly use the `useEffect` hook later.
-->

---
layout: cover
title: Anthony's Roads to Open Source
---

<h1 flex="~ col">
<div text-2xl origin-top-left transition duration-500 :class="$clicks <= 2 ? 'scale-150' : 'op50'">
  <span v-click>Anthony's Roads to </span>
  <span>Open Source </span>
  <sup v-click>1/n</sup>
</div>
<div mt1 forward:delay-300 v-click>The Set Theory</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col gap-2 items-end" text-left v-click="1">
  <img src="/react-summit.svg" w-22 alt="React Summit" />
  <div text-xs opacity-75>June 14, 2024</div>
</div>

<!--
So, as you see, I am work on multiple open source and also created a few you might already using, for example Vitest, the unit testing framework.

As someone who have been working on open source for a while and made a living, I have to say that open Source is so much fun and rewarding. I believe many of you wanted to contribute to open source, or already doing so. However, there are so many factors that affects that if a open source project would become popular, or "successful" -- depends on how you define it. For example, the quality of the code, the documentation, the community, the marketing, and so on. All of them are important and related to each other. There isn't really a golden rule to make a open source project successful.

So here, I'd like to share some of my experience and ideas on creating and maintaining open source projects, combining with some observations that I have learned from the community.

[click] Hopefully it can help you start your own open source journey, or find some new ideas to improve your existing projects.

Open Source also a quite big topic that I can't really cover everything in one talk. So I am trying to break it down and talk about different aspects of open source in each talk and make them a series.

[click] Today, it's the Part 1, let's talk about - [click] "The Set Theory".

I know, it might sounds a bit random, and you might wonder - what does that mean? Let mew try to explain.

So let's say we already have an Open Source project, or planning to create one. To be a little bit practical, say, we might want to gain certain amount of adoption, or just that we want people to use, and to enjoy our hard work.
-->

---
clicks: 4
glowX: 0
glowY: 0
---

## Consider your Target Users

<div
  v-click="1"
  absolute w-200 h-200 left-20 border="~ gray/50 rounded-full" bg-gray:20 text-5xl
  flex="~ items-center justify-center"
  transition-all duration-500
  :class="$clicks === 4 ? 'scale-100' : 'scale-80'"
>
  Target Users
  <div
    v-click="2"
    absolute w-70 h-70 left-65 top-10 border="~ blue rounded-full"
    bg-blue:20 text-4xl text-blue flex="~ items-center justify-center"
    transition-all duration-500
    :class="$clicks >= 3 ? 'scale-100' : 'scale-80'"
  >
    Actual Users
  </div>
</div>

<!--
One of the things to consider is how we picturing our target users. For example, like "Is my tool for end users or developers?", "Or is it for Vue developers or for React?", etc.

[click] We know the fact that among all of the target users, only a portion of them will become our actual users.

[click] In order to gain more users to our project, we can try to convert more potential users to the actual users. [click] Maybe by doing more marketing or polishing. In that case, the amount of the target users you have, actually becomes the upper limit of how many actual users you could possibly have.

On the other hand, we can also try to find a way to expand our target users to include more people. [click] And naturally, you will also have more converted users from it.

Under this idea, let's take a look at some examples of how we can do that.
-->

---
layout: center
class: text-center
glow: left
---

#### For example {.op60}

<v-clicks>

## <span w-10 inline-block /> My First Open Source Project <sup op40>2019</sup>

<code text-xl>antfu/vscode-vue-i18n-ally</code>

<img src="/vue-i18n-ally.svg" alt="" w-25 ma mb--10 />

</v-clicks>

<!--
The first example I am going to show you is actually [click] my first open source project back in 2019.

[click] The repo is call `vscode-vue-i18n-ally`. [click] It's a VS Code extension for helping Vue developers to work with i18n, or so call internationalization, like preview the translations in code, or manage keys for each language, etc.
-->

---
layout: center
---

![](/i18n-ally-hover.png){.h-100.contrast-110}

<!--
This is a screenshot of the extension that shows its basic features. This screenshot should give you a basic idea of what it is.
-->

---
class: h-full
---

<h1 v-click="5" text-purple>
The "Set Intersection" <div inline-bloc i-gis-intersection class="translate-y-1/10"  inline-block />
</h1>

<div px4 ml--4 py3 bg-gray:10 rounded inline-block>
  <div op50>The project:</div>
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
<v-click :at="9">

- Break the set circles

- Expand the intersection

</v-click>

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
    absolute top-90 left--5 text-purple ws-nowrap px2
  >The Target Users</div>

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
At the beginging of this project, I'm eager to make this project popular as I really want to prove myself in open source. I was super happy when I got the first 100, 200 stars, and received the apperications from the community. After that, I started to seek for higher goals. Back then, I was dreaming to work full time on open source, for example, Evan You, the creator of Vue. So my ambition was to make something as popular as Vue. Then I suddenly saw there are fundamental differences between my project and Vue -- they are directly reflects on the project names. Look into it's name, we see it's quite long and composed by multiple words.

Let's break it down to see part by part. [click] So first, this is a VS Code extension, so it basically means only VS Code users would use this extension. We can draw a circle indicating VS Code users here. [click] And then it's for Vue because it's built based on my need. Then we could have the Vue circle. [click] And finally this is a helper for internationalization, meaning not all Vue users would use this extension. So we can draw another circle for i18n. [click]

Then we find out that our target users are limited inside the intersection of these three Set circles. Meaning that, only a Vue developer who is working on an i18n app that happend to choice VS Code as their editor, would ever try this extension. That sounds quite limited. This is a phenomenon I call it the "Set Intersections". [click]

Before we dive into the solutions, let's have a look of this graph. What would the other intersections means? [click] We will soon realize that the intersection between VS Code and Vue is actually Volar, or Vetur at that time, the VS Code IDE support for Vue. As the result, we knew that both Vetur and Volar have a huge user base, because both the Vue and VS Code have huge communities, making there intersection large enough. [click] Simliar, we see that the interection between Vue and i18n are projects like `vue-i18n` which is also super popular.

[click] And then when it comes to the intersection between VS Code and i18n, we see that there seems to be no such projects at that time. A straightforward thinking -- let's be that one. [click] In practice, we could try to make the extension decoupled from Vue, so that it could be used with other frameworks as well.

In short, we might be able to make things more universal by breaking the set cirles and expand the intersection.
-->

---
layout: center
glow: top
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
And that's how I did it! [click] I took some time to do a huge refactor, designed a plugin interface and make the core features universal. [click] At version 1.0, I renamed the project from `Vue i18n Ally` to `i18n Ally`.

[click]From a Vue-only extension to [click] a universal i18n helper for VS Code that supports a wide range of frameworks, including backend frameworks like Laravel, Ruby on Rails, and even native-targeted frameworks. And they are customizable and extensible!
-->

---
layout: center
glow: left
glowSeed: 1
---

![](/stars.png){.w-150}

:arrow{x1=316 y1=285 x2=345 y2=375 width=1.2 .text-amber v-click=""}

"Rewrite"{.absolute.left-72.top-61.text-amber.text-sm v-after}

<!--
When it comes to numbers, we can see a steep increase of the stars at the time of we doing the release. [click] The stars almost doubled within a month. At that time, that really means a lot to me, especially for me who just get started in open source. The thinking of making things universal really changes the way I worked in Open Source later one.
-->

---
layout: center
glowHue: 70
glowSeed: 10
---

<img src="/ecosystem/vite.svg" alt="" w-25 ma />

<div flex="~ col items-center gap-2" text-3xl p4>
  <div v-click="1" :class="$clicks >= 2 ? 'op50 duration-800 scale-90' : ''" transition v-mark.purple.linethrough="2">Opinionated Vue Tooling</div>
  <div v-click="2" text-4xl>Framework-agnostic Front-end Tooling</div>
</div>

<!--
Then let's talk about another example, Vite. Initially, [click] Vite was an experiments on development tooling for Vue when Evan You first started it. When the idea seems to work quite well, [click] Evan decided to make it framework-agnostic by the extracting Vue's handling into a plugin and polishing the API. Then we have the Vite we know today - the shared infrastructure under so many frameworks
-->

---
glowX: 50
glowY: 0
preload: false
---

<ViteEco w-full h-full v-if="$renderContext === 'slide'" />

<!--
I'd say, Vite's success turns out to be far beyond my initial imagination. It's now has a incredibly huge community and ecosystem. Basically all modern meta-frameworks are building on top of it, we have SvelteKit, Storybook, Astro, Solid Start, Nuxt, Qwik City, any many more. We are also very glad to welcome Remix to join the party recently.

The collabrations across multiple frameworks and community are really impressive. Vite becomes the shared core logics for web tooling, so meta frameworks don't need to worries about the underlying details and can focus more on the features and capiblity the frameworks could provide. When any improvements made in Vite, it also benefits all the downstream frameworks. That is truely, make the web better together.

There are many other factories that make Vite to reach what it is today, but I'd say been extensible and agnostic really widen the door for the community to join and contribute.
-->

---
layout: two-cols
layoutClass: important-p0
---

<div p8 px10>

<div flex="~ col gap-2" py2>
  <div flex="~ gap-2 items-center" text-3xl bg-blue:10 px4 py2 rounded-lg text-blue2>
    <img src="/react-query.png" w-10 rounded />
    React Query
  </div>

  <div v-click flex="~ gap-2 items-center" text-3xl bg-green:10 px4 py2 rounded-lg text-green2>
    <img src="/vue-query.png" w-10 rounded />
    Vue Query
  </div>

  <div v-click flex items-center justify-center p2>
    <div i-ph-arrow-down op50 />
  </div>

  <div v-after flex="~ gap-2 items-center" text-3xl bg-orange:10 px4 py2 rounded-lg>
    <img src="/tanstack-query.png" w-10 rounded />
    <span font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500>TanStack Query</span>
  </div>
</div>

<img src="/tanstack-query-screen.png" w-50 rounded forward:delay-500 v-after />

</div>

::right::

<img src="/tanstack-home.png" w-full h-full object-contain v-click />

<!--
One other example I can think of is React Query, they started with Query for React, and then also  [click] provide a Vue version, called Vue Query.

As more frontend frameworks like Svelte and Solid coming into the game, I believe they realized there could be something more generalized. At some point, we see that Vue Query has been merged with React Query into a single repo, with a wider scope and renamed to TanStack Query [click], having a more universal solution that works for many more other frameworks as well. According to their documentations, today we see that Solid, Svelte and Angular are also supported.

[click] TanStack seems to be trying to expand this idea even further by providing many more universal building blocks, like router and headless components. Kudos to them!
-->

---

## Benefits of being Universal

<div h-100 flex="~ items-center">
<v-clicks>

- Larger user base

- More contributors working together
- Less fragmentation and maintenance cost
- Better abstraction and architecture
- Benefit the whole ecosystem

</v-clicks>
</div>

<!--
By making our project more universal, meaning we could reach out to a [click] large user base and [click] naturally we might then have more contributors to [click] join the force and work together

[click] Trying to refactor things to become universal would also help us to revise the design and abstraction, and often we could end up with a more maintainable and extensible architecture.

[click] And finally, if your project started to gain more usages from various needs, making improvements in our project could end up benefit everyone in the ecosystem.

With that, I really encourage library authors to think more about that way, and trying to seek for collabrations even across ecosystems.
-->

---
layout: intro
---

##### BUT!{.op50}

## Specific is Not a Bad Thing

<!--
So, we know that being universal has a lot great benefits. However actually, I want to say that, being specific is also not a bad thing. Specific allows us to provide tighter integrations and better developer experiences. But, how can we balance that?
-->

---
class: h-full
glowX: 50
glowY: -20
---

## Deployment

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
For example, when we talk about Server-side Rendering and Server APIs, we know that in those cases, we need a server in some form to work together with our frontend. [click] Let's take Nuxt, a Vue meta-framework that I have been working on, as an example.

Other than a self-hosted Node.js server, there are also many hosting services out there, for example like [click]Cloudflare, [click] Vercel, Netlify, etc. [click] In Nuxt, we don't want to our users to be stuck on a single platform, but rather, we want to offer choices to our users to pick based on their need. To leverage the full potential for each provider, we might want to utilize the edge rendering and serverless functions based on what they have offered. One thing to note is that each provide has their own format, some might also comes with specific tooling. [click] That means Nuxt would need to support as many platforms as possible builtin. So we made the integrations and even supported auto detection, with that the app can be written isomorphically and deployed to various of platforms without changing any configuration.

And then we realize that is a problem that probably every meta-framework has to deal with, and it doesn't have to be Nuxt specific. So we extract that into a standalone tool called Nitro.

[click] It's a universal server builder, and it's pretty much like a Vite but for servers. With Nitro taking care of the details of dealing servers, it actually allows Nuxt to have a more clear architecture to handling Vue-specific SSR and APIs etc. And since Nitro is a general propose server tools, we see more and more meta-frameworks started to use it and collaborate with us.

[click] We have Analog, a popular Angular meta-framework has migrated Nitro a few month ago, that they just announced v1.0 release last week. [click] Stacks, a new framework-agnostic meta-framework. [click] We also have Solid Start, the meta-framework from Solid team. [click] Even without a framework, I also find Nitro to be very handy to build pure API server, etc. We are looking forward to see more framework join and work together with us.
-->

---
glowX: 50
glowY: 0
clicks: 4
class: h-full
---

## Bundle Tools

<div flex="~ col gap-5 items-center justify-center" h="90%">
  <div flex="~ gap-5">
    <div text-5xl i-logos-nuxt-icon />
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
    <div w-12 />
    <img src="/farm.png" w-1em v-click="4" />
    <div i-logos-esbuild v-click="4" />
    <div i-logos-rollupjs v-click="4" />
    <div i-logos-webpack v-click="1" />
    <div i-logos-vitejs v-click="2" />
    <img src="/rspack.png" w-1em v-click="4" />
    <img src="/ecosystem/rolldown.svg" w-1em v-click="4" />
    <img src="/ecosystem/bun.svg" w-1em v-click="4" />
    <div op50 v-click="4">⋯</div>
  </div>
</div>

<!--
And similarly, in terms of the bundle tools. Nuxt 2 was built on top of Webpack [click], in Nuxt 3, we want to keep support Webpack for compatibility and easier migration of existing users, while we also love the innvations and developer experience on Vite. [click] So we try to support both tools interchangably. We provide first party integrations to both Webpack and Vite, pre-configured for Nuxt so ideally the app would works the same with both tools. However, we know that the architectures as well as the plugin systems are quite different in them. For example, if we add some transformation to some modules in our pipeline, that usually means we need to implement the logic twice for each plugin format. What would basically double our work, as well as the effort for community modules to support them.

[click] That's the initial motivation for us to create `unplugin`, an unified plugin interface for both Webpack and Vite. With that, we are able to save a lot of effort on digging into the details or misalignment for each tool. And since `unplugin` get extracted as a standalone tool, it also form it's own community and expand the scope to support other build tools like [click] Rollup, esbuild and rspack, rolldown, farm, bun plugins and possibly more in the future. With the work done by the unplugin community, it also opens the door for meta-frameworks like Nuxt so support more build tools for a wider community.
-->

---
class: h-full
glowX: 0
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
Those are just two examples. [click] We also have the [click] UnJS community that provide many high quality tools throughout the entire JavaScript ecosystem. [click] Actually `Nitro` and [click] `unplugin` are parts of the UnJS community. [click] We also have `vite-node`, made from Nuxt server-side code executor, later becomes the core engine of Vitest and made it possible.

These tools are created from Nuxt's needs, but as later we extract them and make them universal. Since then, they have formed their own communities and ecosystems that can benefit much wider range of users and scenarios. Nuxt can be still the opinioned Vue-specific framework to providing better developer experiences, while the underlying tools can be shared and collaborated with other frameworks and communities. That is where make Open Source amazing, isn't it?

[click] So different from the "Set Intersaction" we were talking about, I'd call it the set union.

We extract the universal parts, [click] expand the scope and [click] grow the communities, which also eventually benefit back to ourselves.
-->

---
class: "h-full [&_a]:border-0!"
glowX: 0
---

<div mt-25 />

<div flex="~ col gap-5" pl-5>
<div v-click="1" flex="~ items-center gap-1"><span font-mono op50 mr-4>2019</span>
  <a href="https://github.com/chakra-ui/chakra-ui" target="_blank">Chakra UI React</a>
</div>
<div v-click="2" flex="~ items-center gap-1"><span font-mono op50 mr-4>2019</span>
  <a href="https://github.com/chakra-ui/chakra-ui-vue" target="_blank">Chakra UI Vue</a>
</div>
<div v-click="3" flex="~ items-center gap-1"><span font-mono op50 mr-4>2021</span>
  <a href="https://zagjs.com/" target="_blank">Zag</a>
  <span ml1 bg-gray:10 rounded p1 h-7 inline-flex><div ma i-logos-javascript /></span>
  <span bg-gray:10 rounded p1 w-7 h-7 flex><div ma i-logos-react /></span>
  <span bg-gray:10 rounded p1 w-7 h-7 flex><div ma i-logos-vue /></span>
  <span bg-gray:10 rounded p1 w-7 h-7 flex><div ma i-logos-solidjs-icon /></span>
  <span rounded p1 h-7 inline-flex><div ma i-carbon-overflow-menu-horizontal op50 /></span>
</div>
<div v-click="4" flex="~ items-center gap-1"><span font-mono op50 mr-4>2022</span>
  <a href="https://panda-css.com/" target="_blank">Panda CSS</a>
  <span ml1 bg-gray:10 rounded p1 h-7 inline-flex><div ma i-logos-astro-icon invert-100 hue-rotate-180 /></span>
  <span bg-gray:10 rounded p1 h-7 inline-flex><div ma i-logos-nextjs-icon invert-100 hue-rotate-180 /></span>
  <span bg-gray:10 rounded p1 h-7 inline-flex><div ma i-logos-remix-icon invert-100 hue-rotate-180 /></span>
  <span bg-gray:10 rounded p1 h-7 inline-flex><div ma i-logos-nuxt-icon /></span>
  <span bg-gray:10 rounded p1 h-7 inline-flex><div ma i-logos-vitejs /></span>
  <span rounded p1 h-7 inline-flex><div ma i-carbon-overflow-menu-horizontal op50 /></span>
</div>
<div v-click="5" flex="~ items-center gap-1"><span font-mono op50 mr-4>2022</span>
  <a href="https://ark-ui.com/" target="_blank">Ark UI</a>
  <span ml1 bg-gray:10 rounded p1 w-7 h-7 flex><div ma i-logos-react /></span>
  <span bg-gray:10 rounded p1 w-7 h-7 flex><div ma i-logos-solidjs-icon /></span>
  <span bg-gray:10 rounded p1 w-7 h-7 flex><div ma i-logos-vue /></span>
</div>
<div v-click="6" flex="~ items-center gap-1"><span font-mono op50 mr-4>2024</span> Chakra v3 migrate to Ark <sup op50>in progress</sup></div>
</div>

<div absolute top--15 left-5>
<div
  v-click="1"
  absolute w-60 h-60 left-110 top-30 border="~ teal rounded-full"
  bg-teal:20 text-3xl text-teal flex="~ col gap-3 items-center justify-center"
>
  <img src="/chakra.png" w-15/>
  Chakra UI
</div>

<div
  v-click="2"
  absolute w-45 h-45 left-162 top-25 border="~ emerald rounded-full"
  bg-emerald:20 text-emerald flex="~ col gap-2 items-center justify-center"
  transition-all duration-500
  :class="$clicks >= 2 ? '' : 'scale-50 translate-x--40 translate-y-10 op0'"
>
  <img src="/chakra-vue.png" w-15 />
  Chakra UI Vue
</div>

<div
  v-click="3"
  absolute w-45 h-45 left-180 top-95 border="~ green rounded-full"
  bg-green:20 text-green text-sm text-center flex="~ col gap-3 items-center justify-center"
  transition-all duration-1000
  :class="$clicks >= 5 ? '' : $clicks >= 3 ? 'translate-x--24 translate-y--30 ' : 'scale-50 translate-x--35 translate-y--50 op0'"
>
  <img src="/zagjs.svg" h-10 text-5xl ml2 />
  Universal<br>State Machine
</div>

<div
  v-click="4"
  absolute w-45 h-45 left-118 top-80 border="~ yellow/50 rounded-full"
  bg-yellow:15 text-yellow flex="~ col gap-1 items-center justify-center"
  transition-all duration-800 text-2xl
  :class="$clicks >= 4 ? '' : 'scale-50 translate-y--20 op0'"
>
   <img src="/pandacss.svg" w-1em text-4xl />
   Panda CSS
</div>

<div
  v-click="5"
  absolute w-50 h-50 left-155 top-60 border="~ orange rounded-full"
  bg-orange:20 text-orange text-sm flex="~ col gap-2 items-center justify-center"
  transition-all duration-800
  :class="$clicks >= 5 ? '' : 'scale-50 translate-x--10 translate-y--10 op0'"
>
  <img src="/ark.svg" h-12 />
  Headless Components
</div>
</div>

<!--
To have an example that more related to React, [click] I'd pick Chakra UI. I got the pleasure to have a chat with it's creator Sage to get a more deep insights of the stories behind it.

Back in 2019, Chakra UI was created as a React components library. Soon someone from Vue ecosystem made a Vue version, and they decided to make it official as Charkra UI Vue [click]

Overtime, they find that maintaining two framework support is basically duplicating the work and requires a lot of effort to keep in sync.

[click] In 2021, they came up with Zag, an universal state machine library to extract and share the core logics for components across framework. Which works with Vanilla JavaScript and they also provide bindings for React, Vue and Solid.

[click] Then in 2022, they came up Panda CSS to extract their CSS-in-JS solution into a compile-time, universal solution that has first-class integrations to basically every meta-framework out there.

[click] With these building blocks, later they made Ark UI, a headless component library built on top of Zag, To provide more user-facing components interface that also supports React, Solid and Vue.

[click] And this year, they are migrating the next major version of Chakra UI to use Ark and Panda under the hood. Once it's done, it will make Chakra a more solid fundation inherits from Zag and Ark, while also becomes much more easy to maintain across framework.

In this case, Chakra could still keep being "specific", keep being a styled, opiniated component library but with a better core. While the tools they built along the way could serve much wider communities and become general solutions. It would also be much easier to add more frameworks supports. This approach is espeacially great for new rasing frameworks to gain a better ecosystem without too much effort.
-->

---

# The "Set Theory"

<div mt-10 />

<v-click>

#### [Expand the]{.op50} ["Set Intersection"]{.text-purple} []{.inline-block.i-gis-intersection.translate-y-1/10.text-purple}

</v-click>
<v-clicks at="3">

- Try making the projects universal

- Break circles, expand the intersection

- Enlarge the scope

</v-clicks>
<div mt-10 />
<v-click at="2">

#### [Seek for]{.op50} ["Set Union"]{.text-lime} []{.inline-block.i-gis-union.translate-y-1/10.text-lime}

</v-click>
<v-clicks at="6">

- Find the parts that can be universal, and extract them

- Keep specific integrations for better experience

- Expand the communities

</v-clicks>

<!--
To wrap up with today's topic, we brought up an idea that I call it "The Set Theory". It composed with two sections, the [click] "Set Intersection" and the [click] "Set Union".

In the intersection we learnt that we shouldn't limit our projects to only be in a niche spot, [click] we should proactively seek for the possibility to make our projects universal by [click] breaking the circles and [click] enlarge our scope.

And in the union, we learnt [click] that even sometimes we have to be specific in order to achieve something great, we could still [click] seek for the potential union from our underlying tools to [click] expand the communities and benefit the whole ecosystem.

It's all about collaboration and communities. I have a strong believe in open source, this is the way for us to build the better world. And I am looking forward to see more and more open source built in similiar mindsets and found better ways to collabrate.
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Thank You!

Slides on [antfu.me](https://antfu.me)

<!--
That's all for my talk, hope you enjoy. Thank you!
-->
