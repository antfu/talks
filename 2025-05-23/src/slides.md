---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
title: The New Powerful ESLint Config with Type Safety
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
addons:
  - slidev-addon-graph
---

![](/af-logo-animated.svg){.w-30.mt--10.mb-5}

<!--
皆さん、おはようございます。

本日はこのように皆さんの前で お話しできることを 大変光栄に 思っております。

実は、<ruby>登壇<rp></rp><rt>とうだん</rt><rp></rp></ruby>が決まったのは<ruby>直前<rp></rp><rt>ちょくぜん</rt><rp></rp></ruby>だっ たのですが、このような<ruby>貴重<rp></rp><rt>きちょう</rt><rp></rp></ruby>な機会を くださった 主催者とスタッフの皆様に、心より感謝申し上げます。
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

<div lang="ja" font-jp text-4xl important-leading-14 mt30>
2ヶ月前に パリから<br>
東京に引っ越した！
</div>

<div lang="ja" font-jp v-click="2" text-2xl op75 pt10>
よろしくお願いします！
</div>

<img src="/tokyo-article.png" v-click="1" absolute top-0 right--12 w-140 />

<!--
僕は2ヶ月前にパリから東京に引っ越してきました。[click]そのことについては、僕のブログにも書いてあります。[click]

今、日本語を勉強中で、ここまでが 僕の日本語の限界です。

なので、ここからは英語で話させていただきます。

いつか、すべて日本語で<ruby>講演<rp></rp><rt>こうえん</rt><rp></rp></ruby>ができるよう、<ruby>努力<rp></rp><rt>どりょく</rt><rp></rp></ruby>してまいります。

みなさんよろしくお願いします！
-->

---
layout: cover
---

<h1 flex="~ col">
<div mt1 forward:delay-300 text-white:50 ml10 flex="~ col">
  <span font-hand text-1.3em text-purple>The New</span>
  <span v-click flex="~ gap-2 items-center" text-hex-8080f2>
    <div i-logos-eslint />
    ESLint Config
  </span>
  <span font-serif italic text-blue v-click><span font-hand op75>with</span> Type Safety</span>
</div>
</h1>

<div abs-br mx-10 my-11 flex="~ col items-end" text-right v-click="2">
  <img src="/tskaigi-white.svg" alt="TSKaigi" w30 mb1 />
  <div text-xs opacity-75>May 23, 2025</div>
</div>

<!--
So for today, I'd like to talk about the new ESLint Config, [click] what you can do with it, and [click] how how you can get type-safety and good developer experience for your configuration.

Almost 12 years since ESLint came out, at this moment, it's easily one of the most popular tools in the JavaScript ecosystem that almost every project uses. Despite it has been around for such a long time, it's a tool that is still constantly improving and evolving.
-->

---
layout: quote
---

# 🙋 Heard about the new ESLint <span text-hex-8080f2 font-bold><span v-mark="0">Flat Config</span></span>?

<div lang="ja" font-jp text-4xl>
<span text-hex-8080f2 font-bold>フラットコンフィグ</span> 知っていますか？
</div>

<!--
Before we start, I'd like to do a quick survey here. If you have heard about the new ESLint Flat Config, could you please raise your hand for me?

フラットコンフィグ知っていますか？手をあげてください。
-->

---
layout: quote
---

# 🙋 Using <span text-hex-8080f2 font-bold>Flat Config</span> already?

<div lang="ja" font-jp text-4xl>
<span text-hex-8080f2 font-bold>フラットコンフィグ</span> を使っていますか？
</div>

<!--
And how many of you are using the Flat Config already?

フラットコンフィグを使っているの方？
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
  <span v-click op75 forward:delay-400 text-2xl>Released <TimeAgo date="2024-04-05" /></span>
</div>
</h2>

