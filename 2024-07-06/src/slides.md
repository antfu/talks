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
description: Anthony 的开源发展心路历程。想法与项目的发想过程，以及如何在开源社区中找到自己的定位与方向。帮助你更好的理解与参与开源。
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

---
layout: intro
class: pl-35
glowSeed: 14
---

# Anthony Fu

<div class="[&>*]:important-leading-10 opacity-80">

{Vite} {Vue} {Nuxt} 核心团队成员<br>
{Vitest} {Slidev} {UnoCSS} {Type Challenges} {Elk} 作者<br>
{ESLint Stylistic} {Shiki} {Twoslash} 维护者<br>
就职于 {NuxtLabs}<br>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/antfu" target="_blank" class="border-none! font-300">antfu</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/668380" target="_blank" class="border-none! font-300" ws-nowrap>AnthonyFu 一个托尼</a></div>
</div>

<img src="/anthony-hi.png" v-click absolute top-36 right-35 w-40 />
<img src="/hi.png" v-after absolute top-30 right-26 w-8 rotate-10 delay-300 />

<div flex="~ gap2">

</div>

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
      <span>Anthony 的开源之路</span>
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

<div abs-br mx-10 my-11 flex="~ col gap-4 items-end" text-left v-click="3">
  <span>VueConf Shenzhen</span>
  <div text-xs opacity-75 mt--4>2024.07.06</div>
</div>

<img src="/vue-shenzhen.svg" h-60 absolute bottom-0 right-0 op10 v-click="2" />

<!--
参与开源这几年来，我必须说开源是一件非常有趣且富有回报的事情。我相信在座很多人都想要参与开源，亦或是已经参与其中了。然而，有很多因素会影响一个开源项目能否 “成功” —— 当然这也取决于你怎么定义成功。例如，想法的实用性、实现方式、代码质量、文档、社区、营销等等。所有这些都很重要，而且互相关联。很遗憾，每个项目都有自己发展的方式，并没有一个所谓万金油公式能保证一个项目的成功。

[click] 所以在这里，我想分享一些我在建立和维护开源项目的一些经验和想法，结合一些观察社区中的观察。

希望这些可以帮助你开始自己的开源之旅，或者找到一些新的想法来改进你现有的项目。

开源也是一个非常大的话题，我无法在一个演讲中覆盖所有内容。所以我试图将其分解，并在每次演讲中讨论开源的不同方面，并将它们组成一个系列。

[click] 今天的主题是这个系列的第三期，让我们谈谈 [click] Yak Shaving。

[click] 这里我把它翻译成了「薅牛毛」，等下我会解释一下这个词的来源和含义。
-->

---

<div grid="~ cols-2 gap-10" mt4>

<div>
<div op50 font-serif italic mb--1>Part I</div>
<h2><span op75>The Set Theory</span><br>集合论</h2>
<img src="/part1-the-set-theory.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

<div>
<div op50 font-serif italic mb--1>Part II</div>
<h2><span op75>The Progressive Path</span><br>渐进之路</h2>
<img src="/part2-progressive.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

</div>

<div mt-14 text-xl text-center v-click>

