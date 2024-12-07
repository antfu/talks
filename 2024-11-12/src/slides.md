---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Journey to Nuxt Icon
remoteAssets: true
addons:
  - slidev-addon-graph
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
Hello everyone, good to be here again at Nuxt Nation!
-->

---
layout: cover
---

# Journey to Nuxt Icon {.font-600!}

<div text-2xl mt--1 op50>How we engineered the best icon solutions for Nuxt</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <img src="/logo-nuxtnation.svg" h-6 alt="Nuxt Nation" />
  <div text-sm opacity-50>Nov. 12th 2024</div>
</div>

<!--
For today's topic, I'd like to talk about Nuxt Icon. I'll walk you through various of different solutions on rendering icons on web pages, with their pros and cons. And how we managed to find a balance trade-offs in the Nuxt Icon module and deliver to you.
-->

---
layout: intro
class: pl-30
glowSeed: 14
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

<img src="https://antfu.me/avatar.png" rounded-full absolute top-38 right-15 w-40 />

---
layout: fact
---

# Icons

<div v-click relative text-3xl mt--3><span v-mark.teal.highlight.delay100.op10="1" text-teal>"Tiny Image Assets"</span></div>

<div v-click text-2xl  mt5 text-shadow-2xl op75>Simple to define, but complicated to engineer</div>

<IconsBurst />

<!--
So, let's first talk about icons in general.

So, what are icons? [click] To me, they are tiny image assets that represent graphics, making functionality easier to identify and understand, while also making the UI more interesting and engaging.

However, icons are not just images; they come with unique requirements based on their usage.

[click] I'd say, while the concept of icons is simple, engineering them correctly is quite complicated.

Here, you can see many icons from different collections, each with its own properties and requirements. Let's break them down from an engineering perspective.
-->

---

# Engineering Challenges

Good icons need to be:

<div grid="~ gap-12 gap-y-15 cols-3" py10 w-max>

<div v-click flex="~ col gap-1">
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div text-pink text-4xl i-ph-palette-duotone />
    <div text-pink3>Colorable</div>
  </div>
  <div text-base op60 mb1>Adapt the color on the fly</div>
  <div flex="~ gap-2 items-end">
    <div i-ph-backpack-duotone text-blue />
    <div i-ph-tree-palm-duotone text-green />
    <div i-ph-sparkle-duotone text-yellow />
    <div i-ph-beach-ball-duotone text-rose />
    <div i-ph-balloon-duotone text-red />
  </div>
</div>

<div v-click flex="~ col gap-1">
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div text-green text-4xl  i-ph-arrows-in-simple-duotone />
    <div text-green3>Scalable</div>
  </div>
  <div text-base op60 mb1 mb--1>Resize as ease</div>
  <div flex="~ gap-2 items-end">
    <div i-ph-at-duotone text-base />
    <div i-ph-at-duotone text-lg />
    <div i-ph-at-duotone text-2xl />
    <div i-ph-at-duotone text-4xl />
  </div>
</div>

<div v-click flex="~ col gap-1">
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div text-blue text-4xl i-ph-users-four-duotone />
    <div text-blue3>Large Amount</div>
  </div>
  <div text-base op60 mb1>Manage hundreds of icons</div>
  <div flex="~ gap-2 items-center">
    <div i-ph-user-duotone />
    <div i-ph-user-circle-duotone />
    <div i-ph-user-rectangle-duotone />
    <div i-ph-user-switch-duotone />
    <div i-ph-users-three-duotone />
    <span text-sm>... 1024+</span>
  </div>
</div>

<div v-click flex="~ col gap-1">
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div text-amber text-4xl i-ph-cube-duotone/>
    <div text-amber3>Bundling</div>
  </div>
  <div text-base op60 mb1>Optimize bundle</div>
  <div flex="~ gap-2 items-center">
    <div i-ph-image-duotone />
    <div i-ph-text-aa-duotone />
    <div i-ph-file-svg-duotone />
    <div i-ph-circles-three-plus-duotone />
  </div>
</div>

<div v-click flex="~ col gap-1">
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div text-violet text-4xl i-ph-network-duotone />
    <div text-violet3>Loading</div>
  </div>
  <div text-base op60 mb1>Fetch icons on-demand</div>
  <div flex="~ gap-2 items-center">
    <div i-ph-circle-dashed-duotone />
    <div i-ph-triangle-dashed-duotone />
    <div i-ph-folder-simple-dotted-duotone />
    <div i-ph-circle-duotone />
    <div i-ph-triangle-duotone />
    <div i-ph-folder-simple-duotone />
  </div>
</div>

<div v-click flex="~ col gap-1">
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div text-rose text-4xl i-ph-hand-deposit-duotone />
    <div text-rose3>Dynamic</div>
  </div>
  <div text-base op60 mb1>Icons not known at compile time</div>
  <div flex="~ gap-2 items-center">
    <div i-ph-cloud-arrow-down-duotone />
    <div i-mdi-cloud-arrow-down-outline />
    <div i-mdi-cloud-download />
    <div i-tabler-cloud-download />
    <div i-iconamoon-cloud-download-duotone />
  </div>
