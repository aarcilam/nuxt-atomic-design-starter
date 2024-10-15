<script setup lang="ts">
const log = (e)=>{
  console.log(e);
}
</script>

<template>
  <NuxtLayout name="basic">
    <ExampleForm submit-label="hi" @submit="log"></ExampleForm>
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>