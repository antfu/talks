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
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
class: pl-25
glowSeed: 14
---

<h1 font-serif>アンソニ・傅</h1>
<div font-serif>Anthony Fu</div>

<div class="[&>*]:important-leading-10 opacity-80">

コアチームメンバー {Vite} {Vue} {Nuxt}<br>
作者 {Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk}<br>
メンテナー {ESLint Stylistic} {Shiki} {Twoslash}<br>
働いています {NuxtLabs} / {Vercel}<br>

</div>

<div mt-10 w-min flex="~ gap-1" items-center justify-center>
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

<!--
...

今日のトピックは、さっそく本題に入りましょう。話すのは...
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

---
layout: center
glowOpacity: 0
---

<img src="/vite-plus.png" w-280 mix-blend-lighten>

<!--
Vite Plusプランについて聞いたことがあるかもしれませんが、これはJavaScriptエコシステム向けの統一ツールチェーンを提供することを目指しています。

Viteから始まって、Rolldownとその基盤となるOxcを構築しています。これらは高速で一貫性のあるリンティング、フォーマッティング、バンドリング、ミニファイを提供します。

Viteの上に、VitestもVite Plusエコシステムの一部として統合する予定で、Node.jsとブラウザ環境の両方でテストができるようにします。

このような野心的なロードマップがあるため、より良い可視化と分析体験のためにUIデベロッパーツールも提供したいと思います。ここでVite DevToolsが登場します。
-->

---
zoom: 1.6
---

<div flex="~ col gap-2">
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>dev</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>build</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>test</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>lint</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>format</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
<pre v-click class="shiki shiki-themes vitesse-dark vitesse-light slidev-code"><code><span op50>$ </span><span class="text-purple3!">vite</span> <span op75>lib</span></code> <span v-click="6" class="text-yellow!">--ui</span></pre>
</div>

<!--
もっと具体的な例で言うと、

開発サーバー用の`vite dev`とプロダクションバンドルをビルドする`vite build`があるのはご存知ですね。

[click] `vite test`も追加予定で、Vitestが動いてテストスイートを実行します。

[click] それからOxcが動く`vite lint`と`vite format`もあって、ViteとRolldownと同じパーサーを使います。

[click] そして`tsdown`とRolldownの上に構築された`vite lib`でライブラリをビルドできるようになるかもしれません。

[click] このような感じで続きます。お話しした通り、目標はJavaScriptエコシステム向けに信じられないパフォーマンスを持つ単一の統一ツールチェーンを提供することです。

[click] Vite DevToolsについては、すべてのサブコマンドで`--ui`フラグとして提供されて、各操作のUIインターフェースを表示して内部構造をより理解しやすくします。
-->

---
layout: center
---

<h1 important-text-5xl font-serif>なぜDevToolsが必要なの？</h1>

<!-- まず最初に、なぜDevToolsが必要なのでしょうか？ -->

---
layout: none
class: h-full
---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">一般的なデベロッパーツール</h2>

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
      Vite自体もデベロッパーツールです！
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">特別なDevTools</h2>

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
なぜ必要かお話しする前に、まずDevToolsが**何なのか**をお話ししましょう。

DevToolsについて話すとき、[click] 一般的なデベロッパーツールか、[click] 特別な意味でのDevToolsのどちらかを指すことがあります。

僕は一般的なデベロッパーツールを[click] 開発者向けのツールとして定義します。その意味で、日常的に使っている[click] Vite、Vitest、Vue、Nuxtなどは全てデベロッパーツールです。

一方で、特別なDevToolsについては、通常[click] ツールをより良く使うためのツールを意味します。
例えば、[click] Chromeには内蔵のDevToolsがありますし、Nuxt DevTools、Vue DevToolsなどもあります。

今日お話しするDevToolsは全て後者を指しています。
-->

---
class: text-2xl
glow: right
---

# 良いツールの原則

<div grid="~ cols-[max-content_min-content_auto] items-center gap-x-10 gap-y-10" py10>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-stairs-duotone text-2xl />
    <span>参入障壁</span>
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

