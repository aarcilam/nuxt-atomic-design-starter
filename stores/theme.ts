import { defineStore } from 'pinia'

export const useMyThemeStore = defineStore('theme', () => {
  const blocks = ref({})
  function update(updatedTheme) {
    console.log(blocks)
    blocks.value = updatedTheme
  }

  const blocksArray = computed(() => {
    const themeArray = Object.entries(blocks.value).map(([key, value]) => ({ key, value }));
    return themeArray;
  })

  return { blocks, blocksArray, update }
})
