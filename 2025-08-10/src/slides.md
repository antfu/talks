---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Yak Shaving
remoteAssets: true
description: Anthony 的開源發展心路歷程。想法與專案的發想過程，以及如何在開源社群中找到自己的定位與方向。幫助你更好的理解與參與開源。
addons:
  - slidev-addon-graph
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-30
---

# Anthony Fu

<div class="[&>*]:important-leading-10 opacity-80">

{Vite} {Vue} {Nuxt} 核心團隊成員<br>
{Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk} 作者<br>
{ESLint Stylistic} {Shiki} {Twoslash} 維護者<br>

<p v-click>

就職於 {NuxtLabs} / {Vercel}<br>
播客 {尖不想寫扣}

</p>

<div flex="~ gap-1" items-center v-click>
廈門 <div i-ri-arrow-right-line /> 台北 <div i-ri-arrow-right-line /> 上海 <div i-ri-arrow-right-line /> 巴黎 <div i-ri-arrow-right-line /> 東京
</div>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center v-click>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-bluesky-line op50 ma text-xl ml4/>
  <div><a href="https://bsky.app/antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
</div>

<img src="https://antfu.me/avatar.png" absolute top-36 right-30 w-40 rounded-full />

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
      <span>Anthony 的開源之路</span>
      <sup v-click="2" text-lg op75 mb2 ml--0.5>之三</sup>
    </div>
    <div text-xl>
      <span v-click op50>Anthony's Roads to </span>
      <span
        inline-block transition duration-500
        :class="$clicks === 0 ? 'scale-150 translate-y--5 translate-x-8' : 'op75'"
      >Open Source </span>
      <sup v-click op50 ml2>3/n</sup>
    </div>
  </div>
</div>
<h1 mt1>
  <span v-click forward:delay-300>Yak Shaving</span>
  <span v-click>「薅牛毛」</span>
</h1>

<img src="/coscup.svg" h-20 absolute bottom-16 right-8 v-click="2" />

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left v-click="2">
  <div text-xs opacity-75 mt--4>August 10th, 2025</div>
</div>

<!--
參與開源這幾年來，我必須說開源是一件非常有趣且富有回報的事情。我相信在座很多人都想要參與開源，亦或是已經參與其中了。然而，有很多因素會影響一個開源專案能否 "成功" —— 當然這也取決於你怎麼定義成功。例如，想法的實用性、實作方式、程式碼品質、文件、社群、行銷等等。所有這些都很重要，而且互相關聯。很遺憾，每個專案都有自己發展的方式，並沒有一個所謂萬金油公式能保證一個專案的成功。

[click] 所以在這裡，我想分享一些我在建立和維護開源專案的一些經驗和想法，結合一些觀察社群中的觀察。

希望這些可以幫助你開始自己的開源之旅，或者找到一些新的想法來改進你現有的專案。

開源也是一個非常大的話題，我無法在一個演講中覆蓋所有內容。所以我試圖將其分解，並在每次演講中討論開源的不同面向，並將它們組成一個系列。

[click] 今天的主題是這個系列的第三期，讓我們談談 [click] Yak Shaving。

[click] 這裡我把它翻譯成了「薅牛毛」，等下我會解釋一下這個詞的來源和含義。
-->

---

<div grid="~ cols-2 gap-10" mt4>

<div>
<div op50 font-serif italic mb--1>Part I</div>
<h2><span op75>The Set Theory</span><br>集合論</h2>
<img src="/part1-the-set-theory.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

<div>
<div op50 font-serif italic mb--1>Part II</div>
<h2><span op75>The Progressive Path</span><br>漸進之路</h2>
<img src="/part2-progressive.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

</div>

<div mt-14 text-xl text-center v-click>

