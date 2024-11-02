<!-- components/modals/ExampleModal.vue -->
<template>
  <SharedAtomsHeading1>{{msg}}</SharedAtomsHeading1>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: String
})
</script>