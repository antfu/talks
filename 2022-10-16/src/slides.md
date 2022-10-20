---
layout: cover
highlighter: shiki
css: unocss
lineNumbers: true
colorSchema: dark
---

# Patterns of VueUse

<p text-xl>
Patterns and best practices we have learnt during the past two years of building VueUse.
</p>

<div uppercase text-sm tracking-widest>
Anthony Fu
</div>

<div abs-bl mx-14 my-12 flex>
  <img src="/fes-logo.svg" />
  <div ml-3 flex flex-col text-left>
    <div>Vue Fes Japan Online 2022</div>
    <div text-sm opacity-50>Oct. 16th 2022</div>
  </div>
</div>

---
src: '../../reuse/intro.md'
---

---
src: '../../reuse/sponsors.md'
---

---
layout: intro
---

# What's VueUse?

---
name: VueUse
layout: center
---

<div class="grid grid-cols-[3fr_2fr] gap-4">
  <div class="text-center pb-4">
    <img class="h-50 inline-block" src="https://vueuse.org/favicon.svg">
    <div class="op-80 mb-2">
      Collection of Vue Composition Utilities
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

  - Works for both Vue 2 and 3
  - Tree-shakeable ESM
  - CDN compatible
  - TypeScript
  - Rich ecosystems

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

###### Until September 9th, 2022

<div grid="~ cols-[auto_1fr] gap-x-4 gap-y-1" items-center my4>
  <v-clicks :every="2">
    <div text-right text-3xl font-bold color="[#BD3E53]">1.1M</div><div text-left op80>Monthly downloads on NPM</div>
    <div text-right text-3xl font-bold color="[#BD7C3E]">435K</div><div text-left op80>Monthly pageviews on docs</div>
    <div text-right text-3xl font-bold color="[#A9BD3E]">36.8K</div><div text-left op80>Open Source projects dependents</div>
    <div text-right text-3xl font-bold color="[#54BD3E]">11.6K</div><div text-left op80>Stars on GitHub</div>
    <div text-right text-3xl font-bold color="[#3EBD7C]">1000</div><div text-left op80>Days since the first commit</div>
    <div text-right text-3xl font-bold color="[#3EAABD]">318</div><div text-left op80>Contributors to the core package</div>
    <div text-right text-3xl font-bold color="[#3E55BD]">248</div><div text-left op80>Composable functions</div>
    <div text-right text-3xl font-bold color="[#7B3EBD]">13</div><div text-left op80>Team members</div>
    <div text-right text-3xl font-bold color="[#BD3EAA]">10</div><div text-left op80>Addons packages</div>
  </v-clicks>
</div>

---
layout: intro
---

# What We Have Learnt?

---
layout: center
---

## Constructing Connections

---

## Constructing Connections

###### Vue and the Composition API

<div mt-4/>

<v-clicks>

- State drives UI - single source of truth

- Changes on state are auto reflected - reactivity
- In `template`, we build connectons between state and UI
- In `setup()` function, we build connections between data and logics


</v-clicks>

---

## Passing Refs as Arguments

###### Writing a composable function

<div class="grid grid-cols-[160px_1fr_240px] gap-x-4 mt4">

<div />

###### Implementation

###### Usage

<v-clicks :every='3'>

<div class="my-auto leading-6 text-base opacity-75">
Plain function
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
Accpets refs,<br>
returns a reactive result.
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
Accpets both refs and plain values.
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

## Implementation of `ref`

###### Dive into Vue's codebase

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

Which means:

```ts
const foo = ref(123)
const bar = ref(foo)

foo === bar // true
```

</v-click>
<v-click>

<TipBox mt5>

`ref()` forwards existing ref

</TipBox>

</v-click>

---

## Implementation of `unref`

###### Dive into Vue's codebase

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

Which means:

```ts
const foo = 123
const bar = ref(foo)

foo === 123 // true
```

</v-click>
<v-click>

<TipBox mt5>

`unref()` forwards plain value

</TipBox>

</v-click>

---

