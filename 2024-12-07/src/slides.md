---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: zh-CN
title: ESLint One for All Made Easy
monacoTypesIgnorePackages:
  - '@antfu/install-pkg'
  - '@clack/prompts'
  - '@typescript-eslint/*'
  - 'eslint-plugin-*'
  - '*-eslint-parser'
  - 'find-up'
  - 'parse-*'
  - 'globals'
  - 'pkg-types'
  - 'mlly'
  - 'local-pkg'
  - 'yargs'
  - 'fast-glob'
  - 'debug'
  - 'globby'
  - 'estraverse'
  - 'pathe'
  - 'acorn'
  - 'acorn-*'
  - 'pico*'
  - 'eslint-visitor-keys'
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
  <div i-ri-bluesky-line op50 ma text-xl ml4/>
  <div><a href="https://bsky.app/antfu.me" target="_blank" class="border-none! font-300">antfu.me</a></div>
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/antfu7" target="_blank" class="border-none! font-300">antfu7</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/668380" target="_blank" class="border-none! font-300" ws-nowrap>AnthonyFu 一个托尼</a></div>
</div>

<img src="https://antfu.me/avatar.png" absolute top-36 right-30 w-40 rounded-full />

<!--
...

如你所见，我对开源充满热情，这驱使我参与和制作了很多项目。我享受制作工具和探索解决方案的过程。

比如现在看到的 PTT 是使用一个叫做 Slidev 的工具制作的，它是一个基于 Markdown 和 Web 技术制作的演示文档工具。起源于我对于传统幻灯片工具对代码块的展示没有很好的支持这一痛点，搞出的一套针对程序员演讲的解决方案。

同样，当我去年开始深入研究 ESLint 及其生态系统时，我发现新的 ESLint 模式有着有很大的潜力，但尚未被充分发掘。

所以今天，我想与大家分享我在最近探索过程中发现的一些见解和实践。
-->

---
layout: cover
---

<h1 flex="~ col">
<div mt1 forward:delay-300 ml10 flex="~ col" relative>
  <span flex="~ gap-2 items-center" text-hex-8080f2>
    <div i-logos-eslint />
    ESLint
  </span>
  <span text-teal font-bold v-click>One for All</span>
  <span font-hand text-1.2em text-lime v-click>Made Easy</span>

  <div absolute top-28 left-80 text-4xl flex="~ col gap-8">
    <div text-teal2 v-click>一统江湖</div>
    <div text-lime2 v-click>化繁为简</div>
  </div>
</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col items-center" text-left>
  <img src="/feday.svg" alt="FEDAY" w20 mb1/>
  <div text-xs opacity-75>2024 年 12 月 7 日</div>
</div>

<!--
自从 ESLint 发布以来已经有 11 年了，目前它毫无疑问是 JavaScript 生态系统中最受欢迎的工具之一，几乎是任何用到 JavaScript 的项目的标配。但尽管它已经存在了这么长时间，但它仍然在不断改进和发展中。

今天，我想给这次的分享取一个非常野心勃勃的主题「ESLint, One for All, Made Easy」

我让 ChatGPT 帮我翻译了一下，它推荐我叫作「化繁为简，一统江湖」（笑

希望和大家分享一些使用 ESLint 的新视角和模式。
-->

---
layout: center
glow: bottom
---

<div flex="~ col items-center justify-center w-full">

<h2 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-40' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-hex-8080f2 transition duration-500 text-1.5em
    :class="$clicks < 1 ? 'scale-150 translate-y' : ''"
  >
    <div i-logos-eslint />
    ESLint v9.0.0
  </span>
  <span v-click op75 forward:delay-400 text-2xl>于 <TimeAgo date="2024-04-05" font-bold /> 发布</span>
</div>
</h2>

<img src="/eslint-v9.png" v-click mt4 w-60 rounded-lg shadow forward:delay-400 />
</div>

<!--
ESLint 9.0 [click] 在八个月前发布了。

[click] 这个大版本的亮点是推出了一个新的配置系统，称为 Flat Config 扁平化配置。
-->

---
layout: quote
---

# 🙋 听说过 <span text-hex-8080f2 font-bold><span v-mark="0">ESLint Flat Config</span></span> 吗？

---
layout: quote
---

# 🙋 用上 <span text-hex-8080f2 font-bold>Flat Config</span> 了吗？