</div>

</div>

<!--
Rendering good icons comes with a few challenges beyond just displaying plain images.

[click] First, we need icons to be colorable. Most icons are monochrome, but they often need to adapt their colors based on the context, such as switching between light and dark modes. It's ideal if we can change their colors on the fly, so we don't have to design multiple versions of the same icon.

[click] Similarly, icons should be scalable. They need to fit different screen sizes or UI elements without losing quality. It would be great if we could resize them easily.

[click] Besides rendering, we also need to think about how we deliver icons. Icon sets usually include a large number of icons to cover various needs, but we rarely use all of them in a single page or app.

[click] To improve performance and save bandwidth, we need to consider how we bundle them. How flexible and granular can we be in splitting the icon sets into chunks? Should we create chunks based on how commonly icons are used, or can we be granular enough to only ship the icons we actually use?

[click] After bundling, we need to decide how to load the icons. Should we include them in the same bundle as the client app, or as separate lazy-loaded chunks?

[click] Finally, we need the capability to load icons dynamically, especially for user-provided data that we don't know about at build time.

These are some of the key challenges we face with icons. Depending on your use case, you might only need to address some of them. But when creating tools, we aim to find a good balance to support as many scenarios as possible. So, let's explore the solutions available for icons and compare their pros and cons.
-->

---

# Solution 1: `<img>`

Icons as images

<v-click>
```html
<img src="/icons/fugue/gear.png" alt="Gear" width="16" height="16" />
```
</v-click>

<div flex="~ items-start col" mt2 w-max v-click>
<div flex="~ gap-3" bg-white:75 px4 py2 rounded w-max>
<img src="/icons/fugue/gear.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/graphic-card.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/folder-open-feed.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/home-medium.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/image-map.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/inbox-document-music-playlist.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/download-mac-os.png" image-render-pixel alt="Gear" width="32" height="32" />
<img src="/icons/fugue/drive-disc-blue.png" image-render-pixel alt="Gear" width="32" height="32" />
</div>
<div text-xs mt1 self-end op50><b>Fugue Icons</b> by <a href="https://p.yusukekamiyamane.com/">Yusuke Kamiyamane</a></div>
</div>

<ProsCons
  :pros="[
    'Simple, mo additional setup',
    'Native browser support',
    'No runtime dependency',
  ]"
  :cons="[
    'No color control',
    'Pixelated on scaling',
    'Large amount of requests',
    'Flash of invisible icons',
    'Verbose to write',
    'Assets & paths management'
  ]"
/>

<!--
Let's start with the most straightforward solution: using the image tag. This was pretty much the only option in the early days of the web.

You'd host your image assets somewhere, [click] and then use an image tag to link to that image, specifying its width and height.

[click] Here are some examples from back in the day. Personally, I'm a big fan of pixel art and love this retro style.

[click] There are definitely some advantages to this approach. It's very simple, requires no setup or runtime dependencies, and works natively in browsers.

[click] However, there are also quite a few drawbacks. Images can become pixelated, meaning we don't have any color control and they don't scale well. Each icon being a separate image file results in many network requests, which could be slow, especially back in the days of HTTP 1.1. Before the image is downloaded, you might see a flash of invisible icons, which can hurt the user experience. Lastly, it's quite verbose to write, as you need to specify the full path of the image and manage the relative paths.

Given these downsides, it's no surprise that this approach is rarely used on websites today.
-->

---

# Solution 2: Web Fonts

<div grid="~ cols-2 gap-2">

<div flex="~ col gap-2">

<div op60>Font Awesome 4 for example:</div>

<div v-click>
SVG icons are converted to font glyphs and assigned a special unicode character for each icon.

Use CSS classes to apply the icon.
</div>

<v-click>
```html
<i class="fa fa-address-book-o" aria-hidden="true"></i>
```
</v-click>

</div>

<div text-sm v-click>

```css
/* font-awesome.css */
@font-face {
  font-family: 'FontAwesome';
  src: url('../fonts/fontawesome-webfont.eot?v=4.7.0');
}
.fa {
  font: normal normal normal 14px/1 FontAwesome;
}
/* class for each icon */
.fa-address-book-o:before {
  content: '\f2ba';
}
```
</div>

</div>

<ProsCons
  :pros="[
    'Easy to use',
    'Colorable',
    'Scalable, SVG based',
    'Single request',
  ]"
  :cons="[
    'Large font file, all icons loaded upfront',
    'Hard to customize',
    'Flash of invisible icons',
  ]"
/>

<!--
Then Web Fonts becomes the second solution. As fonts are by natural vectorized and colorable, it's soon be chosen to serve icons.