## MaybeRef

###### A custom type helper

```ts
type MaybeRef<T> = Ref<T> | T
```

<div mt4 />

<v-clicks>

- When using it as a value, we wrap it with `unref()`
- When using it as a ref, we wrap it with `ref()`

</v-clicks>

<v-click>

<hr op10 mt4 />

For example:

###### Plain Function

```ts
export function getTimeAgo(time: Date | number | string) {
  return format(time)
}
```

</v-click>
<v-click>

###### Reactive Function

```ts
export function useTimeAgo(time: MaybeRef<Date | number | string>) {
  return computed(() => format(unref(time)))
}
```

</v-click>

---

## Example

###### Update page title for light/dark mode

<img src="/tab.png" w-60 my2 rounded absolute top-8 right-14 v-click />

<div mt4 />
<v-click>

###### Normal usage

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

###### Connection usage

```ts
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```

</v-click>

<VueUse v-click name="useTitle" />

---

## Taking it Further

###### Making it more flexible

<div mt4 />

<v-clicks>

- `computed()` converts a function to a ref
- We accpets refs as arguments

</v-clicks>
<v-click>

<hr op10 mt4 />

In VueUse 9.0, we introduce a new convention:

</v-click>
<v-click>

```ts
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```

</v-click>
<v-click>

Turn into:

```ts
const isDark = useDark()

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
```

</v-click>
<v-click>

We call it <b text-orange>"Reactive Getter"</b>

</v-click>

---

## Reactivity Transform

###### Learn more at https://vuejs.org/guide/extras/reactivity-transform

<div mt4 />

<div grid="~ cols-[1fr_min-content_1fr] gap4">

```ts
let count = $ref(0) // count is a plain value
count = 1
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

Limitation

```ts
watch(count, () => { }) // !! this will lose the reactivity
```

```ts
watch(() => count, () => { }) // should use a getter function
```

<hr op10 mt4 />

In VueUse with Reactive Getter

```ts
useTitle(() => `Count: ${count}`)
```

</v-clicks>

---

## Reactify

###### Build connections magically!

VueUse provides an utility function `reactify()` to convert a plain function to reactive one!

```ts {3-5|1|7|all}
import { reactify } from '@vueuse/core'

function getTimeAgo(time: Date | number | string) {
  return format(time)
}

const useTimeAgo = reactify(getTimeAgo)
```

<v-click>

`unref()` arguments passing to the function and wrap the return with `computed()`

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

## Side-effect Clean Up

---

## Auto Clean Up for `watch`

###### And others like `watchEffect` `computed`

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

When the component get destroyed, `watch()` will be automatically removed.

</TipBox>

---

## Clean Up for Custom Composables

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

Use `onUnmounted()` hook to register side-effect clean up.

</TipBox>

---

## Manual Clean Up

`watch()` will return a stop handler for manual clean up.

```ts {all|2-4|6|2,7|8|all}
const count = ref(0)
const stop = watch(count, () => {
  console.log('Count: ' + count.value)
})

count.value += 1 // Count: 1
stop()
count.value += 1 // nothing
```

---

## Manual Clean Up

###### For Custom Composables

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

Usage would be:

```ts
const stop = useEventListener('mousedown', () => {})

stop() // unregister events
```

</v-click>


---

## But...

###### It could be cumbersome...

For example:

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

## Effect Scope

###### Introduced in Vue 3.1

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

Learn more at https://vuejs.org/api/reactivity-advanced.html#effectscope

</v-click>

---

## onScopeDispose

<v-click>

For composable to work best with `effectScope`, replace `onUnmounted` with `onScopeDispose`:

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

This allows the the clean up to be called on scope dispose.

</v-click>

<TipBox v-click>

- Components are special Scopes
- `onUnmounted` is a special `onScopeDispose`

</TipBox>

---
layout: cover
---

# The VueUse Familly

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

Learn more at <a href="https://vueuse.org" target="_blank">vueuse.org</a> 💚

---
src: '../../reuse/thanks.md'
---