<div absolute top-67 left-9 w-225 h-15 border="2 amber rounded-xl" bg-amber:10 z--1 v-click />

<!--
なぜツールを使うためのツールを作っているのでしょうか？

良いツールを作る要素を考えてみると、僕は以下のポイントを挙げます。

最初は[click] 参入障壁で、[click] 良いツールは始めやすく、設定が簡単で、通常は一言で説明できるべきです。

次は[click] 直感的で、[click] ユーザーの期待と直感に合致して、良いデベロッパー体験を作り、新機能を発見しやすくするべきです。

3つ目に選ぶのは[click] 透明性で、[click] ツールを使うとき、ユーザーがその仕組みと状態を知っている方が良いです。何か問題が起きたら、なぜ起きたかを調べて修正しやすくなります。

それから[click] 組み合わせ可能性で、[click] 分離されたモジュールがあると、他のツールと組み合わせて拡張して、その力を最大限活用しやすくなります。

最後に選ぶのは[click] 拡張性で、[click] ソフトウェアを一回限りのスクリプトと違うものにするのは、ソフトウェアが異なるシナリオに適応して処理することを意図していることです。柔軟なプラグインシステムとカスタマイズ能力を持つ拡張性は、良いソフトウェアの非常に重要な側面の一つです。

そういうわけで、DevToolsを作っている理由は、僕たちのツールに素晴らしい[click] 透明性を提供して、ユーザーがツールをより理解し、内部状態を見通せるようにするためです。
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>透明性</span>
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
僕のDevTools構築の個人的な旅はUnoCSSから始まりました。UnoCSSはコードベースに基づいてオンデマンドでCSSユーティリティを生成するため、作業している時に困ったのは、なぜあるユーティリティが含まれて、別のものが含まれないのかが分からないことでした。そこでこのインスペクターを作って、各ファイルがどうスキャンされて、ユーティリティリストにどう貢献するかを表示するようにしました。この種の透明性は、より効率的で正確にエンジンを構築するのに役立ちました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect.png" w-250 />

<!--
Viteエコシステムの初期に、僕はVite用のプラグインをかなり作っていましたが、変換されたコードの内部状態を見るためにあちこちでconsole.logする必要があって、デバッグがいつも面倒でした。そこで最終的にVite Plugin inspectというUIを作って、変換の内部構造を表示するようにしました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-vitest />
  Vitest UI
</h3>

<img src="/devtools/vitest-ui.png" w-250 />

<!--
それからVitest用のUIを作って、ステータスと各テストファイルのモジュール関係を可視化しました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-imports.png" w-250 />

<!--
Nuxt DevToolsは重要なプロジェクトで、Nuxtの内部状態を様々な側面で表示し、NuxtモジュールがDevToolsに貢献するためのAPIも提供しています。これが実際にVite DevToolsの主なインスピレーション源です。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-files.png" w-250 />

<!--
それからESLint Config Inspectorも作って、ESLintの新しいflat configの関係を可視化しました。楽しいサイドプロジェクトとして始まって、後でESLintの公式ツールになりました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-graph.png" w-250 />

<!--
node_modulesのブラックホールのジョークを聞いたことがあるかもしれませんが、その中に実際に何があるのか気になったことはありませんか？僕は気になったので、Node Modules Inspectorを作って、node_modules内のすべてのパッケージの関係の完全なグラフを表示して、いじれるようにしました。
-->

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-sunbrust.png" w-250 />

<!--
各パッケージがnode_modulesにどう貢献したかも、並べて表示できます。
-->

---
layout: center
glow: bottom
class: text-center
---

<img src="/vite-devtools.png" w-120 />

<!--
これらすべてを通して、僕が示したいのはDevToolsが多くの異なる側面で面白いということと、DevTools構築への僕自身の旅を共有することです。

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
Vite DevToolsについては、現在Rolldownの出力データを消費してRolldown Viteのビルドモードに集中しています。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/modules.png" w-140 />
<div flex="~ col gap-2 justify-center">