<div grid="~ cols-2 gap-4" mt4>
  <div v-click forward:delay-400 flex="~ col items-center gap-2" transition duration-500 :class="$clicks < 3 ? 'translate-x-31' : ''">
    <img src="/eslint-v9.png" w-60 rounded-lg shadow  />
    <div text-sm op50>2024-04-05</div>
  </div>
  <div v-click forward:delay-400 flex="~ col items-center gap-2">
    <img src="/eslint-retrospective.png" w-60 rounded-lg shadow />
    <div text-sm op50>2025-05-22</div>
  </div>
</div>
</div>

<!--
So, ESLint version 9.0 was actually released [click] over a year ago.

[click] The main highlight of this major version is the rolling out of a new configuration system for ESLint called the Flat Config.
There is a blog post that explains the motivation and the design of the new config system.

[click] And just at the right time, yesterday, the ESLint team also published a new post to review the year since the release. If you are interested, please do check it out.
-->

---
layout: quote
disabled: true
---

# 🙋 Heard about the new ESLint <span text-hex-8080f2 font-bold><span v-mark="0">Flat Config</span></span>?

<!--
Before we start, I'd like to do a quick survey here. If you have heard about the new ESLint Flat Config, could you please raise your hand for me?
-->

---
layout: quote
disabled: true
---

# 🙋 Using <span text-hex-8080f2 font-bold>Flat Config</span> already?

<!--
OK, And how many of you are already using or migrated to the flat config?

Alright, that's more than I was expected. It's pretty cool. Thank you!

For those who haven't on the Flat config yet, in today's talk, I am here to tell you why you should :)
-->

---

<div grid="~ cols-2 gap-6" h-full>
<div>

## Legacy Config <sup text-base op50 translate-y--2 inline-block>eslintrc config</sup>

<div mt-4 h-50>

<v-clicks at="3">

- Multiple formats `.eslintrc`, `.eslintrc.js`, `.eslintrc.json`, `package.json`, etc.
- Convention based `extends`
- Package name based `plugins`
- Inheritance tree can be complex
- No types

</v-clicks>

</div>
<div v-click="1" transition duration-800 :class="$clicks < 3 ? 'translate-y--200px' : $clicks < 6 ? 'translate-y--50px': ''">

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

## Flat Config

<div mt-4 h-50>

<v-clicks at="3">

- Single source <code text-sm>eslint.config.js</code> <sup op75>& `.mjs` `.cjs`</sup><br>also supports `.ts` file!
- Explicit native imports
- Plugins are objects <sup op75>capability to rename plugins</sup>
- Composable, easier to trace back
- TypeScript friendly

</v-clicks>

</div>
<div v-click="2" transition duration-800 delay-50 :class="$clicks < 3 ? 'translate-y--200px' : $clicks < 6 ? 'translate-y--50px': ''">

