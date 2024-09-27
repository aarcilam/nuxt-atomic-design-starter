<script setup lang="ts">
import type { Block } from '~/interfaces/Block.interface';

const props = defineProps<{
  blocks: Block[]
}>()
</script>

<template>
  <template v-for="(block, index) in blocks">
    <BlocksJumbotronComponent v-if="block.key.split('-')[0] === 'jumbotron'" :key="index" :title="block.value.title"
      :description="block.value.description" />
    <BlocksMediaSectionComponent v-if="block.key.split('-')[0] === 'mediaSection'" :key="index"
      :title="block.value.title" :description="block.value.description" :image="block.value.image" />
  </template>
</template>