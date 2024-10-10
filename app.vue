<script setup lang="ts">
import { useThemeStore } from '~/stores/theme';

const colorStore = useThemeStore();
</script>

<template>
  <div :key="colorStore.colorTheme" :data-theme="colorStore.colorTheme">
    <NuxtPage />
  </div>
</template>