回放请见 [antfu.me](https://antfu.me)

</div>

---
layout: fact
---

# 什么是「薅牛毛」？{.important-text-3em}

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

剃去毛发；刮胡子

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

# 薅牛毛的例子

<div mt-4 />

<div grid="~ cols-[4fr_2fr] gap-2">

<v-clicks>

- 你今天打算<span text-red>写篇博客</span>
- 你觉得现有的工具都不太符合你的需求，<br>你决定自己写一个<span text-orange>静态网站生成器</span>；

- 花了半个月时间，你发现前端框架无法很好的配合你的生成器，<br>你决定自己写发明一个<span text-green>新的框架</span>；
- 又花了一个月时间，你发现你现在需要：<br><span text-violet>路由</span>，<span text-yellow>状态管理</span>，<span text-blue>IDE 插件</span>，<span text-teal>DevTools</span> 等等；
- 两年之后...
- 你发现你不知为什么正在青藏高原<span text-fuchsia>薅牛毛</span>...
- 等一下，你的博客呢？

</v-clicks>

<div v-click>
  <YakExample scale-130 />
</div>

</div>

---
class: flex flex-col gap-4 items-center justify-center
---

<div text-center flex="~ col gap-4" text-2xl mt--4>
  <div text-3xl font-hand op50>Yak Shaving</div>
  <div text-6xl mb8>「薅牛毛」</div>
  <div v-click>指在解决问题的过程引发的一系列任务链，</div>
  <div v-after><span v-mark.orange="2">导致最终偏离了原本的目标</span></div>
</div>

<div v-click="3" op75>*通常带有负面的含义</div>

<div text-center mt-8 v-click="4">
  <div op50>或称</div>
  <div flex="~ gap-2 items-center" font-hand><div i-lucide-rabbit/> Down to the Rabbit Hole</div>
  <div op75 mt2>「一头扎进兔子洞里」</div>
</div>

<!--
正如同刚刚的例子，「薅牛毛」这个词指 [click] 在解决问题的过程引发的一系列任务链，[click] 导致最终偏离了原本的目标。据说这个词起源于麻省理工里的一个短片，其中的角色为了完成某个任务而不断被次要任务打断，最后和我们刚刚的例子一样，发现自己在给牦牛剃毛。[click] 这个词通常带有负面的含义，通常用来教育大家保持专注于目标，避免陷入无止尽的细节中。

[click] 这个词也有一个类似的说法，叫做 Down to the Rabbit Hole，「一头扎进兔子洞里」。

虽然这个词一半用于贬义，但如果我们从另外一个角度思考，假设我们提到的这些东西全部都做出来了呢？我们不就有可能提出了一套全新的解决方案？

当然，我们知道这些东西有着相当高的复杂度，以一己之力在短时间内完成是不可能的，很容易在这个过程中迷失导致最终弃坑。
而这里就体现出了开源的魅力，如果你提供的解决方案足够吸引人，你就有可能在开源上得到更多人的帮助，集社区之力以打造一个完整的生态。将「薅牛毛」转变为一个正向积极的过程。
-->

---
glowSeed: 10
---

# 合理利用「薅牛毛」

<p v-click>「薅牛毛」可以是一个很好的发想途径，同时提供很强的源动力</p>

<div flex="~ col gap-7" py10>

<div v-click><div flex="~ inline" text-blue mr2 px2 rounded bg-blue:10>需求</div>从自己的需求出发，对问题有更深入的理解</div>

<div v-click><div flex="~ inline" text-rose mr2 px2 rounded bg-rose:10>动力</div>解决自己的问题，同时或许也可以帮助到其他人</div>
<div v-click><div flex="~ inline" text-yellow mr2 px2 rounded bg-yellow:10>验证</div>你的需求很可能也是别人的需求，通过社区验证你的想法</div>
<div v-click><div flex="~ inline" text-green mr2 px2 rounded bg-green:10>迭代</div>社区讨论与贡献，完善设计</div>

</div>

<div absolute left-150 top-20>
  <div
    absolute w-50 h-50 left-0 top-28 border="~ blue rounded-full"
    bg-blue:20 text-xl text-blue flex="~ items-center justify-center"
    v-click="2"
  >
    <div :class="{pr15: $clicks>2, pt8: $clicks>3}" transition-all duration-400>你擅长的</div>
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
  >实用且可持续发展的开源项目</div>
</div>

<!--
这里我们就来分析一下，我们如何可以合理利用「薅牛毛」，让我们找到合适的开源项目的想法。

[click] 我会说「薅牛毛」可以是一个很好的发想途径，同时提供很强的源动力。

[click] 从需求来看，因为我们的「牛毛」来自于我们自身遇到的问题，我们从自己的需求出发，对问题与潜在的解决方案会有更深入的理解。

[click] 而我们「薅这个牛毛」动力来自于解决自己的问题，以及潜在的一点帮助到他人的可能性。

[click] 然后，我们的需求很可能也是别人的需求，我们可以通过开源社区去验证我们想法的普适性。

[click] 最后，通过社区的讨论与贡献，我们可以不断迭代我们的设计，完善我们的解决方案。

通过这样的方式，我们可以集齐几个开源项目持续发展的要素，我们我们擅长且享受的，以及大家需要的。

这样的基础比起「空想什么样的开源项目会成功」来得实际得多。
-->

---

# 商业公司例子

<!-- https://x.com/mattwensing/status/1552136584224509954 -->
<!-- https://fortune.com/longform/amazon-web-services-ceo-adam-selipsky-cloud-computing/ -->

<div grid="~ cols-2 gap-8" pt6>

<div v-click="1" bg-lime:10 border="~ lime/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-lime:10 px4 py2 rounded><div i-logos-shopify text-xl /> Shopify</div>

  <div ml2 p2 text-lime1>
  <v-clicks :at="2">

  - 卖滑雪板
  - 想扩大经营，做了线上商城
  - 商城建站工具和服务

  </v-clicks>
  </div>
</div>

<div v-click="5" bg-gray:10 border="~ gray/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-gray:10 px4 py2 rounded><div i-logos-unrealengine-icon text-xl invert-100 /> EpicGame</div>

  <div ml2 p2 text-gray1>
  <v-clicks :at="6">

  - 做 3D 游戏
  - 发现做 3D 很复杂，做了个引擎
  - 销售引擎授权

  </v-clicks>
  </div>
</div>

<div v-click="9" bg-orange:10 border="~ orange/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-orange:10 px4 py2 rounded><div i-logos-aws invert-100 hue-rotate-180 text-xl /> Amazon</div>

  <div ml2 p2 text-orange1>
  <v-clicks :at="10">

  - 亚马逊电商
  - 网站性能跟不上用户增长，做了云服务基建
  - 出租云服务
  - AWS 现已成为亚马逊最大营收来源

  </v-clicks>
  </div>
</div>

<div v-click="14" bg-pink:10 border="~ pink/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-pink:10 px4 py2 rounded><div i-logos-slack-icon text-xl /> Slack</div>

  <div ml2 p2 text-pink2>
  <v-clicks :at="15">

  - 打算做游戏
  - 游戏没成功，但顺手做了内部聊天工具
  - 改变方向，专心完善工具
  - 提供面向企业的团队沟通工具

  </v-clicks>
  </div>
</div>

</div>

---
glow: right
---

# 开源工具发想与实现流程

<div flex="~ col gap-1" py5>
  <div v-click flex="~ items-center gap-2"><div text-2xl i-ph-lightbulb-duotone text-yellow /> 理解问题，考虑可能的解决方案</div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-magnifying-glass-duotone text-blue /> 寻找市面上已经存在的库</div>
  <div v-click absolute left-76 top-40 bg-blue:10 border="~ blue/50 rounded-lg" p2 py1>
    <div text-sm text-blue2>
      参与贡献，提出建议
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div flex="~ items-center gap-2">
    <div text-2xl i-ph-code-duotone text-green v-after />
    <span v-after>本地实现 MVP；验证方案可行性；保持接口解耦的想法进行设计；</span>
    <span v-click text-yellow font-bold flex="~ gap-1 items-center" ml--2>及时回归<div i-ph-arrow-square-out-duotone /></span>
  </div>
  <div v-click absolute left-134 top-32 bg-yellow:10 border="~ yellow/50 rounded-lg" p2 w-54>
    <div text-sm text-yellow2>
      避免「深度优先陷阱」，完成必要的功能后及时回归主线任务。日后再继续深入细节。
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-books-duotone text-teal /> 抽离实现成为库；添加简要的文档与动机；开源仓库发布包</div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-megaphone-duotone text-rose /> 适当的宣传；搜集社区反馈</div>
  <div v-click absolute left-80 top-77 bg-rose:10 border="~ rose/50 rounded-lg" p2 py1>
    <div text-sm text-rose2>
      鼓励总结成技术博客
    </div>
  </div>
  <div v-click i-ph-arrow-down op25 ml-1 text-sm />
  <div v-after flex="~ items-center gap-2"><div text-2xl i-ph-chats-circle-duotone text-violet /> 交由社区验证</div>
    <div v-click flex="~ items-center gap-2" pl-4 mt4><div i-ph-arrow-elbow-down-right op25 ml-1 text-sm /><div text-2xl i-ph-seal-question-duotone text-gray /> 无人问津：解决了自己的问题、总结了解决方案，也是不错的收获</div>
    <div v-click flex="~ items-center gap-2" pl-4 mt4><div i-ph-arrow-elbow-down-right op25 ml-1 text-sm /><div text-2xl i-ph-treasure-chest-duotone text-orange /> 诶好像还不错：社区参与讨论、报错、贡献等；帮助到了更多也帮到了自己</div>
</div>

<!--
那回到开源，这里我想稍微列举一下我个人认为的，利用薅牛毛来具体发想开源工具与具体实现流程。

[click] 当我们遇到一个问题的时候，首先我们应该花一些时间理解一下我们遇到的问题，以及考虑一下有可能的解决方案的方向。思考一下这会不会是一个通用的解决方案，其他人会不会也有可能遇到过这个问题。

[click] 然后我们可以寻找一下市面上是否已经存在了相应的库，本着能少一事便少一事的原则，尽可能复用已有的解决方案。[click] 与此同时，也可以参与开源贡献，提出根据你的需求的场景的和建议，和开源社区共同完善解决方案。

[click] 当你找不到一个期望的工具，或是现有的工具没法契合你的需求，但你又觉得这个可以是一个通用的方案时，恭喜你，你就找到了一个也许可行的想法。这时候，也许你就可以产生去自己实现一个这样的工具。你可以先在你的本地实现一个MVP，先跑通自己的需求来验证我们这个想法的可行性。在设计的过程中，你也可以保持接口解耦的想法进行设计，方便未来抽离。

[click] 这时候，避免陷入薅牛毛陷阱的关键就是“及时回归”。你不需要将其做到完美，可以满足你当前的需求即可，重要的是先及时返回你的主线任务。日后我们可以再找时间仔细打磨工具的细节。

[click] 好，那这里假设我们已经完成了我们的主线任务并且有一些额外的时间，如果你还对这个工具有兴趣，这时候我们就可以花一些时间将其抽离成独立的库，写一些简要的文档和你做这个工具的动机，然后你就可以开源仓库开始发版。

[click] 这些都完成之后，我们便可以对我们的仓库进行适当的宣传。你可以分享给你的同事，发到一些社交媒体上等等。以搜集社区的反馈，了解我们方案的利弊与权衡点。

[click] 这里我非常鼓励去尝试写一篇技术博客总结你在这个过程中的心路历程，你在过程中遇到的问题，以及你提出的解决方案。这在很好的介绍你的工具的同时，也是一次技术积累。没有直接用到你的工具的人也行也可以从你的探索中学到什么，就算在最差的情况下也许我们的想法最终被验证是不可行的，这篇博客也可以是一个很好的探索。就像在学术论文中，验证一个假设的失败也是一个很重要的贡献。

[click] 到最后，我们可以借由开源社区来验证我们方案的通用性。

[click] 如果最后我们项目无人问津，那也没关系，至少我们解决了自己的问题，总结了解决方案，也是不错的收获。从薅牛毛的过程中诞生的项目，至少我们自己会是第一用户。

[click] 那如果我们的工具很幸运地被社区买单了，我们很自然地就可以通过 GitHub 的通知知道有人开始参与进来了，这时候我们就可以开始和社区一起讨论，接受反馈，修复 bug，添加新功能等等。这个过程中，你也会发现你的工具会变得更加完善，你在帮到更多的人的同时，更完善的工具也会反过来帮助到你自己。

（停一下）
-->

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
希望我的这个经历可以对大家有所启发。每个人擅长的和感兴趣的的格不相同，以及很多项目的诞生会有一定的时效性与偶然性，每个人的成长之路和牦牛地图也一定会不尽相同。我也非常期待可以看到你们的版本。
-->

---
layout: center
glow: center
---

<h1 important-text-5xl><span transition duration-700 inline-block :class="$clicks === 0 ? 'translate-x-40' : ''">Open Source</span> <span forward:delay-400 v-click>is about Giving</span></h1>

<div text-2xl op50 v-click>开源精神在于分享</div>

<!--
在最后，我想要再提一下关于开源的期待。认为尽管开源是一个很大的话题，不同的人对开源会有不同的诠释与期望，当我认为，开源的核心精神在于分享。
-->

---
glow: bottom
---

# 对开源的期待

<div grid="~ cols-3 gap-2" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-violet:15 text-violet1>
    <div text-2xl i-ph-gift-duotone text-violet mb2 />
    <div>开源是一种礼物</div>
    <div text-xs op50>Open Source is a Gift</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-2xl i-ph-target-duotone text-orange mb2 />
    <div>互惠不是目的</div>
    <div text-xs op50>Reciprocity is not the Goal</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-rose:15 text-rose1>
    <div text-2xl i-ph-hand-heart-duotone text-rose mb2 />
    <div>享受分享和合作的过程</div>
    <div text-xs op50>Enjoy the Sharing and Collaboration</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-green:15 text-green1>
    <div text-2xl i-ph-hand-waving-duotone text-green mb2 />
    <div>开源不只有代码</div>
    <div text-xs op50>Open Source is more than Code</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-2xl i-ph-users-three-duotone text-blue mb2 />
    <div>开源的核心是社区</div>
    <div text-xs op50>The Core of Open Source is Community</div>
  </div>
</div>

<div absolute bottom-10 v-click>
<div op75 mb1>文章推荐</div>

- [Open-Source is a Gift](https://www.redotheweb.com/2011/11/13/open-source-is-a-gift.html)<span op50 text-sm> - François Zaninotto</span>
- [The open source gift exchange](https://world.hey.com/dhh/the-open-source-gift-exchange-2171e0f0)<span op50 text-sm> - David Heinemeier Hansson</span>
- [开源的心理建设](https://antfu.me/posts/mental-health-oss-zh)<span op50 text-sm> - Anthony Fu</span>

</div>

<!--
我想，大家都有各自参与开源的动机与目标。也许是为了提升自己的能力，也许更实际一点，是为了更好的工作机会，也可能单纯只是想要让这个世界变得更好，等等。开源是一个多元的社区，这些都是很正常的动机。但不同的动机也许会导致对开源有不同的期待。这里我想要讲的是，调整好对于开源的期待，可以让我们更好的融入这个社区，也让我们更好的享受开源的乐趣。

[click] 我会把开源项目想成是一种礼物。当我们在使用他人的开源项目的时候，就像是你收到了一顿来自陌生人的免费午餐。而当我们在贡献开源的时候，就像是你在送出一份礼物，一份你的心意。[click] 当你送出礼物的时候，很多时候你也许会收到回礼，但是互惠并不应该是你最初送出礼物的目的。[click] 对我而言，开源的过程本身就是我的目的，我享受分享和一起与他人解决问题的过程。当你不再关注在回报上时，你会更加享受这个过程，而长期来看，也许你会得到更多，就像是今天我能够有幸站在这里和大家分享的想法也都是感谢开源提供给我的机会。[click] 开源不只是关于代码，它是一个社区，是一种文化，是一种精神。[click] 当你融入这个社区，你会认识一群慷慨的、互相帮助的人。大家会感谢你做出的贡献，同时你也会收到很多人的感谢与帮助。我认为这种互助的是开源的核心所在。

[click] 如果对于这个话题有更深入的兴趣，我推荐你阅读这几篇文章。幻灯片的 PDF 可以在我的网站上找到。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# Happy Hacking! {.font-hand.italic}

<p pt-2 op50>

谢谢！幻灯片在 [antfu.me](https://antfu.me) 上可以找到

</p>

<!-- 最后，希望大家都能在开源社区中找到适合自己的位置，并且享受这个过程，祝大家开源顺利。谢谢大家！  -->
