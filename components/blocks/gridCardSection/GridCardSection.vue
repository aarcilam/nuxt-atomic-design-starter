<template>
  <div class="flex gap-5 columns-3 flex-wrap">
    <Card v-for="item in items" :title="item.title" :description="item.description" :image="item.image" /> 
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/shared/atomic-design/molecules/Card.vue'
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
});
</script>

<style>
</style>