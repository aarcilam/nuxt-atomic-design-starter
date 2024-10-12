<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="item in items" :key="item.title">
      <SharedMoleculesCard v-if="type=='basic'" @click="startViewTransition('/test')" :title="item.title" :description="item.description" :image="item.image" :id="item.id" :glass="glass" :side="side" :full-img="fullImg" :color="color" /> 
      <SharedMoleculesCard v-if="type=='product'" @click="startViewTransition('/test')" :title="item.title" :price="item.price" :discount-price="item.discountPrice" :image="item.image" :id="item.id" :glass="glass" :side="side" :full-img="fullImg" :color="color" /> 
  </div>
  </div>
</template>

<script lang="ts" setup>
import type { CardItem } from '~/components/shared/molecules/Card.vue';
import { useViewTransition } from '~/composables/useViewTransition'
const props = defineProps<{
  items: CardItem[];
    type: "product" | "basic";
    glass?: boolean;
    side?: boolean;
    fullImg?: boolean;
    color?: string;
}>();
const { startViewTransition } = useViewTransition()
</script>

<style>
</style>