[click] Usually the iconset providers will compile their icons into a special font file, that assign a special unicode character to represnet each icon. Accompany with a CSS file to set the unicode value for each icon classes.

[click] The usage would be looked like this.

[click] Underneath, the CSS file would looks a bit like this. A common style selector, and then selectors for each icons to their assigned unicode value.

[click] The adventages of this approach is that it's easy to use, colorable, scalable, and only requires a single request to load all icons.

[click] However, the downside is that it requires a large font file to load all icons upfront, which can be slow. It's also hard to customize the icon set, and you might see a flash of invisible icons before the font is loaded because there are no fallback fonts.
-->

---

# Solution 3: Components

<div grid="~ cols-2 gap-4">

<div flex="~ col gap-1" v-click>

<div op50>
Example of using MDI icons:
</div>

```vue
<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiAccount } from '@mdi/js'
</script>

<template>
  <SvgIcon type="mdi" :path="mdiAccount" />
</template>
```

</div>

<div flex="~ col gap-1" v-click>

<div op50>
Example of using Tabler icons:
</div>

```vue
<script setup>
import { IconHome } from '@tabler/icons-vue'
</script>

<template>
  <IconHome />
</template>
```

</div>

</div>

<ProsCons
  :pros="[
    'Colorable, Scalable',
    'Full features of SVG',
    'No requests, no flash of invisible icons',
    'SSR friendly',
  ]"
  :cons="[
    'Creates a lot of SVG DOM elements',
    'Bundle size',
    'Requires specific integration support',
    'Vendor lock-in, hard to switch',
  ]"
/>

<!--
And then, with frontend frameworks comes to the game, reuse HTML elements because a lot easier. People came up with the idea of directly inline the SVG tags as component.

For iconsets to support this approach, they often comes with packages to provide their wrappers for each framework.

[click] For example, MDI icons use a shared component and provide icon data as a pros, while [click] Tablar icons provide component for each icon.

[click] Because they are SVGs, they are colorable, scalable, and have all the features of SVGs. Usually people bundles icon into the app, so there are no additional networks requests, and it's even SSR friendly and visible at the first render.

[click] However, the downsides are that it creates a lot of SVG DOM elements, which can hurt the performance when you have a lot of icons. It also increases the bundle size, and requires specific integration support for each icon set and framework combinations. This implies a level of vendor lock-in, making it hard to switch to another icon set or framework.

And to be fair, these trade-offs are already quite a good deal, many projects are using this approach today as you don't really switch icon sets or frameworks very often.
-->

---
glow: right
class: h-full
---

<div grid="~ cols-2" w-full h-full>
<div>

# Iconify <img src="/logo-iconify.svg" inline-block ml4 />

<div h-15 />
<v-clicks>

- One solution for all popular icon sets

- Unified collections of data for consuming
- 100+ icon sets, 200,000+ icons
- Iconify API for dynamic icons

</v-clicks>

<div v-click pt4>
  <a
    href="https://iconify.design/sponsors/"
    target="_blank"
    flex="~ inline gap-2 items-center"
    border="~ solid! rose/50! rounded-lg"
    text-rose
    hover="text-rose! bg-rose/10"
    class="group px2.5 py1 transition-all duration-200 ease-out no-underline! border-main rounded inline-block"
  >
    <div
    i-ph-heart-fill
      transition-all duration-200 ease-out
    />
    Sponsor Iconify
  </a>
</div>

</div>
<iframe v-click
  src="https://iconify.design/getting-started/"
  onload="this.style.visibility = 'visible';"
  scale-60 origin-top-right absolute right-0 top-0 bottom-0 w="90%" h="200%"
/>
</div>

<!--
Talking about vender lock-in, I'd like to bring up this open source project called Iconify.

[click] Iconify is a unified icon framework that provides a single solution for all popular icon sets.

[click] It offers a unified collection of data for consuming, [click] and supports over 100 open source icon sets with more than 200,000 icons.

[click] They even provides an server API for your to fetch icons dynamically. Any icon is just one request away.

The solutions we are going to talk later on are all built on top of it, meaning that you don't need to worries about the iconset support anymore and can switch to any iconset or even mix them with zero migration needed.

[click] Iconify really did the heavy lifting works underneath to collect and normalize all those icons, which I would invite you to sponsor Iconify on GitHub or Open Collective to support their work if you are benefit from its ecosystem.
-->

---

<div flex="~ gap-4 items-end">
<h1 class="m0!">Icônes</h1>
<a href="https://icones.js.org/" target="_blank" class="border-none! font-300" op50>icones.js.org</a>
</div>

<iframe src="https://icones.js.org/" class="w-185% absolute left-10 bottom-0 h-230 rounded-t-xl shadow" border="3 main" scale-50 origin-left-bottom />

<!--

Here I also made an icon explorer for Iconify called Icônes. You can browser all the icons from Iconify collection, copy or download them as ease. The URL is icon-e-s.js.org
-->