# バンドルファイルリスト

バンドルに参加してるすべてのファイルを表示、<br>フィルタリングと検索機能を提供。

</div>
</div>

<!--
最初に知っていただきたいのは、バンドルにどれだけのモジュールが組み込まれているかです。自分のソースコード、npmパッケージ、インストールしたプラグインから生成された仮想モジュールなど、どれでも。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/folders.png" w-180 />
<div flex="~ col gap-2 justify-center">

# ファイルツリー

ツリービューでのバンドルファイル

</div>
</div>

<!--
ツリーなどの異なるビューも提供しています。タイプとフォルダでグループ化できます。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/graph.png" w-180 />
<div flex="~ col gap-2 justify-center">

# モジュール<br>関係グラフ

</div>
</div>

<!--
またはグラフビューで、各モジュールがどう、なぜ含まれたかを見て、インポート関係を知ることができます。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center">
<img src="/vd/flow.png" w-100 />
<div flex="~ col gap-2 justify-center">

# モジュール変換フロー

<div op50>
Parse <span op50>→</span> Resolve <span op50>→</span> Transform <span op50>→</span> Chunk <span op50>→</span> Bundle <span op50>→</span> Output
</div>

<div op50 mt5>
プロセス全体を追跡、ボトルネックと最適化を見つける
</div>

</div>
</div>

<!--
それから、各モジュール内で、ソースコード、ID解決、変換、チャンキング、ツリーシェイキング、バンドリングなどからモジュールがどう処理されているかを見るために、変換とバンドリングフロー全体を表示します。これはRolldownの完全なメタデータを活用することで、以前のvite-plugin-inspectから大きな前進です。プラグインのバグを見つけたり、チャンキングを最適化したりするのに役立ちます。
-->

---
class: text-center
---

# コード変換比較

<img src="/vd/transform.png" w-240 mt--5 />

<!--
変換では、各プラグインのプロセスの前後を見ることができ、違いをハイライトします。
-->

---
class: text-center
---

# チャンク情報

<img src="/vd/chunk.png" w-210 mt--5 />

<!--
チャンキングでは、各チャンクにどれだけのモジュールがあるかを見ることができます。例えば、理想的には、エントリーチャンクが大きすぎない方が良いです。すべてのページで読み込まれる必要があるからです。このページでは、チャンクが大きくなった理由を説明し、最適化の方法をガイダンスします。
-->

---

# パフォーマンス消費チャート <span text-lime font-mono bg-lime:10 px2 py1 rounded text-xs translate-y--6 inline-block>WIP</span>

<img src="/vd/chart.png" w-200 />

<!--
パフォーマンスも気にしています。このテーブルは、そのモジュールを処理するときに、各フックと各プラグインがどれだけ時間を消費しているかを教えて、遅いプラグインを見つけて最適化できます。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/plugins.png" w-120 mt20 />
<div flex="~ col gap-2 justify-center">

# プラグイン

実行順序でのすべてのプラグインのリスト

</div>
</div>

<!--
プラグインについて話すと、これらはViteがそんなに強力なエコシステムを持つための重要なコンポーネントですが、ビルドパフォーマンスのボトルネックにもなりがちです。ここではビルドパイプラインに参加しているすべてのプラグインをリストして、それぞれをクリックできます。
-->

---
class: text-center !pt10
---

# プラグインフック

<img src="/vd/plugins-details.png" w-300 mt--5 />

<!--
その中で、このプラグインがフックをどう使って、ビルドパイプライン全体にどう貢献しているかを見ることができます。どのプラグインがどのファイルで最も遅くなっているかを見るのは面白いかもしれません。将来的には、アップストリームに報告したり、プラグイン作者に知らせたりするために使える実行可能な提案も提供する予定です。
-->

---
class: important-p0
---

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/chunks-list.png" w-150 />
<div flex="~ col gap-2 justify-center">

# チャンキング

チャンクとファイルの関係

</div>
</div>

