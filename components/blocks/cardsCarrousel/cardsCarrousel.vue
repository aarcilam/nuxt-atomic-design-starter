<template>
<div class="carousel carousel-center rounded-box space-x-4 p-4">
  <div class="carousel-item" v-for="item in items" :key="item.title">
      <SharedMoleculesCard @click="startViewTransition('/test')"  :title="item.title" :description="item.description" :image="item.image" :id="item.id" /> 
  </div>
</div>
</template>

<script lang="ts" setup>
import type { CardItem } from '~/components/shared/molecules/Card.vue';
import { useViewTransition } from '~/composables/useViewTransition'
const props = defineProps<{
    items: CardItem[];
}>();
const { startViewTransition } = useViewTransition()
</script>

<style>
</style>