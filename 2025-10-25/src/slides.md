---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: ja
title: Vite DevTools
notesAutoRuby:
  主な: おもな
  主に: おもに
  表示し: ひょうじ
  共通: きょうつう
  内蔵: ないぞう
  出力: しゅつりょく
  初期: しょき
  協調: きょうちょう
  可視化: かしか
  合致: がっち
  基盤: きばん
  広義: こうぎ
  抽出: ちゅうしゅつ
  抽象化: ちゅうしょうか
  拡張性: かくちょうせい
  探索: たんさく
  最適化: さいてきか
  柔軟性: じゅうなんせい
  検出: けんしゅつ
  構築: こうちく
  比較: ひかく
  洞察: どうさつ
  消費: しょうひ
  清聴: せいちょう
  狭義: きょうぎ
  異なる: ことなる
  示し: しめし
  積極的: せっきょくてき
  統合: とうごう
  視覚的: しかくてき
  貢献: こうけん
  重複: ちょうふく
  集合: しゅうごう
  非依存: ひいぞん
  摩擦: まさつ
  辛抱: しんぼう
  恩恵: おんえい
  動い: うごい
  野心: やせい
  分析: ぶんせ
  実行: じっこう
  単一: たんいつ
  統一: とういつ
  操作: そうさ
  指す: さす
  定義: ていぎ
  通常: つうじょう
  見通せる: みとおせる
  適応: てきおう
  変換: へんかん
  概要: がいよう
  焦点: しょうてん
  生成: せいせい
  前進: ぜんしん
  考慮: こうりょ
  既に: すでに
  見落: みおち
  避け: さけ
  同型的: どうけいてき
  基づ: もとづ
  表し: あらわし
  限定的: げんてーてき
  大多数: だいたすう
  常に: つねに
  Framework: フレームワーク
  発表し: ''
  結合: けつごう
  除け: のぞけ
  動作: どうさ
  疑似: ぎじ
  埋め: うめ
  検証: けんしょう
  実装: じっそう
  磨き上げ: みがきあげ
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
みなさん、こんにちは！今日の一日、お疲れ様です！

僕は日本に来て半年くらいで、前にはv-tokyoで日本語で登壇したことがありますが、このような大きな会場で日本語の登壇は初めてです。
すごく緊張してるので、間違えるかもしれませんが、頑張ります！

どうぞよろしくお願いします。
-->

---
layout: intro
class: pl-25
glowSeed: 14
---

<div text-5xl font-jp>アンソニ・傅</div>
<div op50 tracking-wide text-xl mt1>Anthony Fu</div>

<div class="[&>*]:important-leading-10 opacity-80 mt5">

Core Team {Vite} {Vue} {Nuxt}<br>
Creator {Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk}<br>
Maintainer {ESLint Stylistic} {Shiki} {Twoslash}<br>
Working at {NuxtLabs} / {Vercel}<br>

</div>

<div mt-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div ws-nowrap><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfujp</a><span op50 ws-nowrap text-sm w-max> (日本語)</span></div>
</div>

<img src="https://antfu.me/avatar.png" rounded-full absolute top-38 right-15 w-40 />

<!--
まずは自己紹介をさせてください。僕はAnthonyと申します。

Vite、Vue、Nuxtのコアメンバーとして活動していて、Vitest、Slidev、UnoCSS、VueUseなどのオープンソースプロジェクトを作りました。
また、ESLint Stylistic、Shiki、Twoslash のメンテナーもしています。NuxtLabsで働いていましたが、買収されて最近 Vercel になりました。

ちなみに、私は最近髪を切りまして、アイコンを更新しました。

僕のウェブサイト（antfu.me）やGitHubで見つけられますし、日本語用のTwitterアカウント（@antfujp）もあります。

さっそく本題に入りましょう。今日のトピックは...Vite DevToolsです！
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

<!--
皆さんも既にこのことについて話を聞いたことがあるかもしれませんが、今日は何を期待できるかについて詳しくご紹介します。
-->

---
layout: center
glowOpacity: 0
---

