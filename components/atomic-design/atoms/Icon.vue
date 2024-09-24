<script setup lang="ts">
import { defineProps } from 'vue';

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
