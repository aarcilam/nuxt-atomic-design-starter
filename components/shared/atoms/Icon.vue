<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
});
</script>

<template>
  <i :class="icon"></i>
</template>