```js {*|2-3,8-9|4-5,11-14|*}{at:4}
// eslint.config.js
import typescript from '@eslint-typescript/eslint-plugin'
import eslint from '@eslint/js'
import n from 'eslint-plugin-n'
import vue from 'eslint-plugin-vue'

export default [ // export an array of configs
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  {
    plugins: {
      vue,
      node: n, // do a rename here
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
In case you have never heard about it or haven't dig into the docs yet. Here, let me make a quick comparison between the legacy eslintrc config [click] and the new flat config for you. [click]

To differentiate between those two configuration formats is rather straightforward. [click] The legacy config is named with `.eslintrc` that supports various extensions which might also read from your `package.json`. The flat config, on the other hand, would only be loaded from `eslint.config.js`, a JavaScript config file as the single source of truth. And also of course, they recently added the TypeScript support so you can also use `eslint.config.ts`.

[click] When it comes to reusing the shared config, the legacy config format implicitly uses the conventional-based `extends` property to load that config from your local `node_modules`. You would need to learn the convention a little bit to know how it resolves. While in the flat config we use the native import, where it's more explicit, have a lot more controls.

[click] For plugins, it used to take an array of strings, which is again, convention-based and coupled with the plugins' package name. Now in the flat config, it takes a named object for plugins. This means you can now rename plugins easily, or switch to a fork without being forced to change every rule in your config.

[click] Also, the inheritance nature of `extends` might result in a very complex tree structure as the shared configs can also have nested `extends` inside. In the flat config, it gets simplified a lot, where you explicitly import the shared configs as multiple objects or arrays, and compose them into a single flat one.

[click] And finally, the legacy config is usually a JSON without much type safety. While the flat config is a JavaScript file, which is a lot easier to ensure the type safety.
-->

---

## Flat Config

<Timeline mt2 />

<v-clicks>

- RFC was created at January 2019
- Experimental in `v8.21.0`
- Stable since `v8.45.0`
- Default since `v9.0.0`
- Ships type declarations since `v9.10.0` (`@types/eslint` is no longer needed)
- Supports TypeScript config since `v9.18.0` (`eslint.config.ts`)

</v-clicks>

<!--
[click] For a little bit more context, Here is a graph I drew to demonstrate the timeline. While the flat config might sound new to some of you, it has actually been planned for 5 years already. [click] The RFC was created in January 2019, [click] first implementation available in v8.21.0 as experimental, which was already 3 years ago. [click] It became stable in v8.45.0, [click] and then became the new default in v9.0.0. In between, the ESLint team has published multiple blog posts to explain the reasons why they want to introduce the new format, and shared the roadmap of rolling out. That's a lot of effort spent across this 5 years plan - huge respect to the ESLint team.

[click] In v9.10.0, ESLint ships official TypeScript definitions, which means you don't need to install `@types/eslint` anymore. [click] And in v9.18.0, it also supports TypeScript config as we mentioned before.
-->

---

# Migration [`@eslint/migrate-config`](https://www.npmjs.com/package/@eslint/migrate-config)

CLI tool to convert legacy config to flat config

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
Before we talk about the new exciting stuff, let me first introduce you the tool for migrating your legacy config to the new flat config, in case you might need them.

We have an official CLI `@eslint/migrate-config` that automatically convert your legacy config file to flat config. [click] Some runtime utilities for compatibility will be introduced automatically along the way as well.

I would recommend you check the ESLint docs and migration guide for more detailed instructions.
-->

---
layout: fact
---

# Toolings{.important-text-3em}
New tools and possibilities with Flat Config

<!--
And now, let's talk about the interesting new tools and possibilities that are enabled by this new format.
-->

---
glow: left
---

<div w="40%">

## Config Inspector <sup text-purple bg-purple:15 px1.5 rounded text-sm>Official</sup>

<div mt-4 />
<v-click>

```bash
eslint --inspect-config
```

</v-click>
<div mt-4 />

<v-clicks>

- Visualize your config
- Understand the composition
- In-place documentations
- File path tester

</v-clicks>
<div mt-4 />
<v-click>

<<< ./eslint.demo.config.ts {monaco-write}{height:'220px'}

</v-click>
</div>

<InspectorIframe v-click="1" />

<div v-show="false">
<!-- This block is for type discovery -->

```ts {monaco}
import antfu from '@antfu/eslint-config'
```

</div>

<!--
The first one is the ESLint Config Inspector - a visualized DevTools, that allows you to inspect and play with your final resolved configs.

[click] You can try it by running `eslint --inspect-config` in your CLI under the project root where you have the flat config file, and it will open a browser page with UI, like the one you see on the right.

[click] So, the first thing it does is to render each config item you have. You can see all configs listed here, because it's flat. Here I have a rather complex config setup with many config items. But with the name provided by each config, you can easily see and understand the purpose for each of them.

[click] You can also expand each item to see how it contributes to the final config, like how many rules enabled, or what's their target file types, etc.

[click] In each rule, you can also see their options, a short description, and also, a link to their documentation page.

[click] Since in ESLint, sometimes it's hard to know which file has which rules enabled. In the config inspector, you can also provide a file tester.

In another tab, you can also browse each rule that is available, given the plugins you have installed. You can filter them and see which rules you are using, which rules you don't, which are recommended ones, and which are deprecated.

[click] Here, I have my config preset as an example. The code frame here reflects my eslint config file on the disk. The config is a factory function that takes some rather high-level options. With the config inspector, we could see how it was resolved based on the options we provided. We could also try to change the options and see how it affects the result. For example, I could also provide it the path of my tsconfig, which will enable the type-aware rules for me automatically.
-->

---

<div grid="~ cols-2 gap-8">

<div flex="~ col gap-2">

### Legacy Config

```json {*|3-7|*|10-14|*}{at:1}
{
  "extends": [
    "@antfu/eslint-config",
    "@antfu/eslint-config-ts",
    "@antfu/eslint-config-vue",
    "@antfu/eslint-config-vue-ts"
    // ...provide every combination?
  ],
  "rules": {
    // ...a lot overrides
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4],
    "jsx-indent": ["error", 4],
    "vue/indent": ["error", 4]
  }
}
```

</div>
<div flex="~ col gap-2">

### Flat Config

```ts {*|4-5|*|*|6-8|*}{at:1}
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
  Shared configs accept user options.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 2 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  One config adapts to all projects.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 3 ? 'text-green' : ''">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  Type-safe, with inline jsdocs documentation.
