<script setup lang="ts">
const log = (e)=>{
  console.log(e);
}
</script>

<template>
  <NuxtLayout name="basic">
    <TestForm submit-label="hi" @submit="log"></TestForm>
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>