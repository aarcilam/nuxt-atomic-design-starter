<script setup lang="ts">
const colorStore = useThemeStore();
</script>

<template>
  <div :data-theme="colorStore.colorTheme">
    <NuxtPage />
  </div>
</template>