<!--
...

对于还没有用上的同学，希望听完我今天的分享，可以给你一个理由。
-->

---

<div grid="~ cols-2 gap-6" h-full>
<div>

## 旧配置 <sup text-base op50 translate-y--2 inline-block>.eslintrc</sup>

<div mt-4 h-42>

<v-clicks at="3">

- 多种来源 `.eslintrc` `.eslintrc.js` `.eslintrc.json` `package.json` 等
- 基于约定的 `extends`
- 基于 npm 包名的插件系统
- 继承树可能很复杂

</v-clicks>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--160px': ''">

```json {*|3-6|7-10|*}{at:4}
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "vue",
    "n"
  ],
  "rules": {
    "vue/html-indent": ["error", 2]
  },
  "overrides": [
    // ...
  ]
}
```

</div>
</div>
<div>

## 扁平配置

<div mt-4 h-42>

<v-clicks at="3">

- 单一来源 `eslint.config.js` <sup op75>或是 `.cjs` `.mjs`</sup><br><span op0>-</span>
- 基于 JS 原生的显式导入
- 插件系统基于导入的对象 <sup op75>可以重命名插件</sup>
- 可组合，更容易追溯

</v-clicks>

</div>
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--160px': ''">

```js {*|2-3,8-9|4-5,11-14|*}{at:4}
// eslint.config.js
import typescript from '@eslint-typescript/eslint-plugin'
import eslint from '@eslint/js'
import n from 'eslint-plugin-n'
import vue from 'eslint-plugin-vue'

export default [ // 导出一个配置数组
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: {
      vue,
      node: n, // 重命名插件
    },
    rules: {
      'vue/html-indent': ['error', 2]
    }
  },
  // ...
]
```

</div>
</div>
</div>

<!--
如果你从未听说过它或还没有深入研究文档。
这里，让我为你快速比较一下传统的 eslintrc 配置 [click] 和新的扁平化配置 [click]。

区分这两种配置格式相当简单。[click] 传统配置的文件名为 `.eslintrc` 支持各种扩展名，也可能从你的 `package.json` 中读取。而扁平化配置则只会从 `eslint.config.js` 中加载，这是一个 JavaScript 配置文件，作为唯一的来源。

[click] 在复用共享配置时，传统配置格式隐式地使用基于约定的 `extends` 属性，它接受字符串，并根据提供的名字从本地 `node_modules` 中加载该配置。你需要稍微了解一下约定，才能知道它是如何解析的。而在扁平配置中，我们使用原生的 ESM 导入，更加显式，并且给你更多的控制权。

[click] 对于插件，旧的配置接受一个字符串数组，这同样是基于约定，并与插件的 npm 包名耦合。现在在扁平配置中，它接受一个对象。这意味着你现在可以轻松重命名插件，或者切换到一个 fork 而不必强制更改配置中的每个规则。

[click] 此外，`extends` 的继承性质可能会导致非常复杂的树结构，因为共享配置中也可以有嵌套的 `extends`。在 flat 配置中，它被大大简化了，你显式地将共享配置导入为多个对象或数组，并将它们组合成一个单一的平面配置。
-->

---

## 扁平配置推出时间线

<Timeline mt2 />

<v-clicks>

- RFC 于 2019 年 1 月创建
- 在 `v8.21.0` 中作为实验性功能推出
- 在 `v8.45.0` 中变为稳定版
- 在 `v9.0.0` 中成为默认配置
- JavaScript 配置，具有完全控制权
- 简化的继承和覆盖
- 灵活、动态、可定制

</v-clicks>

<!--
[click] 交代一下背景故事，这里有一个我绘制的时间线图来展示一下历史。虽然扁平配置对一些人来说可能是新的，但实际上它已经计划了 5 年之久。[click] 这个 RFC 于 2019 年 1 月创建，[click] 第一个实验性实现出现在 v8.21.0 版本中，那是两年前的事了。[click] 它在 v8.45.0 版本中变为稳定版，[click] 并在最近的 v9.0.0 版本中成为默认配置。在此期间，ESLint 团队发布了多篇博客文章来解释他们引入新格式的原因，并分享了推出的路线图。这是一个跨越 5 年的宏大计划的，尽管在实施的过程中不能说是无缝迁移，但是还是不可否认 ESLint 团队付出的巨大的努力，这在开源项目中也是非常罕见的。