</div>

<div v-click class="slidev-vclick-target" :class="$clicks === 4 ? 'text-green' : ''" >
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="6">
    Simple configuration like Prettier.
  </span>
</div>

<div v-click class="slidev-vclick-target">
  <div i-ph-check-circle-duotone text-green inline-block translate-y-2px />
  <span v-mark.green.delay400="6">
    Powerful and flexible like ESLint.
  </span>
</div>

</div>
</div>

</div>

<!--
Here we can do a quick comparison to show what's new capabilities of the flat config.

[click] In the new flat config, a shared config can be a factory function that takes user options, which we couldn't do in the legacy config. Imagine if I want my config to work in both TypeScript and non-TypeScript projects, Vue and non-Vue projects, I will need to do a monorepo to publish configs for different combinations. As you can see, it doesn't scale well, we are doubling the amount of combinations for each option.

[click] The flat config allows you to provide semantic options to toggle each feature dynamically. Making one single config able to adapt to different projects.

[click] Also, it's just a JavaScript file, you can also provide types and jsdocs to your config, making it type-safe and self-documented.

[click] Because of flexibility, we could also have high-level abstraction to absorb the underlying complexity, and provide a minimal configuration interface like Prettier, where end users don't even need to worry about the underlying details, [click] but still have all the control to do so when they really want to. [click]
-->

---

## Flat Config Utils <sup text-teal bg-teal:15 px1.5 rounded text-sm>Community</sup>

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

// (pesudo code for demo)
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
  typescript.configs.recommand, // auto spread
  unocss() // auto await in parallel
)
  .append( // chainable extensions
    vue.configs['vue3-recommand']
  )
  // override any configs with their name or index
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
To make config customization easier, I also made a small library called `eslint-flat-config-utils`.

[click] For example, here is a flat config we might have. Depending on how each shared config is constructed, some might be a plain config object, some might be an array, and some might be a constructor that returns an object, an array or even a Promise. When you use them together, it's usually your responsibility to join them together as a single array.

[click] With the config utils, [click] I made a utility function called `compose`, [click] which will automatically resolve the different types of configs, resolve the promise and merge them together.

[click] It also provides some chainable actions where you could insert extra configs anywhere you want, or override some config without the need to handle the merge manually.
-->

---

## ESLint Typegen <sup text-teal bg-teal:15 px1.5 rounded text-sm>Community</sup>

<Repo name="antfu/eslint-typegen" op50 />

<v-clicks>

![](/eslint-typegen.png){.w-200.rounded-lg.shadow.border.border-main}

</v-clicks>

<!--
And then, thanks to the flexibility and also the full context available in the flat config, it also make the type generation possible. I made another tool called `eslint-typegen`. [click]

