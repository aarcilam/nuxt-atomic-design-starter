<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="item in items" :key="item.title">
      <SharedMoleculesCard v-if="type=='basic'" @click="emitClickedItem(item)" :title="item.title" :description="item.description" :image="item.image" :id="item.id" :slug="item.slug" :glass="glass" :side="side" :full-img="fullImg" :color="color" /> 
      <SharedMoleculesCard v-if="type=='product'" @click="emitClickedItem(item)" :title="item.title" :price="item.price" :discount-price="item.discountPrice" :image="item.image" :id="item.id" :slug="item.slug" :glass="glass" :side="side" :full-img="fullImg" :color="color" /> 
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CardItem } from '~/components/shared/molecules/Card.vue';
const props = defineProps<{
  items: CardItem[];
  type: "product" | "basic";
  glass?: boolean;
  side?: boolean;
  fullImg?: boolean;
  color?: string;
}>();

const emit = defineEmits(['itemClicked']);
const emitClickedItem = (item: CardItem) => {
  emit('itemClicked', item);
  console.log(item); 
}
</script>

<style>
</style>