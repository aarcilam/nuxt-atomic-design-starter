<template>
    <FormKit type="password" :name="name" :id="id" :validation="validation" :label="label" :classes="{
        'outer': 'p-2',
        'input': 'input input-bordered w-full',
    }" />
</template>

<script setup lang="ts">

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    validation: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        required: true
    }
})
</script>