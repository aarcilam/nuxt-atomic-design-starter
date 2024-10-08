<template>
  <SharedAtomsCardContainer>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" checked />
      <div class="collapse-title"><SharedAtomsHeading2>{{ title }}</SharedAtomsHeading2></div>
      <div class="collapse-content">
        <slot />
      </div>
    </div>
  </SharedAtomsCardContainer>
</template>

<script lang="ts" setup>
defineProps<{
  title:string
}>()
</script>

<style></style>