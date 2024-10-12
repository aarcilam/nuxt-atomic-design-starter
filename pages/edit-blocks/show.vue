<script setup lang="ts">
import { useCustomBlockStore } from '~/stores/custom-blocks';
import homeBlocks from '~/utils/homeBlocks';

const cardItems = [
  {
    id: 1,
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  },
  {
    id: 2,
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  },
  {
    id: 3,
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  }
]

const themeStore = useCustomBlockStore()
const blocks = themeStore.blocksArray.length > 0 ? themeStore.blocksArray : showdownBlocks()

console.log("themeStore",themeStore.blocks,blocks)
</script>

<template>
  <NuxtLayout name="basic">
    <BlocksDisplayBlocks :blocks="blocks"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>