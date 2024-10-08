<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="text-white p-4 rounded-lg">
        <SharedAtomsHeading1> {{ title }} </SharedAtomsHeading1>
        <SharedAtomsBodyText class="text-sm">{{ description }}</SharedAtomsBodyText>
    </div>
</template>
