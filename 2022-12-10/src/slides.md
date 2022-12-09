---
layout: cover
highlighter: shiki
css: unocss
lineNumbers: true
colorSchema: dark
---

# VueUse 最佳实践

<p text-xl>
我们在维护 VueUse 两年以来所积累的 Vue 组合式 API 的模式与最佳实践
</p>

<div uppercase text-sm tracking-widest>
Anthony Fu
</div>

<div abs-bl mx-14 my-12 flex flex-col>
  <img src="/vue-conf.png" w-20 />
  <div text-sm opacity-50>2022/12/10</div>
</div>

---
src: '../../reuse/intro.zh.md'
---

---
name: VueUse
layout: center
---

<div class="grid grid-cols-[3fr_2fr] gap-4">
  <div class="text-center pb-4">
    <img class="h-50 inline-block" src="https://vueuse.org/favicon.svg">
    <div class="op-80 mb-2">
      Vue 组合式 API 工具合集
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/@vueuse/core" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/@vueuse/core?color=a1b858&label=" alt="NPM version"></a>
      <a class="!border-none" href="https://www.npmjs.com/package/@vueuse/core" target="__blank"><img class="h-4 inline mx-0.5" alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vueuse/core?color=50a36f&label="></a>
      <a class="!border-none" href="https://vueuse.org" target="__blank"><img class="h-4 inline mx-0.5" src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=1e8a7a" alt="Docs & Demos"></a>
      <img class="h-4 inline mx-0.5" alt="Function Count" src="https://vueuse.org/badge-function-count.svg">
      <br>
      <a class="!border-none" href="https://github.com/vueuse/vueuse" target="__blank"><img class="mt-2 h-4 inline mx-0.5" alt="GitHub stars" src="https://img.shields.io/github/stars/vueuse/vueuse?style=social"></a>
    </div>
  </div>
  <div class="border-l border-gray-400 border-opacity-25 !all:leading-12 !all:list-none my-auto">

  - 同时支持 Vue 2 和 3
  - Tree-shake
  - TypeScript
  - 支持 CDN
  - 丰富的生态系统

  </div>
</div>


---
layout: iframe
url: https://vueuse.org/functions.html
scale: 0.6
---

-

---
layout: center
class: text-center
---

## State of VueUse

###### 截至 2022/12/01

<div grid="~ cols-[auto_1fr] gap-x-4 gap-y-1" items-center my4>
  <v-clicks :every="2">
    <div text-right text-3xl font-bold color="[#BD3E53]">140万</div><div text-left op80>NPM 月下载量</div>
    <div text-right text-3xl font-bold color="[#BD7C3E]">43万</div><div text-left op80>文档月访问量</div>
    <div text-right text-3xl font-bold color="[#A9BD3E]">4.9万</div><div text-left op80>开源项目使用者</div>
    <div text-right text-3xl font-bold color="[#54BD3E]">1.3万</div><div text-left op80>Stars on GitHub</div>
    <div text-right text-3xl font-bold color="[#3EBD7C]">1100天</div><div text-left op80>项目诞生</div>
    <div text-right text-3xl font-bold color="[#3EAABD]">364</div><div text-left op80>贡献者</div>
    <div text-right text-3xl font-bold color="[#3E55BD]">251</div><div text-left op80>组合式工具</div>
    <div text-right text-3xl font-bold color="[#7B3EBD]">13</div><div text-left op80>团队成员</div>
    <div text-right text-3xl font-bold color="[#BD3EAA]">10</div><div text-left op80>生态插件</div>
  </v-clicks>
</div>

---
layout: intro
---

# 我们从中学到了什么？

---
layout: center
---

# 建立"链接"

---

## 建立"链接"

###### Vue 与组合式 API

<div mt-4/>

<v-clicks>

- 状态驱动 UI - single source of truth

- 状态的改变会**自动**更新 UI - 响应式
- 通过 `<template>` 模版，我们建立了**状态**和 **UI** 的链接
- 通过 `setup()` 函数，我们建立了**状态**和**逻辑**的链接


</v-clicks>

---

## 将 Ref 作为参数传递

###### 编写组合式函数

<div class="grid grid-cols-[160px_1fr_240px] gap-x-4 mt4">

<div />

###### 实现

###### 使用范例

<v-clicks :every='3'>

<div class="my-auto leading-6 text-base opacity-75">
简单函数
</div>

```ts
function add(a: number, b: number) {
  return a + b
}
```

```ts
let a = 1
let b = 2

let c = add(a, b) // 3
```

<div class="my-auto leading-6 text-base opacity-75">
接受 Ref，<br>返回响应式的结果
</div>

```ts
function add(a: Ref<number>, b: Ref<number>) {
  return computed(() => a.value + b.value)
}
```

```ts
const a = ref(1)
const b = ref(2)

const c = add(a, b)
c.value // 3
```

<div class="my-auto leading-6 text-base opacity-75">
同时接受 Ref 和纯值
</div>