Simply wrap the entire config array you exported with the typegen function, it will generate a local .d.ts file based on all the plugins you have installed. This provides you with autocomplete and typechecks for all the rules are you using.
-->

---
clicks: 5
---

## How it works

<div grid="~ cols-[1fr_2fr] gap-4">

<TypeGenExample h-100 w-70 />

<div v-click="4">

```ts {*|5-9}{at:5}
// eslint-typegen.d.ts
// Automatically generated by eslint-typegen
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce getter and setter pairs in objects and classes
   * @see https://eslint.org/docs/latest/rules/accessor-pairs
   */
  'accessor-pairs'?: Linter.RuleEntry<AccessorPairs>
  /**
   * Having line breaks styles to object, array and named imports
   * @see https://github.com/antfu/eslint-plugin-antfu/blob/main/src/rules/consistent-chaining.md
   */
  'antfu/consistent-chaining'?: Linter.RuleEntry<AntfuConsistentChaining>
  // ...
}
```

</div>
</div>

<!--
Under the hood, this is made possible by the `typegen()` function.

[click] As it takes the entire config array and passthrough, it can traverse all the configs to get the plugins instance.

[click] From the plugins instance, we can get all the rules available and retrieve the JSON schema each rules defined.

[click] With that, we use `json-schema-to-typescript` to generate the types,

[click] and then save it to the `typegen.d.ts` file like the code on the right.

[click] The d.ts file will augment back to the ESLint types to provide type informations on rules.

With that, we got the accurate type for all the plugins, without the need for the plugins to change and provide their own types.
-->

---
layout: fact
---

# ESLint is More than a Linter{.important-text-3em}
Mature and powerful AST Toolkit

<!--
Another topic I'd like to bring up today, is the fact that ESLint is much more than a Linter.

To me, I see ESLint as a mature and powerful AST Toolkit that has a large ecosystem on its back.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Formatter</b>

<div grid="~ cols-2 gap-4" h="80%">
<div flex="~ col items-center justify-center">
  <img src="/eslint-stylistic.png" w-80 v-click />

  <div op75 text-lg v-click>
    Collection of stylistic ESLint rules.<br>Formatting and linting in one go.
  </div>

  <a href="https://eslint.style" text-sm v-click>eslint.style</a>
</div>

<div flex="~ col items-center justify-center" v-click>

<div flex="~ gap-2 items-center">
  Configs in <div i-logos-visual-studio-code inline-block /> VS Code
</div>

```json
{
  // Auto fix on save
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },

  // Silent the stylistic rules in you IDE,
  // but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "@stylistic/*", "severity": "off" }
  ]
}
```

</div>
</div>

<!--
I want to say that ESLint can also be a [click] Formatter.

This is certainly not new, as many projects have been using ESLint that way since the very beginning.

Last year, ESLint and the TypeScript ESLint teams decided to deprecate those stylistic rules from the core. [click] And then, I initiated the ESLint Stylistic project, [click] gathering all those stylistic rules for JS, TS, and JSX into [click] this organization and making a community keep maintaining them. I keep using ESLint as formatter as I see it much more flexible and customizable than Prettier due to ESLint's nature.

[click] If you are using VS Code, you can set `editor.codeActionOnSave` to auto-fix eslint errors on save. And use `eslint.rules.customizations` to silent stylistic rules in your IDE so they work more like a formatter. I believe there are similar configs for doing the same for other code editors.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Codemod</b>

<div v-click>

<repo name="antfu/eslint-plugin-command" />

<video src="/eslint-plugin-command-half.mov" mt-4 w-130 saturate-110 rounded shadow border="~ main" controls />

</div>

<!--
A rule in ESLint is essential a function that takes the code and AST, reporting errors with optional fix information.

This means that ESLint can also be a nice tool for [click] codemod.

For example, [click] I made `eslint-plugin-command` to do on-demand micro-codemod.