所以，正如我们在前一张幻灯片中提到的，[click] 扁平配置的最大好处是现在它是用 JS 编写的，你可以完全控制。[click] 它使用原生的 import 来解析插件和配置，使得继承和覆盖变得更加简化。[click] 因为它完全在 JavaScript 中，共享配置可以是接受用户选项的工厂函数；用户可以有更多的能力根据他们的具体需求进行定制。
-->

---

# 迁移工具 [`@eslint/migrate-config`](https://www.npmjs.com/package/@eslint/migrate-config) <sup text-lime bg-lime:15 px1.5 rounded text-sm>官方</sup>

CLI 工具将旧配置转换为扁平配置

```bash
npx @eslint/migrate-config .eslintrc.json
```

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt-4 v-click>

```json
// .eslintrc.json
{
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "extends": [
    "eslint:recommended",
    "plugin:ava/recommended",
    "prettier"
  ],
  "plugins": ["prettier", "import"],
  "rules": {
    "prettier/prettier": 2,
    "ava/no-ignored-test-files": 0,
    "ava/no-import-test-files": 0,
    "import/no-unresolved": [
      2,
      {
        "ignore": ["ava", "got"]
      }
    ],
    "import/no-unused-modules": 2,
    "import/order": [
      2,
      {
        "newlines-between": "never"
      }
    ]
  }
}
```

<span i-carbon:arrow-right mt-40 />

```js
// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import _import from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

const compat = new FlatCompat()
export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:ava/recommended',
    'prettier'
  ),
  {
    plugins: {
      prettier,
      import: _import,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 2,
      'ava/no-ignored-test-files': 0,
      'ava/no-import-test-files': 0,

      'import/no-unresolved': [2, {
        ignore: ['ava', 'got'],
      }],
      'import/no-unused-modules': 2,
      'import/order': [2, {
        'newlines-between': 'never',
      }],
    },
  },
]
```

</div>

<!--
对于还在使用旧配置的同学，官方提供了一个 CLI 迁移工具 `@eslint/migrate-config`，它可以自动将你的旧配置文件转换为扁平配置。[click] 在此过程中，还会自动引入一些兼容性的运行时库来模拟新配置的行为。

我建议你查看 ESLint 文档和迁移指南以获取更详细的说明。
-->

---
layout: fact
---

# 工具生态{.important-text-3em}

随着新的 Flat Config 带来的新工具和可能性

<!--
现在，让我们谈谈这种新格式所带来的有趣的新工具和可能性。
-->

---
glow: left
---

<div w="40%">

## Config Inspector <sup text-lime bg-lime:15 px1.5 rounded text-sm>官方</sup>

<div mt-4 />
<v-click>

```bash
eslint --inspect-config
```

</v-click>
<div mt-4 />

<v-clicks>

- 配置可视化
- 理解配置组合
- 内置配置
- 文件路径测试器

</v-clicks>
<div mt-4 />
<v-click>

<<< ./eslint.demo.config.ts {monaco-write}{height:'220px'}

</v-click>
</div>

<InspectorIframe />

<div v-show="false">
<!-- This block is for type discovery -->

```ts {monaco}
import antfu from '@antfu/eslint-config'
```

</div>

<!--
第一个介绍的是 ESLint Config Inspector - 一个可视化的开发工具，允许你检查和操作最终解析的配置。

[click] 你可以在项目根目录下运行 `eslint --inspect-config` 来尝试它，它会在浏览器中打开一个带有 UI 的页面，就像你在右边看到的那样。

[click] 首先，它会渲染你所有的配置项。你可以看到所有的配置都列在这里，因为它是扁平的。这里我有一个相当复杂的配置设置，包含了很多配置项。但通过每个配置提供的名称，你可以轻松地看到和理解它们的用途。

[click] 你还可以展开每个项目，查看它们如何贡献到最终的配置中，比如启用了多少规则，或者它们的目标文件类型是什么，等等。

[click] 在每个规则中，你还可以看到它们的选项，一个简短的描述，以及一个指向它们文档页面的链接。

[click] 由于在 ESLint 中，你可以有不同的规则集应用于不同的文件类型，或者更细粒度地应用于它们的确切文件路径。在配置检查器中，你还可以输入文件路径来测试这些规则是如何为该文件启用的。

