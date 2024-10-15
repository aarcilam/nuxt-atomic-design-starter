<script setup lang="ts">
definePageMeta({
  viewTransition: false
})
const log = (e)=>{
  console.log(e);
}
</script>

<template>
  <NuxtLayout name="basic">
    <ExampleForm submit-label="hi" @submit="log" :value="{email: 'juan@ejemplo.com'}"></ExampleForm>
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>