```ts
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
```

```ts
const a = ref(1)

const c = add(a, 5)
c.value // 6
```

</v-clicks>

</div>

---

## `ref` 的内部实现

###### Vue 源码分析

<div mt4/>

<v-click>

```ts
function ref(input) {
  return isRef(input)
    ? input
    : createRef(input)
}
```

</v-click>
<v-click>

也就是说：

```ts
const foo = ref(123)
const bar = ref(foo)

foo === bar // true
```

</v-click>
<v-click>

<TipBox mt5>

`ref()` 会直接返回已经是 Ref 的值

</TipBox>

</v-click>

---

## `unref` 的内部实现

###### Vue 源码分析

<div mt4/>

<v-click>

```ts
function unref(input) {
  return isRef(input)
    ? input.value
    : input
}
```

</v-click>
<v-click>

也就是说：

```ts
const foo = unref(123)

foo === 123 // true
```

</v-click>
<v-click>

<TipBox mt5>

`unref()` 会直接返回非 Ref 的值

</TipBox>

</v-click>

---

## MaybeRef

###### 类型工具

```ts
type MaybeRef<T> = Ref<T> | T
```

<div mt4 />

<v-clicks>

- 需要使用 **值** 时，使用 `unref()` 获取
- 需要使用 **Ref** 时，使用 `ref()` 获取

</v-clicks>

<v-click>

<hr op10 mt4 />

例如：

###### 普通函数

```ts
export function getTimeAgo(time: Date | number | string) {
  return format(time)
}
```

</v-click>
<v-click>

###### 响应式函数

```ts
export function useTimeAgo(time: MaybeRef<Date | number | string>) {
  return computed(() => format(unref(time)))
}
```

</v-click>

---

## 例子

###### 根据 暗色/亮色 模式，动态设置标题

<img src="/tab.png" w-60 my2 rounded absolute top-8 right-14 v-click />

<div mt4 />
<v-click>

###### 一般用法

```ts
import { useDark, useTitle } from '@vueuse/core'
```

```ts
const isDark = useDark()
const title = useTitle()

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})
```

</v-click>
<v-click>

###### “链接” 用法

```ts
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```

</v-click>

<VueUse v-click name="useTitle" />

---

## 进一步深入

###### 使其变得更加灵活

<div mt4 />

<v-clicks>

- `computed()` 可以接受一个函数，返回一个 `Ref` 对象
- 我们接受响应式的 `Ref` 对象作为参数

</v-clicks>
<v-click>

<hr op10 mt4 />

在 VueUse 9.0 中，我们引入了一个新的模式：

</v-click>
<v-click>

```ts
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 晚上好!' : '☀️ 早上好!')

useTitle(title)
```

</v-click>
<v-click>

变为：

```ts
const isDark = useDark()

useTitle(() => isDark.value ? '🌙 晚上好!' : '☀️ 早上好!')
```

</v-click>
<v-click>

我们称之为 <b text-orange>"Reactive Getter" 响应式的获取器</b>

</v-click>

---

## `MaybeComputedRef`

<div h-2 />

```ts {all|6-9|all}
/**
 * 可能是一个 Ref，或者一个字面值
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * 可能是一个 Ref，一个字面值，或者一个 Getter 函数
 */
export type MaybeComputedRef<T> = MaybeRef<T> | (() => T) | ComputedRef<T>
```

---

## `resolveRef`

<div h-2 />

```ts {all|2-3}
function resolveRef<T>(input: MaybeRef<T>): Ref<T> {
  return typeof input === 'function'
    ? computed(input)
    : ref(input)
}
```

<v-click>

如果传入的是一个函数，我们使用 `computed()` 创建一个 `Ref` 对象，否则交由 `ref()` 处理

</v-click>

---

## `resolveUnref`

<div h-2 />

```ts {all|2-3}
function resolveUnref<T>(input: MaybeRef<T>): T {
  return typeof input === 'function'
    ? input()
    : unref(input)
}
```

<v-click>

如果传入的是一个函数，我们直接呼叫以取值，否则交由 `ref()` 处理

</v-click>

---

## 响应性语法糖

###### 详情请见文档 https://vuejs.org/guide/extras/reactivity-transform

<div mt4 />

<div grid="~ cols-[1fr_min-content_1fr] gap4">

```ts
let count = $ref(0) // count 在类型上是 number 值
count = 1 // 可以直接赋值
console.log(count)
```

<v-click>

<div i-carbon-arrow-right ma></div>

```ts
let count = ref(0)
count.value = 1
console.log(count.value)
```

</v-click>
</div>

<v-clicks>

使用限制

```ts
watch(
  count, // !! 这会导致响应式丢失
  () => {}
) 
```

```ts
watch(
  () => count, // 应该使用一个 Getter 函数
  () => {}
) 
```

</v-clicks>


---

## 结合响应性语法糖

在 VueUse 中，结合 Reactive Getter，我们可以：

