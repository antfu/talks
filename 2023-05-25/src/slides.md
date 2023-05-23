---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
---

<h1 flex="~ col">
<div>Developer Experience</div>
<div flex="~ gap3" items-center>with <span inline-block i-logos-nuxt-icon text-1.2em mb-2/> <b font-bold>Nuxt DevTools</b></div>
</h1>

<div uppercase text-sm tracking-widest>
Anthony Fu
</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>StrasbourgJS</div>
  <div text-sm opacity-50>May. 25th 2023</div>
</div>

---
layout: intro
growX: 10
growY: 90
style: 'padding-left: 8rem;'
---

# Anthony Fu

<div class="leading-10 opacity-80">
Core team member of Vue, Vite and Nuxt.<br>
Creator of VueUse, Vitest, UnoCSS, Slidev and Elk.<br>
Working at NuxtLabs.<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4/>
  <div><a href="https://m.webtoo.ls/@antfu" target="_blank" class="border-none! font-300">antfu@webtoo.ls</a></div>
  <div i-ri-twitter-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full w-35 abs-tr mt-32 mr-40/>

<div flex="~ gap2">

</div>

---
layout: center
growX: 50
growY: 50
---

<h1 font-bold class="text-5xl!">Developer Experience</h1>

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
<div flex="~ gap-5 items-center">
<h1 v-click class="text-right" w-full>Transparency</h1>
</div>
</div>

---
growX: 50
growY: -80
growSize: 2
class: h-full flex flex-col justify-center
---

# Transparency

<v-clicks>

- Easy to learn & understand

- Easy to modify

- Easy to debug

</v-clicks>

---
layout: 'center'
class: 'text-center'
growX: 50
growY: 10
---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Introducing</div>

<div class="nuxt-devtools-logo" v-click>
  <NuxtDevTools h-20/>
</div>

---

<div ml-14 text-lg op50 mb--4>The goal of</div>
<h1><NuxtDevTools h-15/></h1>

<div text-2xl>
<v-clicks>

- Enhance your DX with Nuxt

- Improve Transparency

- Performance & analysis

- Interactive & playful

- Personalized documentations


</v-clicks>
</div>


---
layout: center
class: text-center
growX: 50
growY: 50
growSize: 0.4
---

<h1>Demo time!</h1>

---
layout: center
class: text-center
growX: 50
growY: 0
---

---
layout: center
class: text-center
growX: 10
growY: 90
---

# Open Sourced at

<Repo name="nuxt/devtools" />


---
layout: center
class: text-center
growX: 50
growY: -20
---

# Q&A


---
layout: intro
class: text-center pb-5
growX: 50
growY: 120
---

# Thank You!

Slides on [antfu.me](https://antfu.me)
