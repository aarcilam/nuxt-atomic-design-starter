import { defineStore } from 'pinia';
import { ref, watch, onMounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const colorTheme = ref(null);

  // Cargar el tema desde localStorage solo en el cliente
  onMounted(() => {
    if (typeof localStorage !== 'undefined') {
      const storedTheme = localStorage.getItem('colorTheme');
      colorTheme.value = storedTheme ? storedTheme : 'custom';
    }
  });

  function update(updatedTheme) {
    colorTheme.value = updatedTheme;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('colorTheme', updatedTheme);
    }
  }

  // Guardar cambios en localStorage solo en el cliente
  watch(colorTheme, (newTheme) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('colorTheme', newTheme);
    }
  });

  return { colorTheme, update };
});
