<template>
  <SharedAtomsCollapsableCard :open="true" :title="title" class="mb-3 bg-base-100 w-full">
    <div class="space-y-3">
      <SharedAtomsHeading2 class="text-base">Uso</SharedAtomsHeading2>
      <SharedMoleculesMockupCode :code='code' :editable="true" />
      <SharedAtomsHeading2 class="text-base">Ejemplos:</SharedAtomsHeading2>
      <hr>
      <slot></slot>
    </div>
  </SharedAtomsCollapsableCard>
</template>

<script lang="ts" setup>
const props = defineProps({
  code: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
})
</script>

<style></style>