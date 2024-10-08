<script setup lang="ts">
import BlocksForm from '@/components/blocks/BlocksForm.vue'
import DisplayBlocks from '@/components/blocks/DisplayBlocks.vue'
import Heading1 from '@/components/shared/atoms/Heading1.vue'
import { useMyThemeStore } from '~/stores/theme';

const themeStore = useMyThemeStore()
const blocks = ref(themeStore.blocksArray.length > 0 ? themeStore.blocksArray : homeBlocks())


console.log(themeStore);
const handleSubmit = (formData: object) => {
    blocks.value = Object.entries(formData).map(([key, value]) => ({ key, value }));
    themeStore.update(formData)
}
</script>

<template>
    <NuxtLayout name="basic">
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <!-- Page content here -->
                <label for="my-drawer" class="btn btn-primary drawer-button">Open Editor</label>
                <DisplayBlocks :blocks="blocks" />
            </div>
            <div class="drawer-side">
                <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 text-base-content min-h-full w-1/2 p-4">
                    <Heading1>Edit Template</Heading1>
                    <BlocksForm :blocks="blocks" @submit="handleSubmit" />
                </ul>
            </div>
        </div>
    </NuxtLayout>
</template>