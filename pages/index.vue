<script setup lang="ts">
import Jumbotron from '@/components/blocks/jumbotron/Jumbotron.component.vue'
import Slider from '@/components/blocks/slider/Slider.vue'
import GridCardSection from '@/components/blocks/gridCardSection/GridCardSection.vue'

const cardItems = [
  {
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  },
  {
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  },
  {
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  },
  {
    title: "Test",
    description: "test desxription",
    image: "https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL"
  }
]
</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
      <Slider />
      <Jumbotron title="test" description="test" />
      <img v-transition="'pug'" width="300"
        src="https://www.kienyke.com/sites/default/files/styles/amp_1200x675_16_9/public/2022-05/pug.jpg?itok=CwcCV6QL" />
      <GridCardSection :items="cardItems" />
    </div>
  </NuxtLayout>
</template>