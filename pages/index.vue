<script setup lang="ts">

</script>

<template>
  <NuxtLayout name="basic">
    <TestForm></TestForm>
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>