---

# Solution 4: Iconify Runtime

<div grid="~ cols-2 gap-14">
<div flex="~ col gap-2">
<div op75 v-click>Import the Iconify library on entry (or CDN):</div>
<div v-after>
```ts
import 'iconify-icon'
```
</div>

<div op75 v-click>Usage as Web Components:</div>
<div v-after>
```html
<iconify-icon icon="mdi:home"></iconify-icon>
```
</div>

<div op75 v-click>Upon usage, iconify will fetch the icon from their API to render it.</div>
</div>
</div>

<img v-after src="/screenshot-iconify.png" abs-tr w-110 top-25 right-14 bg-gray:5 border="~ main rounded" />

<ProsCons
  :pros="[
    'Support dynamic icons on-demand',
    'Does not require build setup',
    'Benfits of using SVG icons',
  ]"
  :cons="[
    'Runtime dependency',
    'Flash of invisible icons',
    'Requires cross site network requests',
    'Not SSR nor PWA friendly',
  ]"
/>

<!--
So back to the solutions we were talking about, Iconify also comes with it's own runtime solution. That you can simply [click] import the library and [click] use any icons as an web components.

[click] Under the hood, the component will send requests to the Iconify API, and the api will serve the needed icons from the massive icons collection.

[click] This is a great fit for rendering icons from user provided content or some other dynamic content that you don't know at build time. And it's super easy to setup, that you can even use it as a CDN without any build tools.

[click] The downsides are that it would add a runtime dependencies, that your icons will only renders after JavaScript is loaded and the icon get fetched. This also would not work for SSR and cache layers like PWA.
-->

---

# Solution 5: On-demand Components

Introduce of <Repo name="unplugin/unplugin-icons" hide-owner />

<div grid="~ cols-[1fr_1fr] gap-8">
<div v-click>

```vue
<script setup>
import IconAccessibility from '~icons/carbon/accessibility'
import IconAccountBox from '~icons/mdi/account-box'
// ...any icons, bundles on-demand
</script>

<template>
  <IconAccessibility />
  <IconAccountBox style="font-size: 2em; color: red" />
</template>
```

</div>
<UnpluginIconsExample v-click text-sm />
</div>

<ProsCons
  :pros="[
    'All benifits of using SVG icons',
    'Use any icons, and bundle for what you use',
    'Supports most of the popular frameworks',
    'Optional auto-import',
  ]"
  :cons="[
    'Creates a lot of SVG DOM elements',
    'Bundle size',
    'Only work for build-time known icons',
  ]"
/>

<!--
With the unified interface from Iconify, combining with Vite's on-demand approach, we made `unplugin-icons` that supports you to [click] import any icons on-demand as components.

Because it's an unplugin, it supports all popular build tools including Vite, webpack and rspack etc. We provide compiler for all popular frameworks like Vue, React, Svelte, Solid etc. And with Iconify, we make it possible to have one single solution for any framework to use any icons. [click] Estimate the vendor-lockin on your choices of icons.

So, because this is still fundentamally the same technique as the previous component icons solution. [click] We share the same pros and cons. The difference is that with build tools integrated, we are able to serve the full collections of Iconify while only ship the icons you actually used. [click] However, at runtime we still have the concern of DOM elements and so on.
-->

---

# Solution 6: Pure CSS Icons

Create icons with only CSS, with inline SVG as data URL

<div grid="~ cols-2 gap-5">

<div v-click>

```css
.i-ph-acorn-duotone {
  mask-image: url(data:...) no-repeat;
  mask-size: 100% 100%;
  background: currentColor;
  height: 1em;
  width: 1em;
}
```
```html
<div class="i-ph-acorn-duotone"></div>
```

</div>

<div grid="~ cols-[max-content_1fr] gap-x-4 gap-y-3" text-lg h-max v-click>
  <div text-sm op50 text-right>Carbon</div>
  <div flex="~ gap-1">
    <div i-carbon:chart-multitype />
    <div i-carbon:network-4 />
    <div i-carbon:wind-gusts />
    <div i-carbon:collaborate />
    <div i-carbon:character-decimal />
  </div>

  <div text-sm op50 text-right>Tabler</div>
  <div flex="~ gap-1">
    <div i-tabler:building-carousel />
    <div i-tabler:circle-square />
    <div i-tabler:cut />
    <div i-tabler:device-tablet />
    <div i-tabler:color-swatch from-red via-yellow to-green bg-gradient-to-r />
  </div>

  <div text-sm op50 text-right>Phosphor</div>
  <div flex="~ gap-1">
    <div i-ph:airplane-takeoff-duotone />
    <div i-ph:alien-duotone />
    <div i-ph:tree-view-duotone />
    <div i-ph:arrow-circle-left-duotone text-green />
    <div i-ph:umbrella-duotone text-blue />
  </div>

  <div text-sm op50 text-right>Twemoji</div>
  <div flex="~ gap-1">
    <div i-twemoji:grinning-face-with-smiling-eyes />
    <div i-twemoji:face-in-clouds />
    <div i-twemoji:weary-cat />
    <div i-twemoji:teacup-without-handle />
    <div i-twemoji:books />
  </div>

  <div text-sm op50 text-right>Catppuccin</div>
  <div flex="~ gap-1">
    <div i-catppuccin:javascript />
    <div i-catppuccin:vite />
    <div i-catppuccin:nuxt />
    <div i-catppuccin:unocss />
    <div i-catppuccin:eslint />
  </div>

  <div text-sm op50 text-right>Spinners</div>
  <div flex="~ gap-1">
    <div i-svg-spinners-180-ring-with-bg />
    <div i-svg-spinners-bars-rotate-fade />
    <div i-svg-spinners-bars-scale-fade />
    <div i-svg-spinners-pulse-3 />
    <div i-svg-spinners-blocks-shuffle-3 />
  </div>
