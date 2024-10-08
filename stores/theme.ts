import { defineStore } from 'pinia'
import type { JumbotronInterface } from '~/components/blocks/jumbotron/Jumbotron.interface'
import type { MediaSectionInterface } from '~/components/blocks/mediaSection/MediaSection.interface'
import type { Block } from '~/interfaces/Block.interface'

export const useMyThemeStore = defineStore('theme', () => {
  const blocks = ref({})
  function update(updatedTheme) {
    blocks.value = updatedTheme
  }
  const blocksArray = computed(() => {
    const themeArray:Block[] = Object.entries(blocks.value).map(([key, value]) => ({ key, value: value as JumbotronInterface | MediaSectionInterface }));
    return themeArray;
  })

  return { blocks, blocksArray, update }
})
