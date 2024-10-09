
<script setup lang="ts">
import { watch } from 'vue';
import { useThemeStore } from '~/stores/theme';

const colorStore = useThemeStore();
const themeKey = ref(0);

watch(() => colorStore.colorTheme, (newTheme) => {
  themeKey.value += 1;
});

</script>

<template>
    <div class="flex w-100 h-screen justify-center" v-if="colorStore.colorTheme == null">
        <span class="loading loading-ring loading-lg"></span>
    </div>
     <div v-if="colorStore.colorTheme != null" :key="themeKey" :data-theme="colorStore.colorTheme">
        <NuxtPage />
     </div>
</template>
