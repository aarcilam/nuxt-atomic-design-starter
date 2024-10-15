<template>
  <div>
    <NuxtImg class=" max-w-32" v-if="isFull" :src="dark ? '/images/logo-green-black.png' : '/images/logo-green-white.png'" alt="Logo" />
    <NuxtImg class=" max-w-11" v-else :src="dark ? '/images/icon-black.png' : '/images/icon-black.png'" alt="Logo" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  dark: {
    type: Boolean,
    default: true
  },
  isFull: {
    type: Boolean,
    default: true
  }
});
</script>