</div>

</div>

<ProsCons
  :pros="[
    'Colorable, Scalable',
    'One DOM element per icon',
    'No requests, no flash of invisible icons',
    'Zero runtime',
    'SSR friendly',
  ]"
  :cons="[
    'Only work for build-time known icons',
    'Cannot change elements inside icons',
  ]"
/>

<!--
As a side-effect of creating UnoCSS, I discovered that it's possible to embed icons entirely in CSS, leading to the solution of Pure CSS Icons.

[click] This method inlines SVG icons as data URLs and provides a single class to display the icons. [click] With some tweaks, the icons become colorable, scalable, and even capable of displaying SVG animations.

[click] Browsers can cache the CSS rules, and each icon only requires one DOM element to render. This approach ships the icons in a single CSS file with no additional requests. Since it's pure CSS, the icons display along with the rest of your UI, require zero runtime, and work naturally with SSR - your server doesn't need any extra work on the  server side.

[click] The only downsides are the lack of full customization for elements inside the SVG and the need to bundle icons at build-time, which isn't dynamic.

I highly recommend this approach for most cases where you don't need to dynamically render user-provided icons. In my opinion, it's the most well-rounded solution so far. If you use UnoCSS, install the icon presets, and you will be able use this feature just like any other utility class.
-->

---
layout: center
glow: top
hide: true
---

<div grid="~ cols-[max-content_1fr] gap-18">

<div flex="~ col justify-center">

## Solutions

1. `<img>`
1. Web Fonts
1. Components
1. On-demand Components
1. Iconify Runtime
1. Pure CSS Icons

</div>

<div flex="~ col items-center justify-center">
  <img src="/meme-choice-both-1.png" class="w-120" v-click transition duration-400 :class="$clicks < 2 ? 'translate-y-20' : ''" />
  <img src="/meme-choice-both-2.png" class="w-120" v-click forward:delay-300 />
</div>
</div>

---

<h1 text-center flex="~ col gap-1 items-center" py5>
<div flex="~ gap-2 items-center" font-bold><div i-logos-nuxt-icon text-3xl /> Integrate Icons to Nuxt</div>
</h1>

<div grid="~ cols-[1fr_max-content_1fr] gap-8" px-10 mt4>

<div flex="~ col gap-6" py2 transition duration-500 :class="$clicks < 6 ? 'translate-x-55' : 'translate-x-20'">
  <div
    v-click
    op50 font-bold uppercase text-sm tracking-0.2em text-right
    transition duration-500 :class="$clicks < 6 ? 'translate-x--15' : ''"
  >Integrations Challenges</div>

  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-arrows-split-duotone text-red />
      <div>SSR / CSR</div>
    </div>
    <div text-sm op60>Seamlessly support both modes, no flashes</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-newspaper-duotone text-amber />
      <div>Dynamic Icons</div>
    </div>
    <div text-sm op60>Support dynamic known icons, e.g. from Nuxt Content</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-speedometer-duotone text-green />
      <div>Performant</div>
    </div>
    <div text-sm op60>No compromise on performance</div>
  </div>
  <div v-click flex="~ col gap-1">
    <div flex="~ gap-2">
      <div text-2xl i-ph-compass-tool-duotone text-blue />
      <div>Custom Icons</div>
    </div>
    <div text-sm op60>Support loading user-provided custom icons</div>
  </div>
</div>

<div w-1px h-full border="l main" translate-x-25 v-click />

