<script setup lang="ts">
import Jumbotron from '@/components/blocks/jumbotron/Jumbotron.component.vue'

const props = defineProps<{
    blocks: Object
}>()

const blocksArray = ref([]);

watch(() => props.blocks, (newBlocks) => {
  blocksArray.value = Object.entries(newBlocks).map(([key, value]) => ({
    ...value
  }))[0];
  console.log(blocksArray.value);
}, { immediate: true, deep: true });



</script>

<template>
    <Jumbotron v-for="(block, index) in blocksArray" :key="index" :title="block.title" :description="block.description" />
</template>