回放請見 [antfu.me](https://antfu.me)

</div>

---
layout: fact
---

# 什麼是「薅牛毛」？{.important-text-3em}

Yak Shaving

---
class: flex justify-center items-center gap-20 px40 text-xl
glow: bottom
---

<div transition duration-500 :class="$clicks === 0 ? 'translate-x-26 translate-y-20' : ''">

# Yak{.important-text-3em}

<div v-click forward:delay-600>

<div font-serif op75 text-2xl mb2>/jak/</div>

<div op50 italic text-base>a type of cattle with <br>long hair and long horns</div>

牦牛；犛牛

</div>
</div>

<div transition duration-500 :class="$clicks === 0 ? 'translate-x--10 translate-y-20' : ''">

# Shaving{.important-text-3em}

<div v-click>

<div font-serif op75 text-2xl mb2>/ˈʃeɪ.vɪŋ/</div>

<div op50 italic text-base>to remove hair from the body<br><span op0>.</span></div>

剃去毛髮；刮鬍子

</div>
</div>

---
layout: center
disabled: true
---

<figure>
  <img src="/yak-shaving-by-david-revoy.jpg" rounded-lg w-180 />
  <figcaption mt-2 op50 text-sm>
    Yak Shaving - by <a href="https://en.wikipedia.org/wiki/en:David_Revoy" title="w:en:David Revoy"><span title="French illustrator and creator of the webcomic ''Pepper&amp;Carrot''">David Revoy</span></a>
  </figcaption>
</figure>

---
glow: left
class: relative
---

# 薅牛毛的例子

<div mt-4 />

<div grid="~ cols-[4fr_2fr] gap-2">

<div w-130>
<v-clicks>

- 你今天打算<span text-red>寫篇部落格</span>
- 你覺得現有的工具都不太符合你的需求，<br>你決定自己寫一個<span text-orange>靜態網站產生器</span>；

- 花了半個月時間，你發現前端框架無法很好的配合你的產生器，<br>你決定自己寫發明一個<span text-green>新的框架</span>；
- 又花了一個月時間，你發現你現在需要：<br><span text-violet>路由</span>，<span text-yellow>狀態管理</span>，<span text-blue>IDE 外掛</span>，<span text-teal>DevTools</span> 等等；
- 兩年之後...
- 你發現你不知為什麼正在青藏高原<span text-fuchsia>薅牛毛</span>...
- 等一下，你的部落格呢？

</v-clicks>
</div>

<div>
</div>
</div>

<YakExample absolute top-0 right-0 bottom-0 w-100 />

---
class: flex flex-col gap-4 items-center justify-center
---

<div text-center flex="~ col gap-4" text-2xl mt--4>
  <div text-3xl font-hand op50>Yak Shaving</div>
  <div text-6xl mb8>「薅牛毛」</div>
  <div v-click>指在解決問題的過程引發的一系列任務鏈，</div>
  <div v-after><span v-mark.orange="2">導致最終偏離了原本的目標</span></div>
</div>

<div v-click="3" op75>*通常帶有負面的含義</div>

<div text-center mt-8 v-click="4">
  <div op50>或稱</div>
  <div flex="~ gap-2 items-center" font-hand><div i-lucide-rabbit/> Down to the Rabbit Hole</div>
  <div op75 mt2>「一頭扎進兔子洞裡」</div>
</div>

<!--
正如同剛剛的例子，「薅牛毛」這個詞指 [click] 在解決問題的過程引發的一系列任務鏈，[click] 導致最終偏離了原本的目標。據說這個詞起源於麻省理工裡的一個短片，其中的角色為了完成某個任務而不斷被次要任務打斷，最後和我們剛剛的例子一樣，發現自己在給牦牛剃毛。[click] 這個詞通常帶有負面的含義，通常用來教育大家保持專注於目標，避免陷入無止盡的細節中。

[click] 這個詞也有一個類似的說法，叫做 Down to the Rabbit Hole，「一頭扎進兔子洞裡」。

雖然這個詞一半用於貶義，但如果我們從另外一個角度思考，假設我們提到的這些東西全部都做出來了呢？我們不就有可能提出了一套全新的解決方案？

當然，我們知道這些東西有著相當高的複雜度，以一己之力在短時間內完成是不可能的，很容易在這個過程中迷失導致最終棄坑。
而這裡就體現出了開源的魅力，如果你提供的解決方案足夠吸引人，你就有可能在開源上得到更多人的幫助，集社群之力以打造一個完整的生態。將「薅牛毛」轉變為一個正向積極的過程。
-->

---
glowSeed: 10
---

# 合理利用「薅牛毛」

<p v-click>「薅牛毛」可以是一個很好的發想途徑，同時提供很強的源動力</p>

<div flex="~ col gap-7" py10>

<div v-click><div flex="~ inline" text-blue mr2 px2 rounded bg-blue:10>需求</div>從自己的需求出發，對問題有更深入的理解</div>

<div v-click><div flex="~ inline" text-rose mr2 px2 rounded bg-rose:10>動力</div>解決自己的問題，同時或許也可以幫助到其他人</div>
<div v-click><div flex="~ inline" text-yellow mr2 px2 rounded bg-yellow:10>驗證</div>你的需求很可能也是別人的需求，通過社群驗證你的想法</div>
<div v-click><div flex="~ inline" text-green mr2 px2 rounded bg-green:10>迭代</div>社群討論與貢獻，完善設計</div>

</div>

<div absolute left-150 top-20>
  <div
    absolute w-50 h-50 left-0 top-28 border="~ blue rounded-full"
    bg-blue:20 text-xl text-blue flex="~ items-center justify-center"
    v-click="2"
  >
    <div :class="{pr15: $clicks>2, pt8: $clicks>3}" transition-all duration-400>你擅長的</div>
  </div>
  <div
    absolute w-50 h-50 left-34 top-28 border="~ rose rounded-full"
    bg-rose:20 text-xl text-rose flex="~ items-center justify-center"
    v-click="3"
  >
    <div pl15 :class="{pt8: $clicks>3}" transition-all duration-400>你享受的</div>
  </div>
  <div
    absolute w-50 h-50 left-17 top-0 border="~ amber rounded-full"
    bg-amber:20 text-xl text-amber flex="~ items-center justify-center"
    v-click="4"
  >
    <div pb10>大家需要的</div>
  </div>
  <Arrow v-click="5" x1="160" y1="340" x2="170" y2="175" color-green  />
  <div
    v-click="5"
    absolute top-85 left-5 ws-nowrap
    border="~ green rounded-full" px3 py1
    bg-green:20 text-xl text-green
  >實用且可持續發展的開源專案</div>
</div>

<!--
這裡我們就來分析一下，我們如何可以合理利用「薅牛毛」，讓我們找到合適的開源專案的想法。

[click] 我會說「薅牛毛」可以是一個很好的發想途徑，同時提供很強的源動力。

[click] 從需求來看，因為我們的「牛毛」來自於我們自身遇到的問題，我們從自己的需求出發，對問題與潛在的解決方案會有更深入的理解。

[click] 而我們「薅這個牛毛」動力來自於解決自己的問題，以及潛在的一點幫助到他人的可能性。

[click] 然後，我們的需求很可能也是別人的需求，我們可以通過開源社群去驗證我們想法的普適性。

[click] 最後，通過社群的討論與貢獻，我們可以不斷迭代我們的設計，完善我們的解決方案。

通過這樣的方式，我們可以集齊幾個開源專案持續發展的要素，我們我們擅長且享受的，以及大家需要的。

這樣的基礎比起「空想什麼樣的開源專案會成功」來得實際得多。
-->

---

# 商業公司例子

<!-- https://x.com/mattwensing/status/1552136584224509954 -->
<!-- https://fortune.com/longform/amazon-web-services-ceo-adam-selipsky-cloud-computing/ -->

<div grid="~ cols-2 gap-8" pt6>

<div v-click="1" bg-lime:10 border="~ lime/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-lime:10 px4 py2 rounded><div i-logos-shopify text-xl /> Shopify</div>

  <div ml2 p2 text-lime1>
  <v-clicks :at="2">

  - 賣滑雪板
  - 想擴大經營，做了線上商城
  - 商城建站工具和服務

  </v-clicks>
  </div>
</div>

<div v-click="5" bg-gray:10 border="~ gray/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-gray:10 px4 py2 rounded><div i-logos-unrealengine-icon text-xl invert-100 /> EpicGame</div>

  <div ml2 p2 text-gray1>
  <v-clicks :at="6">

  - 做 3D 遊戲
  - 發現做 3D 很複雜，做了個引擎
  - 銷售引擎授權

  </v-clicks>
  </div>
</div>

<div v-click="9" bg-orange:10 border="~ orange/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-orange:10 px4 py2 rounded><div i-logos-aws invert-100 hue-rotate-180 text-xl /> Amazon</div>

  <div ml2 p2 text-orange1>
  <v-clicks :at="10">

  - 亞馬遜電商
  - 網站效能跟不上用戶增長，做了雲服務基建
  - 出租雲服務
  - AWS 現已成為亞馬遜最大營收來源

  </v-clicks>
  </div>
</div>

<div v-click="14" bg-pink:10 border="~ pink/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-pink:10 px4 py2 rounded><div i-logos-slack-icon text-xl /> Slack</div>

  <div ml2 p2 text-pink2>
  <v-clicks :at="15">

  - 打算做遊戲
  - 遊戲沒成功，但順手做了內部聊天工具
  - 改變方向，專心完善工具
  - 提供面向企業的團隊溝通工具

  </v-clicks>
  </div>
</div>

</div>

---
layout: center
---

# Anthony 的薅牛毛之路 {.important-text-5xl}

---
clicks: 46
zoom: 0.75
layout: none
class: flex h-full w-full
glow: top
glowOpacity: 0.2
glowSeed: 18
---

<RenderWhen context="visible">
  <YakMap />
</RenderWhen>

<div flex="~ items-center gap-3" fixed right-0 top-0 rounded-bl-2rem p5 backdrop-blur-md>
  <div text-5xl>
    🐃
  </div>
  <div flex="~ col">
    <a href="https://antfu.me" text-sm op50 hover:underline target="_blank">Anthony Fu's</a>
    <a text-2xl href="https://github.com/antfu/yak-shaving-map" target="_blank" hover:underline>
      Yak Map
    </a>
  </div>
</div>

<!--
希望我的這個經歷可以對大家有所啟發。每個人擅長的和感興趣的的格不相同，以及很多專案的誕生會有一定的時效性與偶然性，每個人的成長之路和牦牛地圖也一定會不盡相同。我也非常期待可以看到你們的版本。
-->

---
glow: right
---

# 開源工具發想與實作流程

<div flex="~ col gap-1" py5>
  <div v-click flex="~ items-center gap-2"><div text-2xl i-ph-lightbulb-duotone text-yellow /> 理解問題，考慮可能的解決方案</div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-magnifying-glass-duotone text-blue /> 尋找市面上已經存在的函式庫</div>
  <div v-click absolute left-82 top-40 bg-blue:10 border="~ blue/50 rounded-lg" p2 py1>
    <div text-sm text-blue2>
      參與貢獻，提出建議
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div flex="~ items-center gap-2">
    <div text-2xl i-ph-code-duotone text-green v-after />
    <span v-after>本地實作 MVP；驗證方案可行性；保持介面解耦的想法進行設計；</span>
    <span v-click text-yellow font-bold flex="~ gap-1 items-center" ml--2>及時回歸<div i-ph-arrow-square-out-duotone /></span>
  </div>
  <div v-click absolute left-134 top-32 bg-yellow:10 border="~ yellow/50 rounded-lg" p2 w-54>
    <div text-sm text-yellow2>
      避免「深度優先陷阱」，完成必要的功能後及時回歸主線任務。日後再繼續深入細節。
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-books-duotone text-teal /> 抽離實作成函式庫；添加簡要的文件與動機；開源倉庫發布套件</div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-megaphone-duotone text-rose /> 適當的宣傳；搜集社群回饋</div>
  <div v-click absolute left-80 top-77 bg-rose:10 border="~ rose/50 rounded-lg" p2 py1>
    <div text-sm text-rose2>
      鼓勵總結成技術部落格
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-chats-circle-duotone text-violet /> 交由社群驗證</div>
    <div v-click flex="~ items-center gap-2" pl-4 mt4><div i-ph-arrow-elbow-down-right op25 ml-1 text-sm /><div text-2xl i-ph-seal-question-duotone text-gray /> 無人問津：解決了自己的問題、總結了解決方案，也是不錯的收穫</div>
    <div v-click flex="~ items-center gap-2" pl-4 mt4><div i-ph-arrow-elbow-down-right op25 ml-1 text-sm /><div text-2xl i-ph-treasure-chest-duotone text-orange /> 誒好像還不錯：社群參與討論、報錯、貢獻等；幫助到了更多也幫到了自己</div>
</div>

<!--
這裡我想稍微列舉一下我個人認為的，利用薅牛毛來具體發想開源工具與具體實作流程。

[click] 當我們遇到一個問題的時候，首先我們應該花一些時間理解一下我們遇到的問題，以及考慮一下有可能的解決方案的方向。思考一下這會不會是一個通用的解決方案，其他人會不會也有可能遇到過這個問題。

[click] 然後我們可以尋找一下市面上是否已經存在了相應的函式庫，本著能少一事便少一事的原則，盡可能復用已有的解決方案。[click] 與此同時，也可以參與開源貢獻，提出根據你的需求的場景的和建議，和開源社群共同完善解決方案。

[click] 當你找不到一個期望的工具，或是現有的工具沒法契合你的需求，但你又覺得這個可以是一個通用的方案時，恭喜你，你就找到了一個也許可行的想法。這時候，也許你就可以產生去自己實作一個這樣的工具。你可以先在你的本地實作一個MVP，先跑通自己的需求來驗證我們這個想法的可行性。在設計的過程中，你也可以保持介面解耦的想法進行設計，方便未來抽離。

[click] 這時候，避免陷入薅牛毛陷阱的關鍵就是"及時回歸"。你不需要將其做到完美，可以滿足你當前的需求即可，重要的是先及時返回你的主線任務。日後我們可以再找時間仔細打磨工具的細節。

[click] 好，那這裡假設我們已經完成了我們的主線任務並且有一些額外的時間，如果你還對這個工具有興趣，這時候我們就可以花一些時間將其抽離成獨立的函式庫，寫一些簡要的文件和你做這個工具的動機，然後你就可以開源倉庫開始發版。

[click] 這些都完成之後，我們便可以對我們的倉庫進行適當的宣傳。你可以分享給你的同事，發到一些社群媒體上等等。以搜集社群的回饋，了解我們方案的利弊與權衡點。

[click] 這裡我非常鼓勵去嘗試寫一篇技術部落格總結你在這個過程中的心路歷程，你在過程中遇到的問題，以及你提出的解決方案。這在很好的介紹你的工具的同時，也是一次技術積累。沒有直接用到你的工具的人也行也可以從你的探索中學到什麼，就算在最差的情況下也許我們的想法最終被驗證是不可行的，這篇部落格也可以是一個很好的探索。就像在學術論文中，驗證一個假設的失敗也是一個很重要的貢獻。

[click] 到最後，我們可以借由開源社群來驗證我們方案的通用性。

[click] 如果最後我們專案無人問津，那也沒關係，至少我們解決了自己的問題，總結了解決方案，也是不錯的收穫。從薅牛毛的過程中誕生的專案，至少我們自己會是第一用戶。

[click] 那如果我們的工具很幸運地被社群買單了，我們很自然地就可以通過 GitHub 的通知知道有人開始參與進來了，這時候我們就可以開始和社群一起討論，接受回饋，修復 bug，添加新功能等等。這個過程中，你也會發現你的工具會變得更加完善，你在幫到更多的人的同時，更完善的工具也會反過來幫助到你自己。

（停一下）
-->

---
layout: center
glow: center
---

<h1 important-text-5xl><span transition duration-700 inline-block :class="$clicks === 0 ? 'translate-x-40' : ''">Open Source</span> <span forward:delay-400 v-click>is about Giving</span></h1>

<div text-2xl op50 v-click>開源精神在於分享</div>

<!--
在最後，我想要再提一下關於開源的期待。認為儘管開源是一個很大的話題，不同的人對開源會有不同的詮釋與期望，當我認為，開源的核心精神在於分享。
-->

---
glow: bottom
---

# 對開源的期待

<div grid="~ cols-3 gap-2" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-violet:15 text-violet1>
    <div text-2xl i-ph-gift-duotone text-violet mb2 />
    <div>開源是一種禮物</div>
    <div text-xs op50>Open Source is a Gift</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-2xl i-ph-target-duotone text-orange mb2 />
    <div>互惠不是目的</div>
    <div text-xs op50>Reciprocity is not the Goal</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-rose:15 text-rose1>
    <div text-2xl i-ph-hand-heart-duotone text-rose mb2 />
    <div>享受分享和合作的過程</div>
    <div text-xs op50>Enjoy the Sharing and Collaboration</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-green:15 text-green1>
    <div text-2xl i-ph-hand-waving-duotone text-green mb2 />
    <div>開源不只有程式碼</div>
    <div text-xs op50>Open Source is more than Code</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-2xl i-ph-users-three-duotone text-blue mb2 />
    <div>開源的核心是社群</div>
    <div text-xs op50>The Core of Open Source is Community</div>
  </div>
</div>

<div absolute bottom-10 v-click>
<div op75 mb1>文章推薦</div>

- [Open-Source is a Gift](https://www.redotheweb.com/2011/11/13/open-source-is-a-gift.html)<span op50 text-sm> - François Zaninotto</span>
- [The open source gift exchange](https://world.hey.com/dhh/the-open-source-gift-exchange-2171e0f0)<span op50 text-sm> - David Heinemeier Hansson</span>
- [開源的心理建設](https://antfu.me/posts/mental-health-oss-zh)<span op50 text-sm> - Anthony Fu</span>

</div>

<!--
我想，大家都有各自參與開源的動機與目標。也許是為了提升自己的能力，也許更實際一點，是為了更好的工作機會，也可能單純只是想要讓這個世界變得更好，等等。開源是一個多元的社群，這些都是很正常的動機。但不同的動機也許會導致對開源有不同的期待。這裡我想要講的是，調整好對於開源的期待，可以讓我們更好的融入這個社群，也讓我們更好的享受開源的樂趣。

[click] 我會把開源專案想成是一種禮物。當我們在使用他人的開源專案的時候，就像是你收到了一頓來自陌生人的免費午餐。而當我們在貢獻開源的時候，就像是你在送出一份禮物，一份你的心意。[click] 當你送出禮物的時候，很多時候你也許會收到回禮，但是互惠並不應該是你最初送出禮物的目的。[click] 對我而言，開源的過程本身就是我的目的，我享受分享和一起與他人解決問題的過程。當你不再關注在回報上時，你會更加享受這個過程，而長期來看，也許你會得到更多，就像是今天我能夠有幸站在這裡和大家分享的想法也都是感謝開源提供給我的機會。[click] 開源不只是關於程式碼，它是一個社群，是一種文化，是一種精神。[click] 當你融入這個社群，你會認識一群慷慨的、互相幫助的人。大家會感謝你做出的貢獻，同時你也會收到很多人的感謝與幫助。我認為這種互助的是開源的核心所在。

[click] 如果對於這個話題有更深入的興趣，我推薦你閱讀這幾篇文章。幻燈片的 PDF 可以在我的網站上找到。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Happy Hacking! {.font-hand.italic}

<div pt-2 op50>

謝謝！投影片在 [antfu.me](https://antfu.me) 上可以找到

</div>

<!-- 最後，希望大家都能在開源社群中找到適合自己的位置，並且享受這個過程，祝大家開源順利。謝謝大家！  -->
