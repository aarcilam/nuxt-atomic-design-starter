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
    <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <SharedAtomicDesignAtomsHeading1> {{ title }} </SharedAtomicDesignAtomsHeading1>
                <p class="py-6">
                    {{ description }}
                </p>
                <SharedAtomicDesignAtomsButton class="btn btn-primary">Get Started</SharedAtomicDesignAtomsButton>
            </div>
        </div>
    </div>
</template>
