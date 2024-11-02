<template>
  <div class="mockup-browser bg-base-300 border">
    <div class="mockup-browser-toolbar">
      <div class="input">{{url}}</div>
    </div>
    <div class="bg-base-200 flex justify-center px-4 py-16">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: String
})
</script>

<style>

</style>