<img src="/vite-plus.png" w-280 mix-blend-lighten>

<!--
Vite Plus について聞いたことがあるかもしれませんが、これはJavaScript Ecosystem 向けの統一ツールチェーンを提供することを目指しています。

Viteから始まって、Rolldownとその基盤となるOxcを構築しています。これらは高速で一貫性のある Linting、Formatting、Bundling、Minifying を提供します。

Viteの上に、Vitest も Vite Plus Ecosystem の一部として統合する予定で、Node.js と Browser 環境の両方でテストができるようにします。

このような野心的な Roadmap があるため、より良い可視化と分析体験のために UI Tools も提供したいと思います。ここで Vite DevTools が登場します。
-->

---
zoom: 1.6
---

<div flex="~ col gap-2">
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>dev</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>build</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>test</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>lint</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>fmt</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>lib</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
</div>

<!--
もっと具体的な例で言うと、

開発サーバー用の `vite dev` と [click] Productionをビルドする `vite build` があるのは ご存知ですね。

[click] `vite test` も追加予定で、Vitestが動いて test suite を実行します。

[click] それからOxcが動く `vite lint` と [click] `vite fmt` もあって、ViteとRolldownと同じパーサーを使います。

[click] そして `tsdown` と Rolldown の上に構築された `vite lib` で library をビルドできるようになる予定です。

[click] Vite DevToolsについては、すべての subcommand で `--ui` flag として提供されて、各操作のUIを表示して内部構造を より理解しやすくします。
-->

---
layout: center
---

<h1 important-text-5xl font-jp>なぜ DevTools が必要なの？</h1>

<!--
最初に、なぜDevToolsが必要なのでしょうか？
-->

---
layout: none
class: h-full
---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">広義の Developer Tools</h2>

  <div text-2xl text-amber v-click="3">"開発者向けツール"</div>

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
      Vite 自体もデベロッパーツールです！
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">狭義の DevTools</h2>

  <div text-2xl text-lime v-click="5">"ツールをより良く使うためのツール"</div>

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
その前に、まず DevTools が 何なのか をお話ししましょう。

DevTools について話すとき、[click] 広義の Developer Toolsか、[click] 狭義の DevToolsのどちらかを指すことがあります。

僕は広義の Developer Tools を [click] 開発者向けのツールとして定義します。その意味で、日常的に使っている[click] Vite、Vitest、Vue、Nuxt などは全て Developer Tools です。

一方で、狭義の DevToolsについては、[click] ツールをより良く使う ための ツールを意味します。
例えば、[click] Chrome には内蔵の DevTools がありますし、Nuxt DevTools、Vue DevToolsなどもあります。

今日お話しするDevToolsは狭義を指しています。
-->

---
class: text-2xl
glow: right
---

# 良いツールの原則

<div grid="~ cols-[max-content_min-content_auto] items-center gap-x-10 gap-y-10" py10>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-stairs-duotone text-2xl />
    <span>入門しやすい</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>始めやすく、設定がシンプル、一言で説明できる</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div i-ph-book-bookmark-duotone text-2xl />
    <span>直感的な設計</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>ユーザーの期待と直感に合致、良いユーザー体験</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>透明性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>内部状態が透明、デバッグと最適化が簡単</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div i-ph-puzzle-piece-duotone text-2xl />
    <span>組み合わせ</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>分離されたモジュール、組み合わせと拡張が簡単</div>

  <div flex="~ gap-2 items-center" text-purple relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>拡張性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div text-lg v-after>柔軟なプラグインシステムとカスタマイズ</div>
</div>

<div absolute top-67 left-9 w-225 h-14 border="2 amber rounded-xl" bg-amber:10 z--1 v-click />

<!--
なぜツールを使う ための ツールを作っているの でしょうか？

良いツールを作る要素を考えてみると、僕は以下のポイントを挙げます。

１つ目は、[click] 入門しやすいことです。[click] 良いツールは、始めやすく、設定が簡単で、通常は一言で説明できるべきです。

次は [click] 直感的であることです。[click] 良いツールは、ユーザーの期待と直感に合致して、良い Developer 体験を作り、新機能を発見しやすくするべきです。