在另一个标签中，你还可以浏览每个可用的规则，鉴于你已经安装的插件。你可以过滤它们，查看你正在使用哪些规则，哪些规则你没有使用，哪些是推荐的，哪些是已弃用的。

[click] 这里我有我的配置文件作为示例。这个配置是一个工厂函数，接受一些相当高级的选项。通过配置检查器，我们可以看到它是如何根据我们提供的选项解析的。我们还可以尝试更改选项，看看它如何影响结果。例如，我还可以提供我的 tsconfig 的路径，这将自动为我启用类型感知的规则。
-->

---

## Flat Config Utils <sup text-teal bg-teal:15 px1.5 rounded text-sm>社区</sup>

<Repo name="antfu/eslint-flat-config-utils" op50 />

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt2>
<div v-click>

```ts {*|*|7-9|10-17}{at:3}
import eslint from '@eslint/js'
import unocss from '@unocss/eslint-plugin'
import vue from 'eslint-plugin-vue'
import typescript from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...typescript.configs.recommand,
  ...await unocss(),
  {
    files: ['*.vue'],
    ...vue.configs['vue3-recommand'],
    rules: {
      ...vue.configs['vue3-recommand'].rules,
      'vue/html-indent': ['error', 2]
    }
  }
]
```

</div>
<span i-carbon:arrow-right ma v-click />
<div v-after>

```ts {*|1,7|8-10|11-21}{at:3}
import eslint from '@eslint/js'
import unocss from '@unocss/eslint-plugin'
import { compose } from 'eslint-flat-config-utils'
import vue from 'eslint-plugin-vue'
import typescript from 'typescript-eslint'

export default compose(
  eslint.configs.recommended,
  typescript.configs.recommand, // 数组，自动解构
  unocss() // 自动解析 Promise
)
  .append( // 可链式扩展
    vue.configs['vue3-recommand']
  )
  // 使用名称或索引覆盖任何配置
  .override('vue', {
    files: ['*.vue'],
    rules: {
      'vue/html-indent': ['error', 2]
    }
  })
```

</div>
</div>

<!--
为了让配置自定义更容易，我还制作了一个名为 `eslint-flat-config-utils` 的小型库。

[click] 例如，这里有一个我们可能会使用的扁平配置。根据每个共享配置的构造方式，有些可能是一个普通的配置对象，有些可能是一个数组，还有些可能是一个返回对象、数组甚至是 Promise 的构造函数。当你将它们一起使用时，通常需要你自己将它们合并成一个单一的数组。

[click] 使用配置工具，[click] 我制作了一个名为 `compose` 的实用函数，[click] 它会自动解析不同类型的配置，解析 Promise 并将它们合并在一起。

[click] 它还提供了一些可链式操作，你可以在任何你想要的位置插入额外的配置，或者覆盖某些配置而无需手动处理合并。
-->

---

## ESLint Typegen <sup text-teal bg-teal:15 px1.5 rounded text-sm>社区</sup>

<Repo name="antfu/eslint-typegen" op50 />

<v-clicks>

![](/eslint-typegen.png){.w-200.rounded-lg.shadow.border.border-main}

</v-clicks>

<!--
然后，由于扁平配置的灵活性以及其提供的完整上下文，它还使类型生成成为可能。[click]

只需将你导出的整个配置数组用 typegen 函数包裹，它将基于你安装的所有插件生成一个本地的 .d.ts 文件。这为你提供了所有使用规则的自动补全和类型检查。
-->

---
layout: fact
---

# One for All{.important-text-3em}

一个配置适配各种不同的项目

<!--
所以在这里，我想再次强调主题 - 一统江湖，或者说，一个打十个。

通过最大化的灵活性和可定制性，现在可以拥有一个单一的共享配置，覆盖所有不同类型的项目。
-->

---

<div grid="~ cols-2 gap-8">

<div flex="~ col gap-2">

### 旧配置

```json {*|3-7|*|10-14|*}{at:1}
{
  "extends": [
    "@antfu/eslint-config",
    "@antfu/eslint-config-ts",
    "@antfu/eslint-config-vue",
    "@antfu/eslint-config-vue-ts"
    // ...需要提供所有的组合
  ],
  "rules": {
    // 为了修改一项配置需要非常的多的手动覆盖
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "jsx-indent": ["error", 4],
    "vue/indent": ["error", 4]
  }
}
```

