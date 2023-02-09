<script setup>
defineProps({
  name: String,
})
</script>

<template>
  <Repo :name="name" class="absolute top-12 right-12" />
</template>
