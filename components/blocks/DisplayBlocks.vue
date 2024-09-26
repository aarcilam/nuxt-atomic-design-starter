<script setup lang="ts">

const props = defineProps<{
    blocks: Array<Object>
}>()
</script>

<template>
  <dir v-for="(block, index) in blocks">
    <BlocksJumbotronComponent v-if="block.key.split('-')[0] === 'jumbotron'" :key="index" :title="block.value.title" :description="block.value.description" />
    <BlocksMediaSectionComponent v-if="block.key.split('-')[0] === 'mediaSection'" :key="index" :title="block.value.title" :description="block.value.description" :image="block.valueOf.image"/>
  </dir>
</template>