</div>
<div flex="~ col gap-2">

### 扁平配置

```ts {*|4-5|*|6-8|*}{at:1}
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: {
    indent: 4
  }
  // ...
})
```

<div flex="~ col gap-2" mt-3>

<div v-click class="slidev-vclick-target" :class="$clicks === 1 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  配置可以接受高阶用户选项
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 2 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  一个配置适用于所有项目
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 3 ? 'text-green' : ''" >
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    像 Prettier 一样提供最小配置，开箱即用
  </span>
</div>

<div v-click class="slidev-vclick-target">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    同时拥有 ESLint 完整灵活的可自定义能力
  </span>
</div>

</div>
</div>

</div>

<!--
这里我们可以快速比较一下

[click] 在新的扁平配置中，共享配置可以是一个接受用户选项的工厂函数，这是在旧配置中无法做到的。想象一下，如果我希望我的配置同时适用于 TypeScript 和非 TypeScript 项目，Vue 和非 Vue 项目，我将需要做一个 monorepo 来发布不同组合的配置。正如你所看到的，这种方式并不具备良好的扩展性，因为每增加一个选项，我们的组合数量就会翻倍。

[click] 扁平配置允许你提供语义化的选项来动态切换每个功能，使得一个单一的配置能够适应不同的项目。

[click] 因此，我们还可以进行高级抽象来吸收底层的复杂性，并提供一个像 Prettier 一样的最小配置接口，最终用户甚至不需要担心底层的细节，[click] 但在他们真正需要时仍然可以完全控制。
-->

---

# 项目感知的配置

<div text-gray flex="~ items-center gap-1" v-click>
例子： <div i-logos-nuxt-icon inline-block /> Nuxt ESLint
</div>

<div grid="~ cols-2 gap-4" h="80%">
<div
  v-click="1"
  flex="~ col gap-2 items-center justify-center"
  transition duration-500
  :class="$clicks < 2 ? 'scale-130 translate-x-55' : ''"
>
  <img src="/nuxt-eslint.png" w-90 rounded-lg shadow border="~ main" />
  <a href="https://eslint.nuxt.com" text-sm>eslint.nuxt.com</a>
</div>

<div flex="~ col items-center justify-center" forward:delay-500 pb-10 v-click>

```ts
// 由 Nuxt 根据当前项目的配置生成
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // 你的其他自定义配置
)
```

</div>
</div>

<!--
扁平配置还使得元框架可以提供项目感知的配置。

[click] 例如，在 Nuxt 中，我们有基于文件的路由、自动导入的组件、服务器 API 目录等。不同文件夹或不同名称下的文件可能有不同的用途和不同的约束。

因此在 Nuxt 中，我们有 Nuxt ESLint 模块 [click]，它根据用户的项目设置生成一个子 ESLint 配置文件。用户可以从中扩展并继续添加他们的自定义规则。

这是我们目前正在探索的扁平配置的一个方向，但我们相信社区会有更多有趣的方法。
-->

---
layout: fact
---

# ESLint 不只是一个 Linter{.important-text-3em}

<div v-click op50>他还是一个成熟且强大的 AST 工具包</div>

<!--
Another topic I'd like to bring up today, is the fact that ESLint is much more than a Linter.

To me, I see ESLint as a mature and powerful AST Toolkit that has a large ecosystem on its back.
-->

---

# <span op50>ESLint 也可以是...</span> <b v-click font-800>格式化工具</b>

<div grid="~ cols-2 gap-4" h="80%">
<div flex="~ col items-center justify-center">
  <img src="/eslint-stylistic.png" w-80 v-click />

  <div op75 text-lg v-click>
    集合了风格相关的 ESLint 规则。<br>格式化和 Lint 一步到位。
  </div>

  <a href="https://eslint.style" text-sm v-click>eslint.style</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  在 <div i-logos-visual-studio-code inline-block /> VS Code 中的配置
</div>

```json
{
  // 在保存时自动修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // 在编辑器中静默报错，但仍然应用自动修复
  "eslint.rules.customizations": [
    { "rule": "@stylistic/*", "severity": "off" }
  ]
}
```

</div>
</div>

<!--
ESLint 也可以是 [click] 格式化工具。

这当然不是新鲜事，因为自从一开始，许多项目就一直在以这种方式使用 ESLint。