<!--
チャンキングについて、どのファイルが含まれているかと、各チャンク間の関係も可視化しています。
-->

---
class: text-center !pt10
---

# バンドルされたパッケージ

重複パッケージ検出付き

<img src="/vd/packages.png" w-300 mt--5 />

<!--
アプリの大部分は通常サードパーティのnpmパッケージから来ます。でも通常はアプリへの影響を見落としがちです。このタブはバンドルに入ったすべてのパッケージとそのバンドルサイズをリストします。そして最も重要なのは、バージョンを表示して、異なるバージョンの重複パッケージがあるときに教えてくれることです。これは避けたいことです。
-->

---
class: text-center !pt10
---

# パッケージサイズグラフ

<img src="/vd/packages-size.png" w-300 mt--5 />

<!--
パッケージサイズについて、パッケージ作者にパッケージがどれだけ小さいかを言わせてはいけません。ツリーシェイキングが起こると、サイズは使用状況に基づいて変わるからです。Vite DevToolsでは、実際の使用に基づいた依存関係のサイズの視覚的表現があります。
-->

---
class: text-center
layout: center
---

<div text-2.5em op50>Vite DevToolsは</div>
<div text-3em><span font-serif font-800>可視化だけ</span>じゃない</div>

<!--
そういうわけで、Vite DevToolsは内部データの可視化だけではないことも申し上げたかったのです。
-->

---

<div font-serif text-5xl my-10 mb-20>フレームワーク非依存</div>

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

[click] これは実際に完全に理にかなっています。Viteはフレームワーク非依存のツールだからです。非依存というのは、使っているフレームワークを知らないし、知るべきではないということです。これはViteに現代のフレームワークのインフラになるための大きな柔軟性と拡張性を与えますが、Viteが実際のViteユーザーに近い興味深い情報を提示するのを難しくもします。例えば、作っているアプリや使っているフレームワークの状態など。

[click] 右のグラフを見てみると、各円が特定のフレームワークや統合を表していると想像してください。非依存であるということは、Vite DevToolsは[click] すべてのフレームワークの共通部分にしかなれないということです。これはかなり限定的で、大多数のユーザーには常に有用とは限りません。

[click] だから次にお話しするのは拡張性です。興味深い、フレームワーク固有の情報をユーザーに提供するために、フレームワークがそうするための能力を提供する必要があります。
-->

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <span font-serif>拡張性</span>
</div>

<!--
拡張性はViteを今日のViteにした最も重要な要因の一つだと思います。Vite DevToolsでも同じことをしない理由はありません。
-->

---
clicks: 19
---

<DevToolsKit />

<!--
以前のトークを見たことがあるなら、これは約2年前にNuxt DevToolsを発表した時に作ったスライドで、[click] DevTools Kitと呼ばれるDevTools構築のための共有インターフェースのアイデアを描いています。

[click] アイデアは、モジュール化された、組み合わせ可能な、協調的なDevToolsエコシステムを作ることです。

[click] 例えば、一般的で他のフレームワークに結合されていない機能があることは知っています。[click] それからVite Plusエコシステムからの機能があって、Vitestや[click] リンティングやフォーマッティングなどのOxc関連ツールがあります。
[click] フロントエンドに行くと、SEO、アクセシビリティ、PWAなどの一般的なWeb関連情報もあるかもしれません。

[click] フレームワーク固有に行くと、Vueを例にすると、コンポーネント、リアクティビティ、ルーターなどを可視化するUIがあるかもしれません。[click] さらに進むと、Nuxt固有の可視化も提供するNuxtのようなメタフレームワークもあります。

[click] その意味で、React用、[click] Svelte用、[click] Solid用、[click] Qwik用などのツールもあるかもしれません。

[click] それからツール統合もあるかもしれません。

