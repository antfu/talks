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

{Vite} {Vue} {Nuxt} 核心團隊成員<br>
{Vitest} {Slidev} {UnoCSS} {VueUse} {Type Challenges} 作者<br>
{ESLint Stylistic} {Shiki} {Twoslash} 維護者<br>
就職於 {NuxtLabs}<br>

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
  <div><a href="https://space.bilibili.com/668380" target="_blank" class="border-none! font-300" ws-nowrap>AnthonyFu 一個托尼</a></div>
</div>

<img src="https://antfu.me/avatar.png" absolute top-36 right-30 w-40 rounded-full />

<!--
...

如你所見，我對開源充滿熱情，這驅使我參與和制作了很多專案。我享受制作工具和探索解決方案的過程。

比如現在看到的 PTT 是使用一個叫做 Slidev 的工具制作的，它是一個基於 Markdown 和 Web 技術制作的投影片工具。起源於我對於傳統投影片工具對代碼塊的展示沒有很好的支持這一痛點，搞出的一套針對程序員演講的解決方案。

同樣，當我去年開始深入研究 ESLint 及其生態系統時，我發現新的 ESLint 模式有著有很大的潛力但尚未被充分發掘。

所以今天，我想與大家分享我在最近探索過程中發現的一些見解和實踐。
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
    <div text-teal2 v-click>一統江湖</div>
    <div text-lime2 v-click>化繁為簡</div>
  </div>
</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col items-center" text-left>
  <img src="/webconf-taiwan.svg" alt="WebConf Taiwan" w35 mb2 />
  <div text-xs opacity-75>2024 年 12 月 28 日</div>
</div>

<!--
自從 ESLint 發布以來已經有 11 年了，目前它毫無疑問是 JavaScript 生態系統中最受歡迎的工具之一，幾乎是任何用到 JavaScript 的專案的標配。但盡管它已經存在了這麽長時間，但它仍然在不斷改進和發展中。

今天，我想給這次的分享取一個非常野心勃勃的主題「ESLint, One for All, Made Easy」

我讓 ChatGPT 幫我翻譯了一下，它推薦我叫作「化繁為簡，一統江湖」（笑

希望和大家分享一些使用 ESLint 的新視角和模式。
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
  <span v-click op75 forward:delay-400 text-2xl>於 <TimeAgo date="2024-04-05" font-bold /> 發布</span>
</div>
</h2>

<img src="/eslint-v9.png" v-click mt4 w-60 rounded-lg shadow forward:delay-400 />
</div>

<!--
ESLint 9.0 [click] 在八個月前發布了。

[click] 這個大版本的亮點是推出了一個新的設定檔系統，稱為 Flat Config 扁平化設定檔。
-->

---
layout: quote
---

# 🙋 聽說過 <span text-hex-8080f2 font-bold><span v-mark="0">ESLint Flat Config</span></span> 嗎？

---
layout: quote
---

# 🙋 用上 <span text-hex-8080f2 font-bold>Flat Config</span> 了嗎？

<!--
...

對於還沒有用上的同學，希望聽完我今天的分享，可以給你一個理由。
-->

---

<div grid="~ cols-2 gap-6" h-full>
<div>

## 傳統設定檔 <sup text-base op50 translate-y--2 inline-block>.eslintrc</sup>

<div mt-4 h-42>

<v-clicks at="3">

- 多種檔案來源 `.eslintrc` `.eslintrc.js` `.eslintrc.json` `package.json` 等
- 基於約定的 `extends`
- 基於 npm 包名的外掛系統
- 繼承樹可能很複雜

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

## 扁平設定檔

<div mt-4 h-42>

<v-clicks at="3">

- 單一來源 `eslint.config.js` <sup op75>或是 `.cjs` `.mjs`</sup><br><span op0>-</span>
- 基於 JS 原生的顯式匯入
- 外掛系統基於匯入的對象 <sup op75>可以重命名外掛</sup>
- 可組合，更容易追溯

</v-clicks>

</div>
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--160px': ''">