虽然这个话题实际上有点争议，你可能会听到有人说你应该使用专用的格式化工具，比如 Prettier 或 dprint。对我来说，我认为这完全归结于那些 ESLint 的风格规则需要大量的维护工作。去年，ESLint 和 TypeScript ESLint 团队决定从核心中弃用这些风格规则。[click] 然后，我发起了 ESLint Stylistic 项目，将所有这些 JS、TS 和 JSX 的风格规则收集到这个组织中，并让社区继续维护它们。我继续使用 ESLint 作为格式化工具，因为我认为它比 Prettier 更灵活和可定制，这归功于 ESLint 的特性。

[click] 如果你使用 VS Code，你可以设置 `editor.codeActionOnSave` 在保存时自动修复 eslint 错误。并使用 `eslint.rules.customizations` 在你的 IDE 中静默风格规则，使它们更像一个格式化工具。对于其他代码编辑器，我相信也有类似的配置可以做到这一点。
-->

---

# <span op50>ESLint 也可以是...</span> <b v-click font-800>迁移工具 Codemod</b>

<div v-click>

<repo name="antfu/eslint-plugin-command" />

<video src="/eslint-plugin-command-half.mov" mt-4 w-130 saturate-110 rounded shadow border="~ main" controls />

</div>

<!--
一个 ESLint 规则本质上是一个函数，它接收代码和 AST，并报告错误以及可选的修复信息。

这意味着 ESLint 也可以是一个很好的 [click] codemod 工具。

例如，[click] 我制作了 `eslint-plugin-command` 来进行按需的微型 codemod。

正如你在视频中看到的，我们可以在箭头函数上方放置一个魔法注释 `to-function`。保存后，箭头函数将自动转换为函数声明，而无需手动移动代码。

类似地，你也可以使用 `to-arrow` 将其转换回箭头函数，使用 `keep-sorted` 对对象或数组进行排序，使用 `keep-unique` 确保数组唯一... 等等。

如果你了解一些 AST 的知识，编写你自己的一次性 codemod 规则来迁移你的代码库也不难。
-->

---

# <span op50>ESLint 也可以是...</span> <b v-click font-800>多种语言的 Linter</b>

<div scale-75 origin-left-top mb--28 mt--3 class="[&_td]:py1 [&_table]:w-130%" v-click="2">
<v-clicks>

