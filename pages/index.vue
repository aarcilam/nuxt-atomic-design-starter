<script setup lang="ts">
definePageMeta({
  viewTransition: false
})
</script>

<template>
  <NuxtLayout name="basic">
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>