<div flex="~ col gap-6" py2 translate-x-25>
  <div op50 font-bold uppercase text-sm tracking-0.2em v-after>Solutions</div>

  <div flex="~ col" mt4 v-click>
    <div>Iconify Runtime</div>
    <div flex="~ gap-1 items-center" text-green ml3>
      <div i-ph-check-duotone />
      Dynamic Icons
    </div>
    <div flex="~ gap-1 items-center" text-rose ml3>
      <div i-ph-x-duotone />
      No SSR
    </div>
     <div flex="~ gap-1 items-center" text-rose ml3>
      <div i-ph-x-duotone />
      No Custom Icons
    </div>
  </div>

  <div flex="~ col" v-click>
    <div>CSS Icons</div>
    <div flex="~ gap-1 items-center" text-green ml3>
      <div i-ph-check-duotone />
      SSR / CSR
    </div>
    <div flex="~ gap-1 items-center" text-green ml3>
      <div i-ph-check-duotone />
      Perfoment
    </div>
    <div flex="~ gap-1 items-center" text-rose ml3>
      <div i-ph-x-duotone />
      No Dynamic Icons
    </div>
  </div>
</div>

</div>

<!--
Finally, let's talk about Nuxt. Our goal with Nuxt is to provide seamless solutions that cover as many use cases as possible.

[click] Let's quickly go over the integration challenges we faced to make Nuxt Icon comprehensive.

[click] First, we need to support both SSR and CSR, as they are core features of Nuxt. We want to ensure that icons render without any flashes for the best user experience.

[click] We also want to support dynamic icons, such as those from Nuxt Content, allowing you to use icons from your content data.

[click] Performance is crucial, so we need to ensure that our solution doesn't compromise on speed.

[click] Lastly, we want to support custom icons. In addition to the thousands of icons from Iconify, users should be able to load their custom icons using the same syntax.

With these requirements in mind, [click] let's compare the solutions we discussed earlier.

[click] For dynamic icons, the Iconify Runtime seems to be the only option. However, it doesn't work perfectly with SSR and doesn't support custom icons, as the requests go to Iconify's servers, which aren't aware of our local setup.

[click] On the other hand, CSS Icons are performant and work well with SSR, but they don't support dynamic icons.

[pause a bit]
-->

---
layout: center
---

<div flex="~ col items-center justify-center">
  <img src="/meme-choice-both-1.png" class="w-130" transition duration-400 :class="$clicks < 1 ? 'translate-y-20' : ''" />
  <img src="/meme-choice-both-2.png" class="w-130" v-click forward:delay-300 />
</div>

<!--
So, which should we choose? That's tough as we seems to either option we are trading off something we need.

Ummm, so, [click] why don't we choose both?
-->

---

# Dual Rendering Modes

<div grid="~ cols-2 gap-10">
<div flex="~ col gap-2">

<div op75>CSS Mode</div>

```vue
<Icon mode="css" name="ph:arrow-down-duotone" />
```

<div i-ph:arrow-down-duotone mxa v-click />
<div v-after>

```vue
<div class="i-ph-arrow-down-duotone iconify"></div>
```

```css
.i-ph-arrow-down-duotone {
  mask-image: url(data:...) no-repeat;
  background: currentColor;
  /* ... */
}
```

</div>
</div>
<div flex="~ col gap-2">

<div op75>SVG Mode</div>

```vue
<Icon mode="svg" name="ph:arrow-down-duotone" />
```

<div i-ph:arrow-down-duotone mxa v-click />
<div v-after>

```html
<svg class="iconify" viewBox="0 0 24 24">
  <path d="M3 12h18M13 5l7 7-7 7"></path>
  <!-- ... -->
</svg>
```

</div>
</div>
</div>

<div absolute left-0 right-0 bottom-0 p14 flex>
  <div text-center mt10 text-orange bg-orange:10 rounded px4 p2 ma v-click>
  Both mode can be serialized on SSR with no runtime cost
  </div>
</div>

<!--
First, to ease out the trade-off of rendering approach, in Nuxt Icon, we provided an `<Icon>` component that supports both CSS and SVG Mode - both are SSR friendly. Deps on how much customize you need, you can switch between to mode per icon.

[click] For CSS Mode, the icon will ben included in the CSS from SSR.

[click] While for the SVG mode, the icon will be flatten as inlined HTML during SSR.

[click] Both approach allows icon to be rendered at the initial screen without runtime cost.
-->

---

# Bundles

<div grid="~ cols-3 gap-10">

<div flex="~ col gap-2" v-click="3" transition duration-500 :class="$clicks < 5 ? 'translate-x-35' : ''">

<div op75>Bundles to client</div>

<div border="y main" py2>
  <div flex="~ gap-2 items-center" text-green-2>
    <div i-ph-plus-circle-duotone text-green flex-none />
    No additional requests
  </div>
   <div flex="~ gap-2 items-center" text-green-2>
    <div i-ph-plus-circle-duotone text-green flex-none />
    Renders instantly
  </div>
  <div flex="~ gap-2 items-center" text-rose-2>
    <div i-ph-minus-circle-duotone text-rose flex-none  />
    Bundle size is a concern
  </div>
  <div flex="~ gap-2 items-center" text-rose-2>
    <div i-ph-minus-circle-duotone text-rose flex-none  />
    Only known icons
  </div>
