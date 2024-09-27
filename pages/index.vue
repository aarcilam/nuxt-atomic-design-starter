<script setup lang="ts">
import { useMyThemeStore } from '~/stores/theme';
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

const themeStore = useMyThemeStore()
const blocks = themeStore.blocksArray

console.log("themeStore",themeStore.blocks,blocks)
</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
      <BlocksSlider />
      <BlocksJumbotronComponent title="test" description="test" />
      <BlocksGridCardSection :items="cardItems" />
    </div>
    <BlocksDisplayBlocks :blocks="blocks"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>