3つ目は[click] 透明性です。[click] ツールを使うとき、ユーザーがその仕組みと状態を知っている方が良いでしょう。何か問題が起きたとき、なぜ起きたかを調べて修正しやすくなります。

それから[click] 組み合わせの可能性にも考慮します。[click] 分離されたモジュールがあると、他のツールと組み合わせて拡張して、その力を最大限活用しやすくなります。

最後は[click] 拡張性です。[click] 一回限りの Script と違って、Software は異なるシナリオへ適応して処理できることを前提に設計します。柔軟な Plugin System と Customize 能力を持つ拡張性は、良い Software の非常に重要な側面の一つです。

そういうわけで、DevToolsを作っている理由は、僕たちのツールに素晴らしい[click] 透明性を提供して、ユーザーがツールをより理解し、内部状態を見通せるようにするためです。
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-5em>
  <span font-jp tracking-widest>透明性</span>
  <span op50 text-4xl mt--4>Transparency</span>
</div>

<!--
それでは透明性についてお話ししましょう。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-unocss />
  UnoCSS Inspector
</h3>

<img src="/devtools/uno-inspector.png" w-250 />

<!--
僕の DevTools の旅はUnoCSSから始まりました。ある CSS utility がなぜ含まれるのか不明だったため、Inspector を作りました。

これにより各ファイルがどのようにスキャンされ、リストに貢献するかが分かります。この透明性はエンジン構築をより 効率にしました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect.png" w-250 />

<!--
Vite Ecosystem の初期に、僕は Vite 用の Plugin をかなり作っていましたが、変換されたコードの内部状態を見るためにあちこちで console.log する必要があって、Debug がいつも面倒でした。そこで最終的にVite Plugin inspectというUIを作って、変換の内部構造を表示するようにしました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-vitest />
  Vitest UI
</h3>

<img src="/devtools/vitest-ui.png" w-250 />

<!--
それから Vitest 用の UI を作って、Status と各 Test Files の Module 関係を可視化しました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-imports.png" w-250 />

<!--
Nuxt DevTools は重要な Project で、Nuxtの内部状態を様々な側面で表示し、Nuxt Module が DevToolsに貢献するためのAPIも提供しています。これが実際に Vite DevTools の主な Inspiration 源です。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-files.png" w-250 />

<!--
それからESLint Config Inspectorも作って、ESLintの新しいflat configの関係を可視化しました。楽しい Side Project として始まって、後でESLintの公式ツールになりました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-graph.png" w-250 />

<!--
みんな node_modules の blackhole のジョークを聞いたことがありますか？その中に実際に 何があるのか 気になったことはありませんか？僕はすごく気になったので、Node Modules Inspector を作って、node_modules 内のすべての package の関係の完全なグラフを表示して、いじれるようにしました。もし興味があれば、ぜひ試すて見てくたさい。
-->

---
layout: center
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-120 />

<!--
これらすべてを通して、僕が示したいのは DevTools が多くの異なる側面で面白いということと、DevTools 構築への僕自身の旅を共有することです。

それでは、ついにVite DevToolsに何があるかを見てみましょう。
-->

---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/overview.png" w-120 />
<div flex="~ col gap-2 justify-center">

# ビルド概要

現在はビルドモードに集中<br>Rolldownの出力を消費して<br>

</div>
</div>

<!--
各ビルドについて、Vite DevToolsはどのくらいの Module がどのくらいの Plugin と一緒に Bundle されているかの簡単な概要を表示します。現在はまず Build mode に焦点を当てています。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/modules.png" w-140 />
<div flex="~ col gap-2 justify-center">

# Bundle List

バンドルに参加してるすべてのファイルを表示、<br>フィルタリングと検索機能を提供。

</div>
</div>

<!--
最初に知っていただきたいのは、Bundle にどれだけの Module が組み込まれているかです。自分のソースコード、npmパッケージ、Install-した Plugin から生成された仮想Moduleなど、すべてこのViewでリストされます。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/folders.png" w-155 mr--1 />
<div flex="~ col gap-2 justify-center">