```js {*|2-3,8-9|4-5,11-14|*}{at:4}
// eslint.config.js
import typescript from '@eslint-typescript/eslint-plugin'
import eslint from '@eslint/js'
import n from 'eslint-plugin-n'
import vue from 'eslint-plugin-vue'

export default [ // 導出一個設定檔數組
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: {
      vue,
      node: n, // 重命名外掛
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
如果你從未聽說過它或還沒有深入研究文件。
這裏，讓我為你快速比較一下傳統的 eslintrc 設定檔 [click] 和新的扁平化設定檔 [click]。

區分這兩種設定檔格式相當簡單。[click] 傳統設定檔的檔案名為 `.eslintrc` 支持各種擴展名，也可能從你的 `package.json` 中讀取。而扁平化設定檔則只會從 `eslint.config.js` 中加載，這是一個 JavaScript 設定檔檔案，作為唯一的來源。

[click] 在覆用共享設定檔時，傳統設定檔格式隱式地使用基於約定的 `extends` 屬性，它接受字符串，並根據提供的名字從本地 `node_modules` 中加載該設定檔。你需要稍微了解一下約定，才能知道它是如何解析的。而在扁平設定檔中，我們使用原生的 ESM 匯入，更加顯式，並且給你更多的控制權。

[click] 對於外掛，舊的設定檔接受一個字符串數組，這同樣是基於約定，並與外掛的 npm 包名耦合。現在在扁平設定檔中，它接受一個對象。這意味著你現在可以輕松重命名外掛，或者切換到一個 fork 而不必強制更改設定檔中的每個規則。

[click] 此外，`extends` 的繼承性質可能會導致非常覆雜的樹結構，因為共享設定檔中也可以有嵌套的 `extends`。在 flat 設定檔中，它被大大簡化了，你顯式地將共享設定檔匯入為多個對象或數組，並將它們組合成一個單一的平面設定檔。
-->

---

## 扁平設定檔推出時間線

<Timeline mt2 />

<v-clicks>

- RFC 於 2019 年 1 月創建
- 在 `v8.21.0` 中作為實驗性功能推出
- 在 `v8.45.0` 中變為穩定版
- 在 `v9.0.0` 中成為默認設定檔
- JavaScript 檔案作為設定檔，具有完全控制權
- 簡化的繼承和覆蓋
- 靈活、動態、可定制

</v-clicks>

<!--
[click] 交代一下背景故事，這裏有一個我繪制的時間線圖來展示一下歷史。雖然扁平設定檔對一些人來說可能是新的，但實際上它已經計劃了 5 年之久。[click] 這個 RFC 於 2019 年 1 月創建，[click] 第一個實驗性實現出現在 v8.21.0 版本中，那是兩年前的事了。[click] 它在 v8.45.0 版本中變為穩定版，[click] 並在最近的 v9.0.0 版本中成為默認設定檔。在此期間，ESLint 團隊發布了多篇博客文章來解釋他們引入新格式的原因，並分享了推出的路線圖。這是一個跨越 5 年的宏大計劃的，盡管在實施的過程中不能說是無縫遷移，但是還是不可否認 ESLint 團隊付出的巨大的努力，這在開源專案中也是非常罕見的。

所以，正如我們在前一張投影片中提到的，[click] 扁平設定檔的最大好處是現在它是用 JS 編寫的，你可以完全控制。[click] 它使用原生的 import 來解析外掛和設定檔，使得繼承和覆蓋變得更加簡化。[click] 因為它完全在 JavaScript 中，共享設定檔可以是接受用戶選項的工廠函數；用戶可以有更多的能力根據他們的具體需求進行定制。
-->

---

# 遷移工具 [`@eslint/migrate-config`](https://www.npmjs.com/package/@eslint/migrate-config) <sup text-lime bg-lime:15 px1.5 rounded text-sm>官方</sup>

CLI 工具將舊設定檔轉換為扁平設定檔

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
對於還在使用舊設定檔的同學，官方提供了一個 CLI 遷移工具 `@eslint/migrate-config`，它可以自動將你的舊設定檔檔案轉換為扁平設定檔。[click] 在此過程中，還會自動引入一些兼容性的運行時庫來模擬新設定檔的行為。

我建議你查看 ESLint 文件和遷移指南以獲取更詳細的說明。
-->

---
layout: fact
---

# 工具生態{.important-text-3em}

隨著新的 Flat Config 帶來的新工具和可能性

<!--
現在，讓我們談談這種新格式所帶來的有趣的新工具和可能性。
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

- 設定檔可視化
- 理解設定檔組合
- 內置設定檔
- 檔案路徑測試器

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
第一個介紹的是 ESLint Config Inspector - 一個可視化的開發工具，允許你檢查和操作最終解析的設定檔。

[click] 你可以在專案根目錄下運行 `eslint --inspect-config` 來嘗試它，它會在瀏覽器中打開一個帶有 UI 的頁面，就像你在右邊看到的那樣。

[click] 首先，它會渲染你所有的設定檔項。你可以看到所有的設定檔都列在這裏，因為它是扁平的。這裏我有一個相當覆雜的設定檔設置，包含了很多設定檔項。但通過每個設定檔提供的名稱，你可以輕松地看到和理解它們的用途。

[click] 你還可以展開每個專案，查看它們如何貢獻到最終的設定檔中，比如啟用了多少規則，或者它們的目標檔案類型是什麽，等等。

[click] 在每個規則中，你還可以看到它們的選項，一個簡短的描述，以及一個指向它們文件頁面的鏈接。

[click] 由於在 ESLint 中，你可以有不同的規則集應用於不同的檔案類型，或者更細粒度地應用於它們的確切檔案路徑。在設定檔檢查器中，你還可以輸入檔案路徑來測試這些規則是如何為該檔案啟用的。

在另一個標簽中，你還可以瀏覽每個可用的規則，鑒於你已經安裝的外掛。你可以過濾它們，查看你正在使用哪些規則，哪些規則你沒有使用，哪些是推薦的，哪些是已棄用的。

[click] 這裏我有我的設定檔檔案作為示例。這個設定檔是一個工廠函數，接受一些相當高級的選項。通過設定檔檢查器，我們可以看到它是如何根據我們提供的選項解析的。我們還可以嘗試更改選項，看看它如何影響結果。例如，我還可以提供我的 tsconfig 的路徑，這將自動為我啟用類型感知的規則。
-->

---

## Flat Config Utils <sup text-teal bg-teal:15 px1.5 rounded text-sm>社區</sup>

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
  typescript.configs.recommand, // 數組，自動解構
  unocss() // 自動解析 Promise
)
  .append( // 可鏈式擴展
    vue.configs['vue3-recommand']
  )
  // 使用名稱或索引覆蓋任何設定檔
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
為了讓設定檔自定義更容易，我還制作了一個名為 `eslint-flat-config-utils` 的小型庫。

[click] 例如，這裏有一個我們可能會使用的扁平設定檔。根據每個共享設定檔的構造方式，有些可能是一個普通的設定檔對象，有些可能是一個數組，還有些可能是一個返回對象、數組甚至是 Promise 的構造函數。當你將它們一起使用時，通常需要你自己將它們合並成一個單一的數組。

[click] 使用設定檔工具，[click] 我制作了一個名為 `compose` 的實用函數，[click] 它會自動解析不同類型的設定檔，解析 Promise 並將它們合並在一起。

[click] 它還提供了一些可鏈式操作，你可以在任何你想要的位置插入額外的設定檔，或者覆蓋某些設定檔而無需手動處理合並。
-->

---

## ESLint Typegen <sup text-teal bg-teal:15 px1.5 rounded text-sm>社區</sup>

<Repo name="antfu/eslint-typegen" op50 />

<v-clicks>

![](/eslint-typegen.png){.w-200.rounded-lg.shadow.border.border-main}

</v-clicks>

<!--
然後，由於扁平設定檔的靈活性以及其提供的完整上下文，它還使類型生成成為可能。[click]

只需將你導出的整個設定檔數組用 typegen 函數包裹，它將基於你安裝的所有外掛生成一個本地的 .d.ts 檔案。這為你提供了所有使用規則的自動補全和類型檢查。
-->

---
layout: fact
---

# One for All{.important-text-3em}

一個設定檔適配各種不同的專案

<!--
所以在這裏，我想再次強調主題 - 一統江湖，或者說，一個打十個。

通過最大化的靈活性和可定制性，現在可以擁有一個單一的共享設定檔，覆蓋所有不同類型的專案。
-->

---

<div grid="~ cols-2 gap-8">

<div flex="~ col gap-2">

### 舊設定檔

```json {*|3-7|*|10-14|*}{at:1}
{
  "extends": [
    "@antfu/eslint-config",
    "@antfu/eslint-config-ts",
    "@antfu/eslint-config-vue",
    "@antfu/eslint-config-vue-ts"
    // ...需要提供所有的組合
  ],
  "rules": {
    // 為了修改一項設定檔需要非常的多的手動覆蓋
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "jsx-indent": ["error", 4],
    "vue/indent": ["error", 4]
  }
}
```

</div>
<div flex="~ col gap-2">

### 扁平設定檔

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
  設定檔可以接受高階用戶選項
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 2 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  一個設定檔適用於所有專案
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 3 ? 'text-green' : ''" >
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    像 Prettier 一樣提供最小設定檔，開箱即用
  </span>
</div>

<div v-click class="slidev-vclick-target">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="5">
    同時擁有 ESLint 完整靈活的可自定義能力
  </span>
</div>

</div>
</div>

</div>

<!--
這裏我們可以快速比較一下

[click] 在新的扁平設定檔中，共享設定檔可以是一個接受用戶選項的工廠函數，這是在舊設定檔中無法做到的。想象一下，如果我希望我的設定檔同時適用於 TypeScript 和非 TypeScript 專案，Vue 和非 Vue 專案，我將需要做一個 monorepo 來發布不同組合的設定檔。正如你所看到的，這種方式並不具備良好的擴展性，因為每增加一個選項，我們的組合數量就會翻倍。

[click] 扁平設定檔允許你提供語義化的選項來動態切換每個功能，使得一個單一的設定檔能夠適應不同的專案。

[click] 因此，我們還可以進行高級抽象來吸收底層的覆雜性，並提供一個像 Prettier 一樣的最小設定檔接口，最終用戶甚至不需要擔心底層的細節，[click] 但在他們真正需要時仍然可以完全控制。
-->

---

# 專案感知的設定檔

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
// 由 Nuxt 根據當前專案的設定檔生成
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // 你的其他自定義設定檔
)
```

