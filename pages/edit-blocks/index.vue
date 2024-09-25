<script setup lang="ts">
import { reactive } from 'vue'
import BlocksForm from '@/components/blocks/BlocksForm.vue'
import DisplayBlocks from '@/components/blocks/DisplayBlocks.vue'

const blocks = reactive({})

const handleSubmit = (formData: any) => {
    blocks.value = formData
    console.log(formData)
}
</script>

<template>
    <h1 v-transition="'title'">edit blocks</h1>
    <div class="flex gap-4">

        <div class="w-1/2">
            <BlocksForm @submit="handleSubmit" />
        </div>
        <div class="w-1/2">
            <DisplayBlocks :blocks="blocks" />
        </div>
    </div>
</template>