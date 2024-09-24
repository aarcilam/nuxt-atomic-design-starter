<template>  
    <FormKit type="password" :name="name" :id="id" :validation="validation" :label="label" />
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