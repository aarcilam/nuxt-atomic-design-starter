<script setup lang="ts">
import DisplayBlocks from '@/components/blocks/DisplayBlocks.vue'

</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
      <h1 v-transition="'title'">home</h1>
      <!-- <DisplayBlocks /> -->
    </div>
  </NuxtLayout>
</template>