</div>

<div v-click="4" flex="~ col gap-2" border="~ main rounded" p3 pt5 mt5 bg-yellow:10 relative>
  <div text-sm border="~ main rounded" bg-hex-33290a text-yellow5 absolute top--3 left-2 px2>Client Bundle</div>
  <div flex="~ gap-1">
    <div i-tabler:home />
    <div i-tabler:user />
    <div i-tabler:star />
    <div i-tabler:settings />
    <div i-tabler:inbox />
  </div>
</div>

<div op75 v-click="4">
Bundles only the static known icons on-demand
</div>

</div>

<div flex="~ col gap-2" v-click="5">

<div op75>Bundles to server</div>

<div border="y main" py2>
  <div flex="~ gap-2 items-center" text-green-2>
    <div i-ph-plus-circle-duotone text-green flex-none />
    Bundle size insensitive
  </div>
  <div flex="~ gap-2 items-center" text-green-2>
    <div i-ph-plus-circle-duotone text-green flex-none />
    Can include full icon sets
  </div>
  <div flex="~ gap-2 items-center" text-green-2>
    <div i-ph-plus-circle-duotone text-green flex-none />
    No requests when SSR
  </div>
</div>

<div v-click="6" flex="~ col gap-2" border="~ main rounded" p3 pt5 mt5 bg-green:10 relative>
  <div text-sm border="~ main rounded" bg-hex-183E2C text-green5 absolute top--3 left-2 px2>Server Bundle</div>
  <div flex="~ gap-1 wrap items-center">
    <div i-tabler:circle-square />
    <div i-tabler:home-star />
    <div i-tabler:square-root-2 />
    <div i-tabler:calendar-week />
    <div i-tabler:building-carousel />
    <div i-tabler:shield-chevron />
    <div i-tabler:cube />
    <div i-tabler:cut />
    <div i-tabler:device-tablet />
    <div i-tabler:device-watch />
    <div i-tabler:bleach />
    <div i-tabler:brush />
    <div i-tabler:inbox />
    <div i-tabler:building-estate />
    <div i-tabler:topology-star-3 />
    <div i-tabler:layout-grid-remove />
    <div i-tabler:device-sd-card />
    <div i-tabler:rotate-rectangle />
    <div i-tabler:photo-square-rounded />
    <div i-tabler:new-section />
    <div i-tabler:toggle-right />
    <div i-tabler:helicopter />
    <div i-tabler:planet />
    <div i-tabler:circuit-diode />
    <div i-tabler:eggs />
    <div i-tabler:lollipop />
    <div i-tabler:pointer-bolt />
    <div i-tabler:u-turn-left />
    <div i-tabler:yoga />
    <div i-tabler:home-share />
    <div i-tabler:sparkles />
    <div i-tabler:world-longitude />
    <div i-tabler:cylinder />
  </div>

  <div text-sm op75 text-right mb--1>... 1452+</div>
</div>

<div v-click="6" op75>
Bundles full sets for frequently used icons, serve on-demand via SSR or client requests
</div>

</div>

<div flex="~ col gap-2" v-click="1"  transition duration-500 :class="$clicks < 5 ? 'translate-x--35' : ''">

<div op75>Fetch from Iconify</div>

<div border="y main" py2>
  <div flex="~ gap-2 items-center" text-green-2>
    <div i-ph-plus-circle-duotone text-green flex-none />
    All icons on-demand
  </div>
  <div flex="~ gap-2 items-center" text-rose-2>
    <div i-ph-minus-circle-duotone text-rose flex-none  />
    Additional requests
  </div>
  <div flex="~ gap-2 items-center" text-rose-2>
    <div i-ph-minus-circle-duotone text-rose flex-none  />
    Servers can be far away
  </div>
</div>

