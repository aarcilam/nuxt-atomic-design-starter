<script setup lang="ts">
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
</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
      <BlocksSlider />
      <BlocksJumbotronComponent title="test" description="test" />
      <BlocksGridCardSection :items="cardItems" />
    </div>
    <BlocksDisplayBlocks :blocks="homeBlocks()"></BlocksDisplayBlocks>
  </NuxtLayout>
</template>