</div>
</div>

<!--
扁平設定檔還使得元框架可以提供專案感知的設定檔。

[click] 例如，在 Nuxt 中，我們有基於檔案的路由、自動匯入的組件、服務器 API 目錄等。不同檔案夾或不同名稱下的檔案可能有不同的用途和不同的約束。

因此在 Nuxt 中，我們有 Nuxt ESLint 模塊 [click]，它根據用戶的專案設置生成一個子 ESLint 設定檔檔案。用戶可以從中擴展並繼續添加他們的自定義規則。

這是我們目前正在探索的扁平設定檔的一個方向，但我們相信社區會有更多有趣的方法。
-->

---
layout: fact
---

# ESLint 不只是一個 Linter{.important-text-3em}

<div v-click op50>他還是一個成熟且強大的 AST 工具包</div>

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
    集合了風格相關的 ESLint 規則。<br>格式化和 Lint 一步到位。
  </div>

  <a href="https://eslint.style" text-sm v-click>eslint.style</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  在 <div i-logos-visual-studio-code inline-block /> VS Code 中的設定檔
</div>

```json
{
  // 在保存時自動修覆
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // 在編輯器中靜默錯誤顯示，但仍然應用自動修覆
  "eslint.rules.customizations": [
    { "rule": "@stylistic/*", "severity": "off" }
  ]
}
```

