import { defineStore } from 'pinia';
import { ref, watch, onMounted } from 'vue';
import { useCookie } from '#app';

export const useThemeStore = defineStore('theme', () => {
  const colorTheme = ref('custom'); // Valor inicial predeterminado

  function setInitialTheme(theme) {
    colorTheme.value = theme;

    if (typeof window !== 'undefined' && document?.documentElement) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  function update(updatedTheme) {
    colorTheme.value = updatedTheme;

    if (typeof window !== 'undefined' && document?.documentElement) {
      document.documentElement.setAttribute('data-theme', updatedTheme);
    }

    useCookie('colorTheme').value = updatedTheme; // Guardar en la cookie
  }

  watch(colorTheme, (newTheme) => {
    if (typeof window !== 'undefined' && document?.documentElement) {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  });

  return { colorTheme, setInitialTheme, update };
});
