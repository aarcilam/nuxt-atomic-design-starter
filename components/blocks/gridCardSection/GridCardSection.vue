<template>
  <div class="grid grid-cols-3 gap-4">
    <SharedAtomicDesignMoleculesCard @click="startViewTransition('/test')"  v-for="item in items" :title="item.title" :description="item.description" :image="item.image" :id="item.id" /> 
  </div>
</template>

<script lang="ts" setup>
interface Item {
    id: number;
    title: string;
    description: string;
    image: string;
}
const props = defineProps<{
    items: Item[];
}>();

import { useViewTransition } from '~/composables/useViewTransition'
const { startViewTransition } = useViewTransition()
</script>

<style>
</style>