```ts {all|3|5}
let count = $ref(0)

useTitle(() => `Count: ${count}`)

const storage = useStorage('count', () => count)
```

---

## Reactify 响应式化

###### 使用魔法构造“链接”

VueUse 提供了工具函数 `reactify()`，可以将一个普通函数转换为一个响应式的函数

```ts {3-5|1|7|all}
import { reactify } from '@vueuse/core'

function getTimeAgo(time: Date | number | string) {
  return format(time)
}

const useTimeAgo = reactify(getTimeAgo)
```

<v-click>

自动 unref 入参，并将返回值包装为 computed

```ts
const date = ref(new Date())

const timeago1 = useTimeAgo(date) // Computed<string>

const timeago2 = useTimeAgo(() => Date.now() - 1000) // Computed<string>
```

</v-click>

<VueUse v-click name="reactify" />

---
layout: center
---

## 副作用清理

---

## `watch` 的自动清理

###### 以及 `watchEffect` `computed` 等内置函数

<div mt-5 />

<v-click>

```html
<script setup>
import { watch, ref } from 'vue'

const count = ref(0)

watch(count, () => {
  console.log('Count: ' + count.value)
})
</script>
```

</v-click>

<TipBox v-click mt5>

当组件被销毁时，`watch()` 会自动被移除。

</TipBox>

---

## 自己编写时 Composables 的副作用清理

<div mt-5 />

```ts {all|2|4-6|all}
export function useEventListener(name, handler) {
  window.addEventListener(name, handler)

  onUnmounted(() => {
    window.removeEventListener(name, handler)
  })
}
```

<TipBox v-click mt5>

使用 `onUnmounted()` 来注册清理函数

</TipBox>

---

## 手动清理的能力

`watch()` 会返回一个清理函数，以便手动清理

```ts {all|2-4|6|2,7|8|all}
const count = ref(0)
const stop = watch(count, () => {
  console.log('Count: ' + count.value)
})

count.value += 1 // Count: 1
stop()
count.value += 1 // 无输出
```

---

## 手动清理的能力

###### 在编写 Composables 时

<div mt-5 />

<v-click>

```ts {all|4-6,10|all}
export function useEventListener(name, handler) {
  window.addEventListener(name, handler)

  const cleanup = () => {
    window.removeEventListener(name, handler)
  }

  onUnmounted(cleanup)

  return cleanup
}
```

</v-click>
<v-click>

使用方法：

```ts
const stop = useEventListener('mousedown', () => {})

stop() // 移除事件监听
```

</v-click>


---

## 但是...

###### 有时候会有点麻烦...

例如：

```ts
function useMouse() {
  const stop1 = useEventListener('mousedown', () => {})
  const stop2 = useEventListener('mouseup', () => {})
  const stop3 = useEventListener('mousemove', () => {})

  const cleanup = () => {
    stop1()
    stop2()
    stop3()
  }

  return cleanup
}
```

---

## Effect 作用域（Effect Scope）

###### 在 Vue 3.1 中引入

<div mt4 />

<v-click>

```ts {all|3|4|5-12,15-16|all}
import { effectScope } from 'vue'

const scope = effectScope()
scope.run(() => {
  const count = ref(0)
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  useEventListener('mousedown', () => {})
  useEventListener('mouseup', () => {})
  useEventListener('mousemove', () => {})
})

// to dispose all effects in the scope
scope.stop()
```

</v-click>
<v-click>

详情请见文档：https://vuejs.org/api/reactivity-advanced.html#effectscope

</v-click>

---

## `onScopeDispose`

<v-click>

让 Composables 更好地与 `effectScope` 一起工作，可以将 `onUnmounted` 替换为 `onScopeDispose`：

</v-click>
<v-click>

```diff
export function useEventListener(name, handler) {
  window.addEventListener(name, handler)

- onUnmounted(() => {
+ onScopeDispose(() => {
    window.removeEventListener(name, handler)
  })
}
```

这样可以在作用域被销毁时调用清理函数。

</v-click>

<TipBox v-click>

- 一个组件可以被理解为一个特殊的 **作用域**
- `onUnmounted` 可以被理解为一个特殊 `onScopeDispose`

</TipBox>

---

## Recap

<v-clicks>

- 使用 `ref()` 和 `unref()` 来创建和解引用响应式，以建立连接

- 使用 `resolveRef()` 和 `resolveUnref()` 来扩张灵活性，更好的配合响应式语法糖
- 使用 `reactify()` 来将一般函数转换为响应式函数
- 使用 `onScopeDispose()` 来注册清理函数

</v-clicks>

---
layout: cover
---

# VueUse 全家桶

---

<VueUseFamily />

---
layout: iframe
url: https://vueuse.org/
scale: 0.6
---

---
layout: center
---

## 请查阅 <a href="https://vueuse.org" target="_blank">vueuse.org</a> 了解更多

---
src: '../../reuse/sponsors.md'
---

---
src: '../../reuse/thanks.zh.md'
---
