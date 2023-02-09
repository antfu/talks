<template>
  <div bg="emerald/5" p4 pb3 text-green rounded class="tip-box" flex="~ col gap3">
    <div text-emerald flex items-center gap-1 op80>
      <div i-carbon-idea />
      <div leading-1>
        窍门
      </div>
    </div>
    <slot />
  </div>
</template>

<style>
.tip-box {
  --prism-background: transparent;
}
.tip-box > p {
  margin: 0 !important;
}
</style>
