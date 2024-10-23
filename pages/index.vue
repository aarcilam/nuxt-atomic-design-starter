<script setup lang="ts">
definePageMeta({
  viewTransition: false,
  middleware: ['load-auth']
})
</script>

<template>
  <NuxtLayout name="basic">
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>