# File Tree

ツリーでのバンドルファイルの表示

</div>
</div>

<!--
ツリーなどの異なるビューも提供しています。種類と Folder で group化できます。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/graph.png" w-180 />
<div flex="~ col gap-2 justify-center">

# Module<br>Graph

各モジュールの関係と<br>それがどのように<br>含まれたかを表示

</div>
</div>

<!--
または Graph View で、各 Module がどうやって、なぜ含まれたかを見て、その import 関係を知ることができます。
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
プロセス全体を追跡、ボトルネックと最適化を見つける
</div>

</div>
</div>

<!--
それから、各 module 内で、Parse, Resolve, Transform, Chunk, Bundle, Output などから module がどう処理されているかを見るために、変換と Bundling Flow 全体を表示します。これは Rolldown の完全な metadata を活用することで、以前の vite-plugin-inspect から大きな前進です。Plugin の bug を見つけたり、Chunking を最適化したりするのに役立ちます。
-->

---
class: text-center
---

# Code 変換比較

<img src="/vd/transform.png" w-240 mt--5 />

<!--
変換では、各 Plugin の process の前後を見ることができ、違いを highlightします。
-->

---
class: text-center
---

# Chunk 情報

<img src="/vd/chunk.png" w-210 mt--5 />

<!--
Chunking では、各 Chunk にどれだけの Module があるかを見ることができます。例えば、Entry Chunk が大きすぎない方が理想的です。
このページでは、Chunk が大きくなった理由を説明し、最適化の方法を紹介します。
-->

---

# Performance 消費 Chart <span text-lime font-mono bg-lime:10 px2 py1 rounded text-xs translate-y--6 inline-block>WIP</span>

<img src="/vd/chart.png" w-200 />

<!--
僕たちは、Performance も気にしています。この View は、その Module を処理するときに、各 Hook と各 Plugin がどれだけ時間を消費しているかを教えて、遅い Plugin を見つけて最適化できます。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/plugins.png" w-120 mt20 />
<div flex="~ col gap-2 justify-center">

# Plugins

実行順序でのすべてのプラグインのリスト

</div>
</div>

<!--
Plugin について話すと、これらは Vite が強力な Ecosystem を持つための重要な一部分ですが、Build Performance の bottleneck にもなりがちです。ここでは Build pipeline に参加しているすべての Plugin をリストして、それぞれを Click できます。
-->

---
class: text-center !pt10
---

# Plugin Hooks

<img src="/vd/plugins-details.png" w-300 mt--5 />

<!--
その中で、この Plugin が Hook をどう使って、Build Pipeline 全体にどう貢献しているかを見ることができます。どの Plugin がどの File で最も遅くなっているかを見るのは面白いかもしれません。将来的には、upstream に報告したり、Plugin 作者に知らせたりするために使える実行可能な提案も提供する予定です。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/chunks-list.png" w-150 />
<div flex="~ col gap-2 justify-center">

# Chunking

チャンクとファイルの関係

</div>
</div>

<!--
Chunking について、どのファイルが含まれているかと、各 Chunk 間の関係も可視化しています。
-->

---
class: text-center !pt10
---

# Bundled Packages

重複パッケージ検出付き

<img src="/vd/packages.png" w-300 mt--5 />

<!--
アプリの大部分は通常 3rd-Party の npm package から来ます。でも通常はアプリへの影響を見落としがちです。このページは Bundle に入ったすべての Package とその Bundle Size をリストします。そして最も重要なのは、version を表示して、異なる version の重複 package があるときに教えてくれることです。一般的にいうを、これは避けたいことです。
-->

---
class: text-center !pt10
---

# Packages Size Graph

<img src="/vd/packages-size.png" w-300 mt--5 />

<!--
Package Size について、Package 作者に Package がどれだけ小さいかを言わせてはいけません。Tree-shaking が起こると、Size は使用状況に基づいて変わるからです。Vite DevToolsでは、実際の使用に基づいた依存関係の Size の視覚的表現があります。
-->

