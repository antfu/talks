---
layout: cover
highlighter: shiki
css: unocss
---

# Vite, the on-demand DX

<p text-xl>
How Vite becomes great using the mindset of on-demand.
</p>

<div uppercase text-sm tracking-widest>
Anthony Fu
</div>

<div abs-bl mx-14 my-12 flex>
  <img src="/viteconf.svg" h-10 />
  <div ml-3 flex flex-col text-left>
    <div>ViteConf</div>
    <div text-sm opacity-50>October 11th, 2022</div>
  </div>
</div>

<div i-logos-vitejs text-35em absolute op10 right--35 top--5 />

---
layout: intro
---

# Anthony Fu

<div class="leading-8 opacity-80">
Core team member of Vite, Vue and Nuxt.<br>
Creator of Vitest, VueUse, UnoCSS, Slidev and unplugin.<br>
Working at NuxtLabs.<br>
</div>

<div flex="~ gap-4" py4 v-click>
  <div w-10 text-2em i-logos-vitejs />
  <div w-10 text-2em i-logos-vitest />
  <div w-10 text-2em i-logos-nuxt-icon />
  <img w-10 text-2em src="https://sli.dev/logo.svg" />
  <div w-10 text-2em i-logos-vue />
  <div w-10 text-2em i-logos-vueuse />
  <div w-10 text-2em i-logos-unocss filter-invert />
</div>

<div mt-5 w-min grid="~ cols-[auto_1fr] gap-2" items-center v-click>
  <div i-ri-github-line op50 ma text-xl/>
  <div><a href="https://github.com/antfu" target="_blank">antfu</a></div>
  <div i-ri-twitter-line op50 ma text-xl/>
  <div><a href="https://twitter.com/antfu7" target="_blank">antfu7</a></div>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://antfu.me" target="_blank">antfu.me</a></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full w-40 abs-tr mt-22 mr-22/>


---

<SectionTitle
  headline="What is"
  title="on-demand?"
  color="text-sky"
/>

---
clicks: 1
layout: center
---

<img src="/windows-download.jpg" transition-all :class="$clicks ? 'blur-5 filter-brightness-40' : ''" />
<img src="/streaming-services.svg" absolute top-50 left-60 v-click="1" />

---

# On-demand?

<v-click>

Provide what you need upon the request.

</v-click>


<div scale-110 origin-left-top>

<div v-click>
Compare to the transitional "all at once" approach:
</div>

<h6 my4 v-click>Pros</h6>
<v-clicks>

- <span font-bold text-blue>Efficient</span> - only load the parts you need
- <span font-bold text-teal>Reponsive & Customizable</span> - optimize based on request
- <span font-bold text-lime>Web is on-demand</span>

</v-clicks>
<h6 my4 v-click>Cons</h6>
<v-clicks>

- <span font-bold text-yellow>Overhead</span> - network, request waterflow, etc.
- <span font-bold text-orange>Complexity</span> - extra work to implement and maintain

</v-clicks>
</div>


---

<SectionTitle
  headline="How"
  title="trade-offs"
  description="made in Vite?"
  color="text-orange"
/>

---

# On-demand on Processing

Vite only transpile the modules you need for the requested page. No bunding.

<img src="/bundless.svg" h-90 mt--5 v-click />

---

# On-demand on Strategies

<div grid="~ cols-2">
<div>

###### Developement

<div text-sm text-orange>Feedback Loop / DX</div>

<div mt-3 />
<v-clicks>

- Bundless
- Hot module replacement (HMR)
- Dev server

</v-clicks>
</div>
<div>

###### Production Build

<div text-sm text-rose>Performance & Size / UX</div>

<div mt-3 />
<v-clicks>

- Bundle via Rollup
- Tree-shaking
- Code-splitting
- Minification

</v-clicks>
</div>
</div>

<img src="/build-dev.svg" h-60 absolute left-10 bottom-8 v-click />

<div p4 text-center text-xl absolute right-40 bottom-20 w-60 v-click>
keep them <b text-amber>consistent</b> with <i>the same config and plugins</i>
</div>


---
clicks: 4
---

# On-demand on Optimization

<img src="/user-code-node.svg" h-20 absolute left-12 top-25 v-click="1" />

<div grid="~ cols-2" mt-28 v-click="2">
<div>

###### User Code

<div text-sm text-cyan>Changes frequently</div>

<div mt-3 />
<v-clicks :at="3">

- Serve pre-module
- Inject code for Hot Module Replacement 

</v-clicks>
</div>
<div>

###### Node Modules

<div text-sm text-green>Only once a while</div>

<div mt-3 />
<v-clicks :at="3">

- Pre-bundling into a single file
- Skip HMR
- Strong cached with lockfile

</v-clicks>
</div>
</div>


---

# Bonus of On-demand - <span text-orange>Customizability</span>

Dev server, client-server communication, etc.

<div v-click>

`vite-plugin-inspect`:

<iframe src="/__inspect/" border-t border-gray:40 scale-75 origin-bottom-left absolute left-0 bottom-0 w="133%" h="92%" />

</div>


---

<SectionTitle
  headline="Build"
  title="integrations"
  description="with on-demand in mind"
  color="text-purple"
/>

---

# Server Side Rendering

Traditional approach

<div mt-10 />

<img src="/ssr-workflow.svg" v-click />

---

# Developement time SSR

Rebuild the bundle on source file changes

<div mt-10 />

<img src="/ssr-workflow-rebundle.svg" />

---

# On-demand SSR in Nuxt 3 <div i-logos-nuxt-icon inline-block translate-y-1 />

<div text-lg mb-7 v-click>
We made an on-demand Vite runtime <span text-amber font-bold>Vite Node</span>
</div>

<img src="/ssr-workflow-vite-node.svg" v-click />

<v-click>

Learn more: [Dev SSR on Nuxt with Vite](/todo)

</v-click>

---

<div grid="~ cols-2" h-95>
<div flex="~ col" items-center justify-center>

<img src="/vite-node.svg" mb4 />

# Vite Node

Vite as Node runtime.

</div>
<div flex="~ col" justify-center>
<v-clicks>

- On-demand evaluation
- Reuses Vite config, plugins, etc.
- Out-of-box ESM & TypeScript support
- Watch mode + HMR
- Separate server/client architecture

</v-clicks>
</div>
</div>

<div flex="~ gap-6" py4 mt--10 justify-center items-center v-click>
  <div w-16 text-4em i-logos-nuxt-icon />
  <div w-16 text-4em i-logos-vitest />
  <img w-16 text-4em src="/histoire.svg" />
  <img w-16 text-4em src="/vue-termui.svg" />
  <div op50>...more</div>
</div>

---
layout: center
class: bg-black
---

<img src="/daniel-talk.png" />

---
class: bg-black
layout: center
---

<img src="/vladimir-talk.png" />

---
src: '../../reuse/sponsors.md'
---

---
src: '../../reuse/thanks.md'
---