</div>
</div>

<!--
ESLint 也可以是 [click] 格式化工具。

這當然不是新鮮事，因為自從一開始，許多專案就一直在以這種方式使用 ESLint。

雖然這個話題實際上有點爭議，你可能會聽到有人說你應該使用專用的格式化工具，比如 Prettier 或 dprint。對我來說，我認為這完全歸結於那些 ESLint 的風格規則需要大量的維護工作。去年，ESLint 和 TypeScript ESLint 團隊決定從核心中棄用這些風格規則。[click] 然後，我發起了 ESLint Stylistic 專案，將所有這些 JS、TS 和 JSX 的風格規則收集到這個組織中，並讓社區繼續維護它們。我繼續使用 ESLint 作為格式化工具，因為我認為它比 Prettier 更靈活和可定制，這歸功於 ESLint 的特性。

[click] 如果你使用 VS Code，你可以設置 `editor.codeActionOnSave` 在保存時自動修覆 eslint 錯誤。並使用 `eslint.rules.customizations` 在你的 IDE 中靜默風格規則，使它們更像一個格式化工具。對於其他代碼編輯器，我相信也有類似的設定檔可以做到這一點。
-->

---

# <span op50>ESLint 也可以是...</span> <b v-click font-800>遷移工具 Codemod</b>

<div v-click>

<repo name="antfu/eslint-plugin-command" />

