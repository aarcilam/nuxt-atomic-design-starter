<script setup lang="ts">
import { reactive } from 'vue'
import BlocksForm from '@/components/blocks/BlocksForm.vue'
import DisplayBlocks from '@/components/blocks/DisplayBlocks.vue'
import Heading1 from '@/components/shared/atomic-design/atoms/Heading1.vue'

const blocks = reactive({})

const handleSubmit = (formData: any) => {
    blocks.value = formData
    console.log(formData)
}
</script>

<template>
    <Heading1 >login</Heading1>
    <div class="flex gap-4">
        <div class="w-1/3">
            <BlocksForm @submit="handleSubmit" />
        </div>
        <div class="w-2/3">
            <DisplayBlocks :blocks="blocks" />
        </div>
    </div>
</template>