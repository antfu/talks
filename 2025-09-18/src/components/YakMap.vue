<script setup lang="ts">
import { useDarkMode, useSlideContext } from '@slidev/client'
import Yak from '../yak-shaving-map/components/YakMap.vue'

const { isDark } = useDarkMode()
const { $clicks } = useSlideContext()

const steps = [1, 3, 8, 23, 27, 32, 46, 47]
</script>

<template>
  <Yak
    :is-dark="isDark"
    :clicks="steps[+$clicks]"
    :focus-scale="1.5"
    :show-secondary="true"
    mode="steps"
  />
</template>
