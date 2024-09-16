<script setup lang="ts">
import { useDarkMode, useSlideContext } from '@slidev/client'
import Yak from '../yak-shaving-map/components/YakMap.vue'

const { isDark } = useDarkMode()
const { $clicks } = useSlideContext()
</script>

<template>
  <Yak
    :is-dark="isDark"
    :clicks="+$clicks + 1"
    :focus-scale="1.5"
    :show-secondary="true"
    mode="steps"
  />
</template>
