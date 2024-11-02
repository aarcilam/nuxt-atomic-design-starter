<!-- components/modals/ExampleModal.vue -->
<template>
  <SharedAtomsBodyText>{{msg}}</SharedAtomsBodyText>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String
})
</script>