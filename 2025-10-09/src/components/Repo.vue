<script setup>
defineProps({
  name: String,
  hideOwner: Boolean,
})
</script>

<template>
  <span>
    <carbon-logo-github mr="2" opacity="60" class="transform translate-y-1px" />
    <a :href="`https://github.com/${name}`" target="_blank" border="!0" font="mono" opacity="80">
      {{ hideOwner ? name.split('/')[1] : name }}
    </a>
  </span>
</template>