---
class: text-center
layout: center
---

<div text-2.5em op50>Vite DevTools とは</div>
<div text-3.5em font-jp>可視化 <span font-800 text-rose>だけ</span> ではありません</div>

<!--
そういうわけで、Vite DevToolsは内部データの可視化だけではないことも 申し上げたかったのです。
-->

---

<div font-serif text-2.5em mt-8 >フレームワーク非依存</div>
<div mb-20 op50 text-1.5em>Framework Agnostic</div>

<ul>
  <li v-click my8>ユーザーの関心から遠い（低レベルすぎる）</li>

  <li v-click="3" my8>すべてのフレームワークの「共通部分」</li>

  <li v-click="4" my8>「拡張可能」である必要もある</li>
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
今お話ししたUIについて考えてみると、それらが必要になることはあまりないかもしれませんし、日常的な開発には少し高度すぎるかもしれません。

[click] それは、Vite は Framework に依存しないツールだからです。依存しないというのは、使っている Framework を知らないし、知るべきではないということです。これはViteに現代の Framework の Infra になるための大きな柔軟性と拡張性を与えますが、Viteが実際のViteユーザーに近い興味深い情報を提示するのを難しくします。例えば、アプリの状態など。

[click] 右の図を見てみると、各円が特定の Framework や統合を表していると想像してください。依存しないということは、Vite DevToolsは[click] すべての Framework の共通部分にしかなれないということです。これはかなり限定的で、大多数のユーザーにとって常に有用とは限りません。

[click] だから次にお話しするのは拡張性です。興味深い、Framework 固有の情報をユーザーに提供するために、Framework がそうするための能力を提供する必要があります。
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-5em>
  <span font-jp tracking-widest>拡張性</span>
  <span op50 text-4xl mt--4>Extensibility</span>
</div>

<!--
拡張性はViteをこんにちのViteにした最も重要な要因の一つだと思います。Vite DevToolsでも同じことをしない理由はありません。
-->

---
clicks: 19
---

<DevToolsKit />

<!--
このスライドは2年前に Vue Fes を発表した時のもので、DevTools Kit と呼ばれる DevTools 構築のための共有 interface の Idea を描いています。

目的は、module 化された、組み合わせ可能な、協調的な DevTools Ecosystem を作ることです。

[click] 例えば、一般的で他の Framework に結合されていない機能があります。[click] それから Vite Plus Ecosystem からの機能があって、Vitest や[click] Linting や Formatting などの Oxc 関連ツールがあります。
[click] Frontend では、SEO、Accessibility、PWA などの一般的な Web 関連情報もあります。

[click] Framework 固有機能と言って、Vue を例にすると、Component、Reactivity、<ruby>Router<rt>ルーター</rt></ruby>などを可視化する UI があります。[click] さらに進むと、Nuxt DevTools みたいの、Nuxt 固有の可視化も提供します。

[click] その意味で、React 用、[click] Svelte 用、[click] Solid 用、[click] Qwik 用、[click] Astro 用などのツールもあるかもしれません。

[click] それから 3rd Party ツール統合もあります。

これらすべての Block を、ニーズに基づいて簡単に組み合わせることができます。例えば、[click] Vue と Nuxt の機能をすべて取れば、Nuxt DevTools ができます。[click] Nuxt 固有の部分を除けば、Vue DevTools ができます。[click] 同様に、同じ Infra の下で他の framework 用の DevTools も簡単に[click] [click] [click] 作ることができます。[click] そして最終的に、Project の特定のニーズに基づいて Customize して、自分の DevTools を持つことができるかもしれません。
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
DevTools Kit の元の企画は様々な理由で中止になりました。主に、どれだけの人が採用するか確信がなかったからです。

でも今回は違います。Vite 用の DevTools を構築しているから、準備ができたら、Vite の上に構築されたすべての framework が摩擦なく自然に恩恵を受けることになります。

[click] だから DevTools Kit の Vision を Vite DevTools に持ってきています。DevTools 作者達に共通 Pattern に移行するよう求める代わりに、今は Vite 用の Plugin を構築するだけです。
-->

