---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
lang: ja
glowSeed: 4
title: Vue と WebComponents で作る Agnostic UI
addons:
  - slidev-addon-graph
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!-- 

みなさん、こんばんは！

実は、今日は僕にとって初めての日本語での登壇です。

たくさん間違えるかもしれませんが、どうか温かく見守っていただけると嬉しいです。

どうぞよろしくお願いいたします。
-->

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

# 背景ストーリー

Nuxt DevTools Floating Panel

<div grid="~ cols-[1.4fr_max-content_1fr] gap-8 items-center justify-center" mt-10>

  <div v-click flex="~ col gap-4 items-center">
    <span text-green text-xl>希望のUI</span>
    <img src="/expected.png" alt="Expected" shadow-2xl w-100 shadow-none border="~ main rounded-lg" />
  </div>

  <div i-ph-caret-right text-xl v-click="2" />

  <div flex="~ col gap-4 items-center" v-click>
    <span text-orange text-xl>ユーザーが実際に見るUI</span>
    <img src="/broken-1.png" alt="Broken 1" shadow-2xl w-60 shadow-none border="~ main rounded-lg" />
    <img src="/broken-2.png" alt="Broken 2" shadow-2xl w-60 shadow-none border="~ main rounded-lg" />
  </div>

</div>

---

# スタイルの隔離

- Nuxt DevTools のような埋め込みコンポーネントにとって、スタイルの隔離は重要です

- 異なるUIコンポーネントは同じウェブページとCSSセレクターを共有します

- 場合によっては、スタイルが互いに干渉する可能性があります

- 幸いなことに、Vueにはこれに対する組み込みの解決策があります：`<style scoped>`

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
  <div v-click flex="~ col gap-4 " p4 rounded-xl bg-green:15 text-green1 border="~ green:30">
    <div text-5xl i-mdi-checkbox-blank-circle-outline inline-block text-green />
    <div>内部の CSS の漏洩を防ぐ </div>
  </div>
  <div v-click flex="~ col gap-4 " p4 rounded-xl bg-orange:15 text-orange1 border="~ orange:30">
    <div text-5xl i-mdi-selection-ellipse-arrow-inside inline-block text-orange />
    <div>外部の CSS の侵入は<span class="text-orange">防げない</span></div>
  </div>
</div>

<v-clicks>

- すべてのコンポーネントが scoped なプロジェクトには最適

- 親スタイルを制御できない、埋め込みプロジェクトには最適ではない


</v-clicks>

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
Shadow DOM は、WebComponents の最大の特徴と思います。

Shadow DOMは、サブツリーをメインドキュメントツリー上の単一の要素のように動作させるものです。
内部では複雑なDOMツリーを持つことができますが、メインドキュメントツリーからは隔離されています。

Shadow DOM により、真のスタイル隔離を実現することができます。

Because WebComponents is the only way to create a shadow DOM, we have to use it.
-->

---
class: p0!
---

<script lang="ts" setup>
import { watch } from 'vue'

watch(() => $clicks.value, (val) => {
  const el = document.getElementById('counter-element')
  if (el) {
    if (val === 1) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }
    else if (val === 0) {
      el.scrollTo({ top: 0, behavior: 'instant' })
    }
  }
}, { immediate: true })
</script>

<div grid="~ cols-2 gap-8" h-full>

<div relative h-full of-hidden>

<div :class="$clicks > 1 ? 'blur-1 op85' : ''" p4 transition-all h-full of-auto id="counter-element">

```ts
class CounterElement extends HTMLElement {
  constructor() {
    super();
    this.count = 0;

    // Attach a shadow DOM tree to this element.
    this.attachShadow({ mode: 'open' });

    // Initial render
    this.render();
  }

  // Increment the counter
  increment() {
    this.count++;
    this.render();
  }

  // Render the template
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          font-size: 1.2em;
          padding: 0.5em 1em;
        }
        span {
          margin-left: 1em;
          font-weight: bold;
        }
      </style>
      <button id="increment">Increment</button>
      <span>${this.count}</span>
    `;

    // Set up the event listener again after re-render
    this.shadowRoot.querySelector('#increment').onclick = () => this.increment();
  }
}

// Define the custom element
customElements.define('counter-element', CounterElement);
```

</div>

<div v-click="2" absolute inset-0 text-3em flex lang="ja" font-jp>
  <div h-140 w-1 border="l-3 red5 op50" absolute left="1/2" top="0" rotate-30 />
  <div h-140 w-1 border="l-3 red5 op50" absolute left="1/2" top="0" rotate--30 />
  <div ma rotate--10 text-red5 text-shadow>
    めんどくさい！
  </div>
</div>

</div>

<div py10 pr8 v-click="3" flex="~ col gap-2">

# Developer Experience

WebComponents を使わざるを得ないとしても、最高の開発者体験を**維持したい**

<span  i-logos-vue inline-block mb--0.5 /><span text-green> Vue SFC</span> と <span i-logos-unocss brightness-150 inline-block  mb--0.5 /><span text-pink> UnoCSS</span> を使いたい！

```vue [Counter.vue]
<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++" class="border border-gray-300 rounded-md p-2">
    Increment
  </button>
  <span>{{ count }}</span>
</template>
```

</div>
</div>

---

# Setup

1. Wrap Vue SFC as WebComponents
2. Configure bundler using `unplugin-vue`
3. Construct UnoCSS styles

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

登壇資料は [antfu.me](https://antfu.me) で公開しています

<!--
以上です。登壇資料は antfu.me で公開しています。

ありがとうございます！
-->
