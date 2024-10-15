<script setup lang="ts">
const colorStore = useThemeStore();
</script>

<template>
  <div :data-theme="colorStore.colorTheme">
    <transition name="page">
      <NuxtPage />
    </transition>
  </div>
  <div id="stack-cont"></div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
