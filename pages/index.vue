<script setup lang="ts">
import DisplayBlocks from '@/components/blocks/DisplayBlocks.vue'

</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
      <h1 v-transition="'title'">home</h1>
      <img v-transition="'pug'" width="300" src="https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL" />
      <!-- <DisplayBlocks /> -->
    </div>
  </NuxtLayout>
</template>