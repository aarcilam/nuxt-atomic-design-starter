<template>
  <div class="grid grid-cols-3 gap-4">
    <SharedAtomicDesignMoleculesCard @click="startViewTransition('/test')"  v-for="item in items" :title="item.title" :description="item.description" :image="item.image" :id="item.id" /> 
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
});
import { useViewTransition } from '~/composables/useViewTransition'
const { startViewTransition } = useViewTransition()
</script>

<style>
</style>