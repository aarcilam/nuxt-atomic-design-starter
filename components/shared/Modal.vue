<!-- components/modals/ExampleModal.vue -->
<template>
  <h3 class="text-lg font-bold">Hello modal!</h3>
  <SharedAtomsButton @click="close(null)">close</SharedAtomsButton>
  <SharedAtomsButton @click="close({test:'12345'})">data</SharedAtomsButton>
</template>

<script setup lang="ts">
const props = defineProps({
  close: Function
})
</script>