| 语言 | 插件 | 维护者 |
| --- | --- | --- |
| <span i-catppuccin-markdown inline-block scale-110 translate-y-0.5 mr1 /> Markdown | [`@eslint/markdown`](https://github.com/eslint/markdown) | {@eslint} |
| <span i-catppuccin-css inline-block scale-110 translate-y-0.5 mr1 /> CSS | [`@eslint/css`](https://github.com/eslint/css) | {@eslint} |
| <span i-catppuccin-typescript inline-block scale-110 translate-y-0.5 mr1 /> TypeScript | [`@typescript-eslint`](https://typescript-eslint.io) | {@typescript-eslint} {@bradzacher} {@JoshuaKGoldberg} |
| <span i-catppuccin-vue inline-block scale-110 translate-y-0.5 mr1 /> Vue | [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) | {@ota-meshi} {@vuejs} |
| <span i-catppuccin-svelte inline-block scale-110 translate-y-0.5 mr1 /> Svelte | [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte) | {@ota-meshi} {@sveltejs} |
| <span i-catppuccin-astro inline-block scale-110 translate-y-0.5 mr1 /> Astro | [`eslint-plugin-astro`](https://github.com/ota-meshi/eslint-plugin-astro) | {@ota-meshi} |
| <span i-catppuccin-json inline-block scale-110 translate-y-0.5 mr1 /> JSON | [`eslint-plugin-jsonc`](https://github.com/ota-meshi/eslint-plugin-jsonc) | {@ota-meshi} |
| <span i-catppuccin-yaml inline-block scale-110 translate-y-0.5 mr1 /> YAML | [`eslint-plugin-yml`](https://github.com/ota-meshi/eslint-plugin-yaml) | {@ota-meshi} |
| <span i-catppuccin-toml invert hue-rotate-180 inline-block scale-110 translate-y-0.5 mr1 /> TOML | [`eslint-plugin-toml`](https://github.com/ota-meshi/eslint-plugin-toml) | {@ota-meshi} |
| <span i-catppuccin-graphql inline-block scale-110 translate-y-0.5 mr1 /> GraphQL | [`graphql-eslint`](https://github.com/dimaMachina/graphql-eslint) | {@dimaMachina} |
| <span i-catppuccin-html inline-block scale-110 translate-y-0.5 mr1 /> HTML | [`html-eslint`](https://github.com/yeonjuan/html-eslint) | {@yeonjuan} |
| <span i-catppuccin-markdown-mdx inline-block scale-110 translate-y-0.5 mr1 /> MDX | [`eslint-mdx`](https://github.com/mdx-js/eslint-mdx) | {@JounQin} |
| <span i-catppuccin-prettier inline-block scale-110 translate-y-0.5 mr1 /> 其他格式 | [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format) | {@antfu} |

</v-clicks>
</div>
<div v-click absolute right-15 bottom-15 bg-main border="~ main rounded-xl" text-purple p3 px4>
<a href="https://github.com/eslint/rfcs/blob/main/designs/2022-languages/README.md" target="_blank">
<span text-xl font-bold>ESLint RFC #99</span><br>
<span op75>ESLint Language Plugins</span>
</a>
</div>

---
layout: fact
---

# One for All{.important-text-3em}

<div text-lime text-2xl my2>一个配置适配 <b italic font-bold>所有</b> 项目</div>
<div text-purple text-2xl my2>一个工具适配 <b italic font-bold>所有</b> 需求</div>

<!--
总结一下今天的主题，我想 ESLint 的 One for All 可以体现在两个方面。
你可以拥有一个配置适用于各种不同的项目，
然后一个工具处理所有与代码检查和修改相关的事情。
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<Repo name="antfu/eslint-config" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-star-filled text="[0.8em]" /> 4.1k</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# @antfu/eslint-config

<div mb-10>

[![代码风格](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

</div>

## 安装向导

<div mt-2 />

```bash
npx @antfu/eslint-config@latest
```

<div mt-6 />

## 特性

<div mt-2 />

- 自动修复格式 <sup>旨在独立使用，**无需** Prettier</sup>
- 合理的默认设置，最佳实践，只需一行配置
- 支持 TypeScript、JSX、Vue、JSON、YAML、Toml、Markdown，开箱即用
- 带有强主见，但高度可定制
- 轻松组合通过 Flat Config 进行组合
- 可选支持 React、Svelte、UnoCSS、Astro、Solid
- 可选格式化器支持格式化 CSS、HTML、XML 等
- **风格原则**：阅读最简，稳定 diff，一致性
  - 排序的导入，尾随逗号
  - 单引号，无分号
  - 使用 ESLint Stylistic
- 默认尊重 `.gitignore`

</div>
</div>

<!--
如果你想了解更多，可以查看我的个人 ESLint 配置，其中使用了我今天提到的所有技巧。

虽然最初这个配置主要是用于我的个人项目，我并没有打算被其他项目使用。后来慢慢变得如此受欢迎，说实话我也有些受宠若惊。它在 GitHub 上有 4.1K Star，并且在 GitHub 上被将近 4 万个开源仓库使用。

这里也要感谢 三咲智子 为提供了最初的 eslint-config 架构设计，让我钻入这个坑，研究出了这些实践。

[click] 我在这里介绍我的配置并不是想要安利你用它，但主要是希望它能成为你构建属于自己或团队的，强大且灵活的共享配置的一个参考。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢

幻灯片在 [antfu.me](https://antfu.me)

---

# 附录：🦀 Rust Linter <span text-4xl v-click> - <span font-800 text-blue3><span hue-rotate-180>🦀</span> 为时尚早</span></span>

<div grid="~ cols-2 gap4 items-center justify-center" px25 h-95>

<div>

<div v-click>Rust 工具链仍面临的问题</div>

<v-clicks>

- 插件系统

- 多语言支持
- 自定义规则
- 灵活性 >>> 运行速度
- 基于类型的规则

</v-clicks>

</div>

<div text-sm flex="~ col items-center" v-click >

<a text-2xl href="https://chatgpt.com/share/674e8ffc-822c-800b-bb35-bca788ce6241" target="_blank">ChatGPT 的总结</a>

<QRCode w-40 mix-blend-lighten text="https://chatgpt.com/share/674e8ffc-822c-800b-bb35-bca788ce6241"/>

</div>

</div>
