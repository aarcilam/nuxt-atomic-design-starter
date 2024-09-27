<template>
  <SharedAtomicDesignAtomsCardContainer>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" checked />
      <div class="collapse-title"><SharedAtomicDesignAtomsHeading2>{{ title }}</SharedAtomicDesignAtomsHeading2></div>
      <div class="collapse-content">
        <slot />
      </div>
    </div>
  </SharedAtomicDesignAtomsCardContainer>
</template>

<script lang="ts" setup>
defineProps<{
  title:string
}>()
</script>

<style></style>