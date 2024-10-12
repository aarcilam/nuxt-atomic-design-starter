<template>
  <SharedAtomsCardContainer>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" :checked="open" />
      <div class="collapse-title"><SharedAtomsHeading2>{{ title }}</SharedAtomsHeading2></div>
      <div class="collapse-content w-100">
        <slot />
      </div>
    </div>
  </SharedAtomsCardContainer>
</template>

<script lang="ts" setup>
defineProps<{
  title:string,
  open?:boolean
}>()
</script>

<style></style>