---

<div grid="~ cols-[3fr_4fr] gap-4">

<div>

<div font-serif text-2em my6>Vite DevTools Plugin</div>

<v-clicks>

- Vite Pluginの上位集合

- 追加の`devtools`フック経由

- 内蔵 RPC レイヤー

- 内蔵同型ビューホスティング
  - 埋め込みフローティングパネル

  - ブラウザ拡張
  - スタンドアロンWebページ
  - デプロイ可能 SPA

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
Vite DevTools Plugin がどう見えるかを簡単に見てみましょう。

一般的に、Vite DevTools Plugin は [click] Vite Pluginの上位集合で、特別なことをする必要はなく、[click] Plugin に `devtools` を追加するだけで動作します。右のは疑似コードです。まだ何も確定していなくて、大きく変わるかもしれません。

[click] Vite DevTools は Plugin 作者が server と client 間でより簡単に拡張と通信できるように、内蔵 RPC レイヤーを提供します。

[click] ユーザーが devtools を消費する方法を決められるようにもしたいと思います。Vite DevTools では、Nuxt DevTools のような埋め込み Floating Panel、Browser DevTools で表示される Browser 拡張、Standalone Web Page、現在のデータの snapshot としての Deploy 可能 SPA などをサポートする予定です。Vite DevTools はこれらを同型的にサポートするための抽象化レイヤーを提供します。

（次は Demo）
-->

---
layout: 'none'
class: 'flex h-full'
---

<SlidevVideo autoplay controls muted loop ma w="90%" rounded border="~ main">
  <source src="/vd/docks-demo.mp4" type="video/mp4" />
</SlidevVideo>

<!--
こんな感じに見えます。一般的に、すべての統合の Entrypoint となる Dock-like な UI を提供します。各統合について、各 DevTools UI を rendering する Frame を提供するか、Custom Rendering や Script 実行もできます。ここは Vitest、Nuxt DevTools、UnoCSS を統合した PoC です。将来的には、Plugin API の能力を検証しながら、より多くの DevTool 作者達と協力して Vite DevTools に持ってくる予定です。
-->

---

<h1 font-serif text-4xl>目標と展望</h1>

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:chart-donut-duotone text-teal mb2 />
    <div>可視化</div>
    <div text-xs op50>Vite/Rolldownの内部状態とプロセスを表示</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>分析と提案</div>
    <div text-xs op50>ビルドとプラグインの提案と最適化ソリューションを提供</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph-chart-line-up-duotone text-yellow mb2 />
    <div>ビルド比較</div>
    <div text-xs op50>コミット間のビルド結果を比較・追跡</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:bug-beetle-duotone text-red mb2 />
    <div>ビルドスナップショット</div>
    <div text-xs op50>ビルドプロセスを記録、共有可能で分析可能な再現</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:stack-plus-duotone text-purple mb2 />
    <div>Vite Plus</div>
    <div text-xs op50>Vitest UI、Oxlint 可視化などを統合</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:circles-three-plus-duotone text-blue mb2 />
    <div>DevTools Kit</div>
    <div text-xs op50>統一 DevTools アーキテクチャ、上位フレームワークが拡張を提供可能</div>
  </div>
</div>

<!--
より広い視点で、Vite DevTools の目標は、より良い透明性を提供し、ecosystem がさらに探索できるようにすることです。

[click] 内蔵で、Vite の内部の可視化、[click] ビルドと Plugin Pipeline の分析と実行可能な提案、[click] アプリが時間とともにどう変化するかを見るための複数 commit 間の build 比較、[click] 再現として Build Metadata を共有するための Build Snapshot などを提供します。

[click] それから Vitest UI や Oxlint などの公式 Vite Plus 統合、[click] 最終的にこの infra の上に構築してさらに興味深い use-case を作るための Plugin 作者向け DevTools Kit があります。
-->

---
class: p0
glow: bottom
---