これらすべてのブロックがプラグ可能な拡張だと考えれば、ニーズに基づいて簡単に組み合わせることができます。例えば、[click] VueとNuxtの機能をすべて取れば、Nuxt DevToolsができます。[click] Nuxt固有の部分を除けば、Vite DevToolsができます。[click] 同様に、同じインフラの下で他のフレームワーク用のDevToolsも簡単に[click] [click] [click] 作ることができます。そして最終的に、プロジェクトの特定のニーズに基づいてカスタマイズして、[click] 自分のDevToolsを持つことができるかもしれません。
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
DevTools Kitの元のアイデアは様々な理由で中止になりました。主に、どれだけの人が採用するか確信がなかったからです。

でも今回は違います。Vite用のDevToolsを構築しているから、準備ができたら、Viteの上に構築されたすべてのフレームワークが摩擦なく自然に恩恵を受けることになります。

[click] だからDevTools KitのビジョンをVite DevToolsに持ってきています。DevTools作者に共通パターンに移行するよう求める代わりに、今はVite用のプラグインを構築するだけです。
-->

---

<div grid="~ cols-[3fr_4fr] gap-4">

<div>

<div font-serif text-2em my6>Vite DevTools Plugin</div>

<v-clicks>

- Vite Pluginの上位集合

- 追加の`devtools`フック経由

- 内蔵RPCレイヤー

- 内蔵同型ビューホスティング
  - 埋め込みフローティングパネル
  
  - ブラウザ拡張
  - スタンドアロンWebページ
  - デプロイ可能SPA

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
Vite DevTools Pluginがどう見えるかを簡単に見てみましょう。

一般的に、Vite DevToolsプラグインは[click] Vite Pluginの上位集合で、特別なことをする必要はなく、[click] プラグインに`devtools`フックを追加するだけで動作します。右のコードはそれをどうするかの疑似コードスニペットです。実際にすでに動作していますが、疑似と呼んだ理由は、まだ何も確定していなくて、インターフェースを探索中で、大きく変わるかもしれないからです。

[click] Vite DevToolsはプラグイン作者がサーバーとクライアント間でより簡単に拡張と通信できるように、内蔵RPC（リモートプロシージャコール）レイヤーを提供します。

[click] ユーザーがdevtoolsを消費する方法を決められるようにもしたいと思います。Vite DevToolsでは、Nuxt DevToolsのような埋め込みフローティングパネル、ブラウザDevToolsで表示されるブラウザ拡張、スタンドアロンWebページ、現在のデータのスナップショットとしてのデプロイ可能SPAなどをサポートする予定です。Vite DevToolsはこれらのシナリオを同型的にサポートするための抽象化レイヤーを提供します。

（次はデモビデオ）
-->

---
layout: 'none'
class: 'flex h-full'
---

<SlidevVideo autoplay controls muted ma w="90%" rounded border="~ main">
  <source src="/vd/docks-demo.mp4" type="video/mp4" />
</SlidevVideo>

<!--

それでは、こんな感じに見えます。一般的に、すべての統合のエントリーポイントとなるドックライクなUIを提供します。各統合について、各DevTools UIをレンダリングするフレームを提供するか、カスタムレンダラーやスクリプト実行もできます。ここはVitest、Nuxt DevTools、UnoCSSを統合したクイックPoCです。将来的には、プラグインAPIの能力を検証しながら、より多くのDevTool作者と協力してVite DevToolsに持ってくる予定です。

-->

---

<h1 font-serif text-4xl>目標とビジョン</h1>

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
    <div text-xs op50>Vitest UI、Oxlint可視化などを統合</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:circles-three-plus-duotone text-blue mb2 />
    <div>DevTools Kit</div>
    <div text-xs op50>統一DevToolsアーキテクチャ、上位フレームワークが拡張を提供可能</div>
  </div>
</div>

<!--
より広い視点で、Vite DevToolsの目標とビジョンは、より良い透明性を提供し、エコシステムがさらに探索できるようにすることです。

[click] 内蔵で、Viteの内部の可視化、[click] ビルドとプラグインパイプラインの分析と実行可能な提案、[click] アプリが時間とともにどう変化するかを見るための複数コミット間のビルド比較、[click] 再現としてビルドメタデータを共有するためのデプロイ可能SPAでのビルドスナップショットなどを提供します。