As you can see in the video, we could put a magic comment saying `to-function` right above an arrow function. Upon saving, the arrow function will be automatically converted into the function declaration, without you to manually move things around.

Similarly, we can also sort an object or array with `keep-sorted`, make sure an array is unique with `keep-unique`... etc.

If you learn a little bit about AST, it shouldn't be hard to write your one-off codemod rules to migrate your codebase as well.
-->

---

# <span op50>ESLint can be a...</span> <b v-click font-800>Linter for other Languages</b>

<div scale-75 origin-left-top mb--28 mt--3 class="[&_td]:py1 [&_table]:w-130%" v-click="2">
<v-click>

| Language | Plugin | Maintainers |
| --- | --- | --- |
| <span i-logos-typescript-icon inline-block align-middle /> TypeScript | [`@typescript-eslint`](https://typescript-eslint.io) | {@typescript-eslint} {@bradzacher} {@JoshuaKGoldberg} |
| <span i-logos-vue inline-block align-middle /> Vue | [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue) | {@ota-meshi} {@vuejs} |
| <span i-logos-svelte-icon inline-block align-middle /> Svelte | [`eslint-plugin-svelte`](https://github.com/sveltejs/eslint-plugin-svelte) | {@ota-meshi} {@sveltejs} |
| <span i-logos-astro-icon invert hue-rotate-180 inline-block align-middle /> Astro | [`eslint-plugin-astro`](https://github.com/ota-meshi/eslint-plugin-astro) | {@ota-meshi} |
| <span i-logos-json invert inline-block align-middle /> JSON | [`eslint-plugin-jsonc`](https://github.com/ota-meshi/eslint-plugin-jsonc) | {@ota-meshi} |
| <span i-vscode-icons-file-type-light-yaml inline-block align-middle /> YAML | [`eslint-plugin-yml`](https://github.com/ota-meshi/eslint-plugin-yaml) | {@ota-meshi} |
| <span i-logos-toml invert hue-rotate-180 inline-block align-middle /> TOML | [`eslint-plugin-toml`](https://github.com/ota-meshi/eslint-plugin-toml) | {@ota-meshi} |
| <span i-logos-graphql inline-block align-middle /> GraphQL | [`graphql-eslint`](https://github.com/dimaMachina/graphql-eslint) | {@dimaMachina} |
| <span i-vscode-icons-file-type-html inline-block align-middle /> HTML | [`html-eslint`](https://github.com/yeonjuan/html-eslint) | {@yeonjuan} |
| <span i-vscode-icons-file-type-mdx inline-block align-middle /> MDX | [`eslint-mdx`](https://github.com/mdx-js/eslint-mdx) | {@JounQin} |
| <span i-logos-prettier inline-block align-middle /> Other formats* | [`eslint-plugin-format`](https://github.com/antfu/eslint-plugin-format) | {@antfu} |

</v-click>
</div>
<v-click>

[ESLint RFC #99 - ESLint Language Plugins](https://github.com/eslint/rfcs/blob/main/designs/2022-languages/README.md)

</v-click>

<!--
And finally, I'd like to mention that ESLint can also [click] lint for many other languages other than JavaScript.

For example you can use ESLint to lint Vue, Svelte, Astro, JSON, YAML, TOML, GraphQL, HTML, MDX, etc. That's only a few I could list here.

[click] You can also check the ESLint's RFC #99, where they are trying to make ESLint more language agnostic to support the linting for more languages easier.
-->

---
layout: fact
---

# One for All{.important-text-3em}

One config for all projects<br>
One tool for _everything*_

<!--
To summarize today's topic, I'd like to say that ESLint makes it possible to be One for All in two aspects. That you can have one config for all projects, and then one tool for everything related to code checking and modifications.
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div mt-4 />

<Repo name="antfu/eslint-config" /> <span flex="~ inline gap-0.5 items-center" text-amber bg-amber:15 px1 rounded text-xs><div i-carbon-star-filled text="[0.8em]" /> 5.2k</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>

# @antfu/eslint-config

<div mb-10>

[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

</div>

## Quick Start

<div mt-2 />

```bash
npx @antfu/eslint-config@latest
```

<div mt-6 />

## Features

<div mt-2 />

- Auto fix for formatting <sup>aimed to be used standalone **without** Prettier</sup>
- Reasonable defaults, best practices, only one line of config
- Work with TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown, Out-of-box.
- Opinionated, but very customizable
- ESLint Flat config, compose easily!
- Optional React, Svelte, UnoCSS, Astro, Solid support
- Optional formatters support for formatting CSS, HTML, XML, etc.
- **Style principle**: Minimal for reading, stable for diff, consistent
  - Sorted imports, dangling commas
  - Single quotes, no semi
  - Using ESLint Stylistic
- Respects `.gitignore` by default
- Supports ESLint v9.0+ or v8.50.0+

</div>
</div>

<!--
If you want to learn more, you can check my personal ESLint config, where I used all the tricks I mentioned today.

I am honestly a bit flattered to see that even tho I didn't intend to have this config used by the others, it ends up being quite popular to have 3 thousand stars and over 30 thousand projects using it on GitHub.

[click] I wasn't trying to make you use my config, but hopefully, it can be a good reference for you to build your own shared config for yourself or for your teams, that is both powerful and flexible, and of course, type-safe.
-->

---

# The Future of Linting

<v-click>

<div>What about native toolings like <code>biome</code>, <code>oxlint</code>, <code>deno lint</code>?</div>

<div flex="~ gap-4 items-center" p4 py10>
<img src="/biome.svg" w-30 />
<img src="/oxc.png" w-30 />
<img src="/deno.png" w-30 />
</div>

</v-click>

<div v-click>Quick Take: Already usable in some scenarios, but not yet ready for majority.</div>

<ProsCons
  :pros="[
    'Extremely fast performance',
    'Unified toolchain, reusing AST',
    'Multi-threaded, parallel file linting',
  ]"
  :cons="[
    'Limited plugin ecosystem',
    'Limited language support',
    'Static configuration only',
  ]"
/>

<!--
So until now, if we talk about the future of linting, I bet you might ask, [click] what about the new upraising native linters like `biome`, `oxlint`, `deno lint`?

[click] Well, my quick take is that they are already usable in some scenarios, but not yet ready for majority.

The advantages of native linters are obvious, [click] they are very fast, for tools like biome and oxlint, they will providing a unified toolchain for formatting, linting, and bundling etc.

And also since native languages can leverage multiple threading, it would be more efficient to lint multiple files at the same time.

[click] On the other hand, the current limitations are that they are not very extensible, they lack of the powerful plugin system, and lack of the rich ecosystem. Also since the parsers are implemented in native languages, most of them currently only support JavaScript and TypeScript, with very limited support for custom languages like Vue and Svelte. And also, they usually requires a static JSON config format, which is more like the legacy ESLint config, that don't have the great flexibility we mentioned today.
-->

---

# Anthony's Takes

<div pt10>
<v-clicks>

- Native linters are valuable additions to the ecosystem

- ESLint and native linters will coexist until feature parity is reached

- Integration paths: ESLint in native linters or vice versa
- Type-aware linting via `tsgo` for native linters
- Working with the `oxlint` team to explore better integration

</v-clicks>
</div>

<!--
But looking forward,
[click] I'd say native linters are valuable additions to the ecosystem,

[click] But before they reach feature parity with ESLint, I think they will coexist for quite a while.

[click] For better integration, I expect either ESLint can be integrated into native linters, or vice versa during the transition period.

[click] Also, since type-aware linting is one of the biggest bottlenecks in terms of performance, with the new `tsgo` compiler, I hope it will help native linters maintain good performance even with type-aware linting.

[click] Finally, I am working with the `oxlint` team to explore better integration, so users can get the best of both worlds - great performance and full flexibility. Please stay tuned!
-->

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