<div v-click="2" flex="~ col gap-2" border="~ main rounded" p3 pt5 mt5 bg-blue:10 relative>
  <div text-sm border="~ main rounded" bg-hex-1C3F48 text-blue5 absolute top--3 left-2 px2>Iconify API</div>
  <div flex="~ gap-1 wrap items-center">
    <div i-catppuccin:phrase />
    <div i-ph:password-duotone />
    <div i-mdi:bluetooth />
    <div i-ph:cards-duotone />
    <div i-catppuccin:workflow />
    <div i-mdi:shape-plus />
    <div i-twemoji:person-light-skin-tone-curly-hair />
    <div i-carbon:button-flush-left />
    <div i-catppuccin:toml />
    <div i-tabler:square-rotated-off />
    <div i-tabler:sort-descending-2-filled />
    <div i-catppuccin:dhall />
    <div i-carbon:3rd-party-connected />
    <div i-ph:ladder-simple />
    <div i-ph:person-simple-hike-duotone />
    <div i-tabler:battery-vertical-charging-2 />
    <div i-carbon:baggage-claim />
    <div i-ph:arrow-elbow-right-down />
    <div i-ri:coupon-4-line />
    <div i-ph:video-conference-duotone />
    <div i-ph:pint-glass />
    <div i-mdi:angularjs />
    <div i-ri:rotate-lock-line />
    <div i-twemoji:fishing-pole />
    <div i-mdi:file-percent />
    <div i-ri:shield-keyhole-line />
    <div i-carbon:stop-outline-filled />
    <div i-catppuccin:huff />
    <div i-catppuccin:vue />
    <div i-carbon:misuse-alt />
    <div i-ri:survey-line />
    <div i-tabler:lifebuoy />
    <div i-mdi:land-rows-vertical />
    <div i-ph:bag-duotone />
    <div i-carbon:mac-option />
    <div i-mdi:video-input-antenna />
    <div i-catppuccin:vitest />
    <div i-carbon:boolean />
    <div i-carbon:websheet />
    <div i-ph:lock-simple-open-duotone />
    <div i-ph:dots-three-circle />
    <div i-twemoji:winking-face-with-tongue />
    <div i-ri:creative-commons-nd-line />
    <div i-ph:octagon />
    <div i-mdi:human-greeting-variant />
    <div i-catppuccin:audio />
    <div i-ri:sd-card-line />
    <div i-ri:star-smile-line />
    <div i-catppuccin:mjml />
    <div i-mdi:file-find />
    <div i-tabler:circle-letter-p-filled />
    <div i-carbon:trash-can />
    <div i-carbon:paint-brush-alt />
    <div i-carbon:router-wifi />
    <div i-catppuccin:css-map />
    <div i-carbon:category-new />
    <div i-twemoji:horse-racing-medium-dark-skin-tone />
    <div i-twemoji:keycap-6 />
    <div i-ri:ghost-smile-line />
    <div i-ri:voice-recognition-line />
    <div i-uim-briefcase />
    <div i-ri:remote-control-2-line />
    <div i-tabler:lock-down />
    <div i-carbon:login />
    <div i-carbon:model-reference />
    <div i-rivet-icons-shopping-cart />
  </div>
  <span italic op75 text-sm text-center mb--1>~~ Everything ~~</span>
</div>

<div op75 v-click="6">
Fallback to serve as many icons as possible
</div>

</div>

</div>

<!--
Let's talk about dynamic icons and how we can optimize their loading.

[click] For dynamic icons, we can use Iconify's API, [click] which serves any icon on demand via network requests. The downside is that these API servers might be far from your users, causing delays.

[click] To improve this, if we know certain icons will always be used, we can bundle them directly into the client. This way, they render instantly without additional requests. [click] However, we can only do this for statically known icons. Bundling all possible icons would make the bundle size too large.

Since Nuxt is a full-stack framework, [click] we can find a middle ground by introducing a server bundle. On the server side, bundle size is less of an issue, [click] so we can include more icon sets. During SSR, these icons can be fetched quickly and sent to the client on demand. With this setup, we can use the Iconify API as a final fallback, ensuring high performance for commonly used icons while still being able to serve any icon from Iconify.
-->

---
clicks: 7
---

# Data Flow

Load icons efficiently while supporting dynamic icons

<DataflowGraph mt-15 />

<!--
Let's walk through the data flow to make it clearer.

[click] Wen can provide the icon id to the Icon component to use it. [click] The component first checks if the icon is already server-rendered. If it is, we stop there since the icon is already present.

[click] If not, then we will look up the client bundle for it. Most static-known icons will be there, so we can render them directly.

[click] For dynamic icons that aren't in the client bundle, the component will request them from our server endpoint. This endpoint is usually deployed along with your app and close to end users. [click] The server looks for the requested icons in the server bundle and serves them back to client. [click] We have caching on both the browser and API endpoints, so once an icon is requested, subsequent requests are much faster.

[click] If the server can't find the icon in its bundle, it requests the icon from Iconify and forwards it to the client. In this case, caching is also applied to speed up future requests.

With all these steps, we can load icons efficiently while supporting dynamic icons.
-->

---
glow: right
---

<div grid="~ cols-2 gap-4" h-full>
<div flex="~ col gap-2 items-center justify-center">
  <img src="/nuxt-icon.png" mix-blend-lighten ma />
</div>

<div flex="~ col gap-2 justify-center">

```bash
pnpm i -D @nuxt/icon
```

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/icon'
  ]
})
```

```vue
<template>
  <Icon name="ph:arrow-down-duotone" />
</template>
```

</div>
</div>

<!--
So, that's the approach we've explored in Nuxt Icon v1.0. We believe we've found a balance that minimizes trade-offs, offering both a great user experience and flexibility.

Give it a try and let us know what you think! We're excited to hear your feedback!
-->

---
layout: center
class: 'text-center pb-5'
---

# Thank You!

Slides can be found on [antfu.me](https://antfu.me)
