<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="bg-blue-500 text-white p-4 rounded-lg">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <p class="text-sm">{{ description }}</p>
    </div>
</template>
