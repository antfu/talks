<script setup>
defineProps({
  name: String,
  hideOwner: Boolean,
})
</script>

<template>
  <span>
    <carbon-logo-github mr="1" opacity="60" class="transform translate-y-1px" />
    <a :href="`https://github.com/${name}`" target="_blank" border="!0" font="mono">
      {{ hideOwner ? name.split('/')[1] : name }}
    </a>
  </span>
</template>