[click] それからVitest UIやOxlintなどの第一者Vite Plus統合、[click] 最終的にこのインフラの上に構築してさらに興味深いユースケースを作るためのプラグイン作者向けDevTools Kitがあります。
-->

---
class: p0
glow: bottom
---

<div class="grid grid-cols-[3fr_4fr] gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <img src="/vite-devtools.png" w-80 />
    <div text-orange text-sm bg-orange:10 px2 rounded>進捗</div>
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
          拡張可能DevToolsアーキテクチャ
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
          フレームワークと協力してDevTools体験を統一
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Vite DevToolsのスコープはかなり大きくなって、予想より少し時間がかかっています。

現在は[click] かなり多くの[click] 可視化を実装しています。前に話した通りです。

それから[click] バンドル分析のより多くの洞察を得るために作業を続けています。Rolldownチームと密接に協力しています。[click] DevTools Kitのベースラインは動作していて、Nuxt DevToolsをVite DevToolsに移植するプロトタイプも既に動作していますが、やるべき磨き上げと書くべきドキュメントがたくさんあります。

[click] 現在、Vite DevToolsのコアUIはビルドモードのみに集中していて、開発モードをサポートするためにViteフルバンドルモードのロールアウトを待っています。

[click] 最終的に、長期的には、エコシステムと協力して努力をまとめ、みんながこのシステムから恩恵を受けられるようにしたいと思います。

要するに、残念ながらVite DevToolsはまだこの時点では使えませんが、積極的に作業しています。辛抱強くお待ちください。準備ができたら試せるようにお知らせします！
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

  <div flex="~ col items-center" v-click>
    <img src="/avatars/Akryum.png" rounded-full w-30 mb4 view-transition-contributor-akryum duration-1000 />
    <div>Guillaume Chau</div>
    <div font-mono text-sm op50>@Akryum</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="/avatars/hyf0.png" rounded-full w-30 mb4 view-transition-contributor-hyf0 duration-1000 />
    <div>Yunfei He</div>
    <div font-mono text-sm op50>@hyf0</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="/avatars/atinux.png" rounded-full w-30 mb4 view-transition-contributor-atinux duration-1000 />
    <div>Sébastien Chopin</div>
    <div font-mono text-sm op50>@Atinux</div>
  </div>
</div>

<!--
最後に、[click] Vite DevToolsの開発にたくさん手伝ってくれたArloに感謝したいと思います；[click] Vue DevToolsとテストフレームワークUIでの以前の仕事でとてもインスピレーションを与えてくれて、DevToolsのアイデアを一緒にブレインストーミングしてプロトタイプしてくれたGuillaumeに感謝します；[click] それからVite DevToolsを可能にしたAPIを提供するためにRolldown側で調整してくれたYunFeiに感謝します；[click] Nuxt DevToolsのアイデアを種まきして、それを構築するのにたくさん投資して、今はViteのために投資してくれたSebastienに大感謝します。
-->

---

<Contributors />

<!--
Vite DevTools、Nuxt DevTools、Vue DevToolsに以前貢献してくれたすべての貢献者にも感謝します。みんなの貢献とアイデアが今日Vite DevToolsを構築することを可能にしました。ありがとうございます！

また、僕たちに参加して手伝ってくれるよう招待したいと思います！
-->

---
layout: center
---

<div scale-200>
  <Repo name="vitejs/devtools"  />
</div>

<!--
ソースコードは`vitejs/devtools`リポジトリにあります。チェックしてください！同時にたくさんのことが進行中で圧倒されるかもしれませんが、その間に貢献ガイドとドキュメントを改善して、より良い貢献ができるようにするつもりです。

エコシステム全体と協力して、さらに良いツールを探索・構築する方法を本当に楽しみにしています。

ありがとうございます！
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

<h1 font-serif important-text-5em>ありがとう</h1>

スライドは[antfu.me](https://antfu.me)で利用可能
