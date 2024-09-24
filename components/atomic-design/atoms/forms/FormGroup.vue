<template>
    <FormKit type="group" :name="name">
        <slot />
    </FormKit>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})
</script>