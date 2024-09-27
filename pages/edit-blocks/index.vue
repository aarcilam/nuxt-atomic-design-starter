<script setup lang="ts">
import BlocksForm from '@/components/blocks/BlocksForm.vue'
import DisplayBlocks from '@/components/blocks/DisplayBlocks.vue'
import Heading1 from '@/components/shared/atomic-design/atoms/Heading1.vue'
import { useMyThemeStore } from '~/stores/theme';

const blocks = ref([])
const themeStore = useMyThemeStore()
console.log(themeStore);
const handleSubmit = (formData: object) => {
    blocks.value = Object.entries(formData).map(([key, value]) => ({ key, value }));
    themeStore.update(formData)
}
</script>

<template>
    <NuxtLayout name="basic">
        <div class="flex gap-4">
            <div class="w-1/4">
                <Heading1>Edit Template</Heading1>
                <BlocksForm :blocks="themeStore.blocksArray" @submit="handleSubmit" />
            </div>
            <div class="w-3/4">
                <DisplayBlocks :blocks="blocks" />
            </div>
        </div>
    </NuxtLayout>
</template>