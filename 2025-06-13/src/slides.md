---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
title: Vue と WebComponents で作る Agnostic UI
addons:
  - slidev-addon-graph
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-25
---

# Anthony Fu<span font-jp lang="ja">・アンソニ</span>

<div class="[&>*]:important-leading-10 opacity-80">

Core team member of {Vite} {Vue} and {Nuxt}<br>
Creator of {Vitest} {Slidev} {Type Challenges} {UnoCSS} {VueUse}<br>
Maintainer of {ESLint Stylistic} {Shiki} {Twoslash}<br>
Working at {NuxtLabs}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-bluesky-line op50 ma text-xl ml4 />
  <div><a href="https://bsky.app/profile/antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div ws-nowrap><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfujp</a><span op50 ws-nowrap text-sm w-max> (日本語)</span></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full w-35 abs-tr mt-32 mr-22 />

<div flex="~ gap2">

</div>

<!--
まずは自己紹介をさせてください。僕はAnthonyと申します。Vite、Vue、Nuxtのコアメンバーとして活動しており、Vitest、Slidev、Type Challenges、UnoCSS、VueUseなどのオープンソースプロジェクトを作りました。
また、ESLint Stylistic、Shiki、Twoslashのメンテナーもしています。今はNuxtLabsで働いています。

僕のウェブサイト（antfu.me）やGitHubで 見つけられ ますし、日本語用のTwitterアカウント（@antfujp）もあります。
-->

---
layout: cover
---

<h1 flex="~ col">
<div mt1 forward:delay-300 text-white:50 ml10 flex="~ col">
  <span v-click flex="~ gap-2 items-center" text-green>
    Vue と
  </span>
  <span v-click flex="~ gap-2 items-center" text-blue>
    WebComponents で
  </span>
  <span v-click flex="~ gap-2 items-center" text-violet>
    作る Agnostic UI
  </span>
</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col items-end" text-right v-click="3">
  <img src="/v-tokyo.png" alt="v-tokyo" w18 mb1 />
  <div>v-tokyo #23</div>
  <div text-xs opacity-75>June 13, 2025</div>
</div>

---

# 目標


---

# Style Isolation スタイルの隔離

---

# `<style scoped>` の原理

<div grid="~ cols-[1fr_max-content_1fr] gap-4">

```vue [source.vue]
<template>
  <div class="parent">
    <div class="child">
      <p>Hello</p>
    </div>
  </div>
</template>

<style scoped>
.parent {
  color: red;
}
.parent .child {
  color: blue;
}
</style>
```

<div h-full flex>
  <div i-ph-caret-right ma />
</div>

<div>

```html [rendered.html]
<div data-v-7ba5bd90 class="parent">
  <div data-v-7ba5bd90 class="child">
    <p data-v-7ba5bd90>Hello</p>
  </div>
</div>
```

```css [rendered.css]
.parent[data-v-7ba5bd90] {
  color: red;
}
.parent .child[data-v-7ba5bd90] {
  color: blue;
}
```

</div>

</div>

--- 

# `<style scoped>` の問題点 


<div grid="~ cols-2 gap-2" py4>
  <div v-click flex="~ col gap-4 " p4 rounded bg-green:15 text-green1>
    <div text-5xl i-mdi-checkbox-blank-circle-outline inline-block text-green />
    <div>内部の CSS の漏洩を防ぐ </div>
  </div>
  <div v-click flex="~ col gap-4 " p4 rounded bg-rose:15 text-rose1>
    <div text-5xl i-mdi-selection-ellipse-arrow-inside inline-block text-rose />
    <div>外部の CSS の侵入は<span class="text-rose">防げない</span></div>
  </div>
</div>

<v-clicks>

- すべてのコンポーネントが scoped なプロジェクトには最適

- 親スタイルを制御できない、embedded なプロジェクトには最適ではない


</v-clicks>

---
layout: fact
---

# 解決策


---
layout: fact
---

# WebComponents

---
layout: fact
---

# ?!?!

<!--

-->

---


<img src="/wc-rich.png" alt="Why I don't use web components" op75 border="~ main rounded-lg" shadow-2xl w-150 absolute left-5 top-10 />
<img src="/wc-lea.png" alt="The failed promise of Web Components" op75 border="~ main rounded-lg" shadow-2xl w-100 absolute left-8 top-68 />
<img src="/wc-mayank.png" alt="WebComponents considered harmful" border="~ main rounded-lg" shadow-2xl w-120 absolute left-100 top-98 />
<img src="/wc-ryan.png" alt="WebComponents Are Not the Future" border="~ main rounded-lg" shadow-2xl w-150 absolute left-90 top-45 />

<!--

有名な開発者たちが書いたこういう投稿、見たことがあるかもしれません。

例えば、Svelte の作者の Rich Harris は、なんで WebComponents を使わないか説明してた。

また、Solid の作者の Ryan Carniato は、"WebComponents は未来ではない" と言っています。

その他にも、たくさんの開発者が WebComponents に対して否定的な意見を述べています。

それらの投稿では、WebComponents の設計上の欠陥を指摘しています。
もし興味がある方は、ぜひ読んでみてください。

私も実は彼らに同意しています。

しかし、それらの話は今日のテーマではありません。

欠点があっても、今日も WebComponents を紹介したいと思います。

どうして WebComponents を使うのか？

それは、Shadow DOM のおかげです。
-->

---

# Shadow DOM

Shadow DOM は、WebComponents の最大の特徴です

<img src="/shadow-dom.png" alt="Shadow DOM" shadow-2xl w-150 shadow-none />

<!--


-->

--- 

# Style Isolation

---

# Developer Experience

WebComponents を使わざるを得ないとしても、最高の開発者体験を維持したい

Vue SFC と UnoCSS を使ってスタイリングしたい



---

# Setup

---

# Template




---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 lang="ja" font-jp text-4xl>
ありがとうございます！
</h1>

Slides available at [antfu.me](https://antfu.me)

<!--
That's all for my talk today. You can find the slides on my website antfu.me.

ありがとうございます！ このあとのカンファレンスもお楽しみください。
-->
