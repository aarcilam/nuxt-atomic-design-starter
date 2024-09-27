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
        <SharedAtomicDesignAtomsHeading1> {{ title }} </SharedAtomicDesignAtomsHeading1>
        <SharedAtomicDesignAtomsBodyText class="text-sm">{{ description }}</SharedAtomicDesignAtomsBodyText>
    </div>
</template>
