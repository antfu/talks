---
layout: cover
title: Introduction to Vitest
highlighter: shiki
colorSchema: dark
---

<div class="flex gap-8 px-10 justify-center scale-120 transform">

<img src="/logo.svg" class="h-32" />

<div>
<h1>
<div class="text-2xl opacity-30">Introduction to</div>
<div class="text-6xl">Vitest</div>
</h1>

<p text="lg" class="!leading-8 !opacity-50 !-mt-4" font="italic serif light">
A blazing fast test runner powered by Vite
</p>
</div>

</div>

<div class="abs-br mx-10 my-8 flex">
  <div class="ml-3 flex flex-col text-right gap-1">
    <img src="https://vuejsnation.com/images/logo.svg" text="3xl" opacity="70"/>
    <div class="text-sm opacity-50">Jan. 26th, 2022</div>
  </div>
</div>

---
layout: 'intro'
disabled: true
---

<h1 text="!5xl">Anthony Fu</h1>

<div class="leading-8 opacity-80">
Vue & Vite core team member.<br>
Creator of Slidev, VueUse, Vitesse, Type Challenges, etc.<br>
Fanatical open sourceror. Working at <a href="https://nuxtlabs.com" target="_blank">NuxtLabs</a>.<br>
</div>

<div class="my-10 grid grid-cols-[40px,1fr] w-min gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/antfu" target="_blank">antfu</a></div>
  <ri-twitter-line class="opacity-50"/>
  <div><a href="https://twitter.com/antfu7" target="_blank">antfu7</a></div>
  <ri-user-3-line class="opacity-50"/>
  <div><a href="https://antfu.me" target="_blank">antfu.me</a></div>
</div>

<img src="https://antfu.me/avatar.png" class="rounded-full w-40 abs-tr mt-30 mr-20"/>

---
layout: center
---

# Yet another test runner?

---
class: 'grid grid-cols-2'
---

<div>

# <logos-vitejs/> Vite

<v-clicks>

- No bundle & on-demand

- Browser's Native ESM

- Custom plugins & hooks (async)

</v-clicks>
</div>
<div>

<div v-click>

# <logos-jest/> Jest

</div>

<v-clicks>

- Bundle-based

- Lack of native ESM support

- Lack of async resolving and transformation support

- Duplication of efforts

</v-clicks>

<div class="pt-5" v-click>

# <logos-mocha/> Mocha &nbsp;<logos-jasmine/> Jasmine

</div>

<v-clicks>

- Lack of integrations like Snapshot and Mocking

</v-clicks>
</div>

---

# <img src="/logo.svg" class="h-12 inline -mt-4" /> Vitest

<v-clicks>

- [Vite](https://vitejs.dev/)'s config, transformers, resolvers, and plugins.

- Use the same setup from your app
- ESM first, top level await
- Out-of-box TypeScript / JSX support
- [Smart & instant watch mode](#watch-mode), like HMR for tests!
- Jest compatible: Expect, Snapshot, Mocking, Spy, etc.
- [Native code coverage](#coverage) via [c8](https://github.com/bcoe/c8)
- [JSDOM](https://github.com/jsdom/jsdom) and [happy-dom](https://github.com/capricorn86/happy-dom) for DOM and browser API mocking
- Components testing (Vue, React, Svelte, Lit, etc.)

</v-clicks>

---

# Getting Started

<div class="flex flex-col gap-2 w-100">

<Card url="vitest.dev">
<template #icon>
<CarbonDocumentAttachment/>
</template>
Documentation
</Card>


<Card url="github.com/vitest-dev/vitest">
<template #icon>
<CarbonLogoGithub/>
</template>
GitHub
</Card>

<Card url="chat.vitest.dev">
<template #icon>
<CarbonLogoDiscord/>
</template>
Discord
</Card>

</div>

---

## Team

<img src="/team.png"/>

<div class="mt-5"/>

## Contributors

<div class="contributors mt-5 flex flex-wrap gap-1 justify-center"><a href="https://github.com/antfu"><img src="https://github.com/antfu.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/sheremet-va"><img src="https://github.com/sheremet-va.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/patak-dev"><img src="https://github.com/patak-dev.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/Aslemammad"><img src="https://github.com/Aslemammad.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/userquin"><img src="https://github.com/userquin.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/DerYeger"><img src="https://github.com/DerYeger.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/Demivan"><img src="https://github.com/Demivan.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/edimitchel"><img src="https://github.com/edimitchel.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/Saul-Mirone"><img src="https://github.com/Saul-Mirone.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/11joselu"><img src="https://github.com/11joselu.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/dammy001"><img src="https://github.com/dammy001.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/tony-go"><img src="https://github.com/tony-go.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/wtchnm"><img src="https://github.com/wtchnm.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/cexbrayat"><img src="https://github.com/cexbrayat.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/dominikg"><img src="https://github.com/dominikg.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/mitchelvanbever"><img src="https://github.com/mitchelvanbever.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/tigerabrodi"><img src="https://github.com/tigerabrodi.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/horacioh"><img src="https://github.com/horacioh.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/LeonardSSH"><img src="https://github.com/LeonardSSH.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/sachinraja"><img src="https://github.com/sachinraja.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/cawa-93"><img src="https://github.com/cawa-93.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/Monkatraz"><img src="https://github.com/Monkatraz.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/sudongyuer"><img src="https://github.com/sudongyuer.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/hannoeru"><img src="https://github.com/hannoeru.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/JakeGinnivan"><img src="https://github.com/JakeGinnivan.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/JoostK"><img src="https://github.com/JoostK.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/PuruVJ"><img src="https://github.com/PuruVJ.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/aleclarson"><img src="https://github.com/aleclarson.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/CyriacBr"><img src="https://github.com/CyriacBr.png" class="rounded-full h-10 w-10"></a><a href="https://github.com/christianhg"><img src="https://github.com/christianhg.png" class="rounded-full h-10 w-10"></a></div>

---
layout: center
class: 'text-center pb-5'
---

# Thank You!

Slides can be found on [antfu.me](https://antfu.me)