<video src="/eslint-plugin-command-half.mov" mt-4 w-130 saturate-110 rounded shadow border="~ main" controls />

</div>

<!--
一個 ESLint 規則本質上是一個函數，它接收代碼和 AST，並報告錯誤以及可選的修覆信息。

這意味著 ESLint 也可以是一個很好的 [click] codemod 工具。

例如，[click] 我制作了 `eslint-plugin-command` 來進行按需的微型 codemod。

正如你在視頻中看到的，我們可以在箭頭函數上方放置一個魔法註釋 `to-function`。保存後，箭頭函數將自動轉換為函數聲明，而無需手動移動代碼。

類似地，你也可以使用 `to-arrow` 將其轉換回箭頭函數，使用 `keep-sorted` 對對象或數組進行排序，使用 `keep-unique` 確保數組唯一... 等等。

如果你了解一些 AST 的知識，撰寫你自己的一次性 codemod 規則來遷移你的代碼庫也不難。
-->

---

# <span op50>ESLint 也可以是...</span> <b v-click font-800>多種語言的 Linter</b>

<div scale-75 origin-left-top mb--28 mt--3 class="[&_td]:py1 [&_table]:w-130%" v-click="2">
<v-clicks>

| 語言 | 外掛 | 維護者 |
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

<div text-lime text-2xl my2>一個設定檔適配 <b italic font-bold>所有</b> 專案</div>
<div text-purple text-2xl my2>一個工具適配 <b italic font-bold>所有</b> 需求</div>

<!--
總結一下今天的主題，我想 ESLint 的 One for All 可以體現在兩個方面。
你可以擁有一個設定檔適用於各種不同的專案，
然後一個工具處理所有與代碼檢查和修改相關的事情。
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

[![代碼風格](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

</div>

## 安裝向導

<div mt-2 />

```bash
npx @antfu/eslint-config@latest
```

<div mt-6 />

## 特性

<div mt-2 />

- 自動修覆格式 <sup>旨在獨立使用，**無需** Prettier</sup>
- 合理的默認設置，最佳實踐，只需一行設定檔
- 支持 TypeScript、JSX、Vue、JSON、YAML、Toml、Markdown，開箱即用
- 帶有強主見，但高度可定制
- 輕松組合通過 Flat Config 進行組合
- 可選支持 React、Svelte、UnoCSS、Astro、Solid
- 可選格式化器支持格式化 CSS、HTML、XML 等
- **風格原則**：閱讀最簡，穩定 diff，一致性
  - 排序的匯入，尾隨逗號
  - 單引號，無分號
  - 使用 ESLint Stylistic
- 默認尊重 `.gitignore`

</div>
</div>

<!--
如果你想了解更多，可以查看我的個人 ESLint 設定檔，其中使用了我今天提到的所有技巧。

雖然最初這個設定檔主要是用於我的個人專案，我並沒有打算被其他專案使用。後來慢慢變得如此受歡迎，說實話我也有些受寵若驚。它在 GitHub 上有 4.1K Star，並且在 GitHub 上被將近 4 萬個開源倉庫使用。

這裏也要感謝 三咲智子 為提供了最初的 eslint-config 架構設計，讓我鉆入這個坑，研究出了這些實踐。

[click] 我在這裏介紹我的設定檔並不是想要安利你用它，但主要是希望它能成為你構建屬於自己或團隊的，強大且靈活的共享設定檔的一個參考。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 謝謝

投影片在 [antfu.me](https://antfu.me)

---

# 附錄：🦀 Rust Linter <span text-4xl v-click> - <span font-800 text-blue3><span hue-rotate-180>🦀</span> 為時尚早</span></span>

<div grid="~ cols-2 gap4 items-center justify-center" px25 h-95>

<div>

<div v-click>Rust 工具鏈仍面臨的問題</div>

<v-clicks>

- 外掛系統

- 多語言支持
- 自定義規則
- 靈活性 >>> 運行速度
- 基於類型的規則

</v-clicks>

</div>

<div text-sm flex="~ col items-center" v-click >

<a text-2xl href="https://chatgpt.com/share/674e8ffc-822c-800b-bb35-bca788ce6241" target="_blank">ChatGPT 的總結</a>

<QRCode w-40 mix-blend-lighten text="https://chatgpt.com/share/674e8ffc-822c-800b-bb35-bca788ce6241"/>

</div>

</div>