<div class="grid grid-cols-[3fr_4fr] gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <img src="/vite-devtools.png" w-80 />
    <div text-orange text-sm bg-orange:10 px2 rounded>今開発中</div>
  </div>

  <div border="l main" h-full py10 flex="~ col gap-6 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>モジュール分析</div>
        <div op65 text-sm>
          各ファイルの各プラグインのロードと変換結果を表示
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>バンドル可視化</div>
        <div op65 text-sm>
          各ファイルの依存関係とバンドル構成を表示
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>バンドル分析</div>
        <div op65 text-sm>
          ビルドサイズ、最適化提案などを表示
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>DevTools Kit</div>
        <div op65 text-sm>
          拡張可能 DevTools アーキテクチャ
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>開発モード</div>
        <div op65 text-sm>
          フルバンドルモードを待機中
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-3xl ml--4.5 flex-none />
      <div flex="~ col gap-1">
        <div text-xl>統合</div>
        <div op65 text-sm>
          フレームワークと協力して DevTools 体験を統一
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Vite DevTools の Scope はかなり大きくなって、予想より少し時間がかかっています。

現在は[click] かなり多くの[click] 可視化を実装しています。

それから[click] バンドル分析のより多くの洞察を得るために作業を続けています。Rolldownチームと密接に協力しています。[click] DevTools Kit の baseline は動作していて、Nuxt DevTools を Vite DevToolsに移植する Prototype も既に動作していますが、やるべき磨き上げと書くべき Document がたくさんあります。

[click] 現在、Vite DevToolsのコアUIは Building のみに集中していて、開発モードをサポートするために Vite Full Bundle Mode の Roll out を待っています。

[click] 最終的に、長期的には、Ecosystem と協力して努力をまとめ、みんながこのシステムから恩恵を受けられるようにしたいと思います。

要するに、残念ながらVite DevToolsはまだこの時点では使えませんが、積極的に作業しています。もう少しお待ちください。
-->

---
class: text-center
transition: view-transition
---

<h1 font-serif text-4xl mt-20 important-mb-16>感謝</h1>

<div flex="~ gap-18 items-center justify-center" >
  <div flex="~ col items-center" v-click>
    <img src="/avatars/webfansplz.png" rounded-full w-30 mb4 view-transition-contributor-webfansplz duration-1000 />
    <div>Arlo</div>
    <div font-mono text-sm op50>@webfansplz</div>
  </div>

  <div flex="~ col items-center" v-after>
    <img src="/avatars/Akryum.png" rounded-full w-30 mb4 view-transition-contributor-akryum duration-1000 />
    <div>Guillaume Chau</div>
    <div font-mono text-sm op50>@Akryum</div>
  </div>

  <div flex="~ col items-center" v-after>
    <img src="/avatars/hyf0.png" rounded-full w-30 mb4 view-transition-contributor-hyf0 duration-1000 />
    <div>Yunfei He</div>
    <div font-mono text-sm op50>@hyf0</div>
  </div>

  <div flex="~ col items-center" v-after>
    <img src="/avatars/atinux.png" rounded-full w-30 mb4 view-transition-contributor-atinux duration-1000 />
    <div>Sébastien Chopin</div>
    <div font-mono text-sm op50>@Atinux</div>
  </div>
</div>

<!--
最後に、Arloさん、Guillaumeさん、Yunfeiさん、Sébastienさんに、今日のVite DevToolsを可能にした彼らのアイデアと貢献に感謝したいと思います。
-->

---

<Contributors />

<!--
Vite DevTools、Nuxt DevTools、Vue DevToolsに以前貢献してくれたすべての貢献者にも感謝します。ありがとうございます！

また、僕たちに参加して手伝ってくれるよう招待したいと思います！
-->

---
layout: center
---

<div scale-200>
  <Repo name="vitejs/devtools"  />
</div>

<!--
ソースコードは`vitejs/devtools`リポジトリにあります。

Ecosystem 全体と協力して、さらに良いツールを探索・構築する方法を本当に楽しみにしています。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-jp important-text-3em>ご清聴ありがとうございました</h1>

スライドは [antfu.me](https://antfu.me) で見つけられます

<!--
以上です。

ご清聴ありがとうございました
-->
