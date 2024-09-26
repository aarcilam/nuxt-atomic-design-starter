<script setup lang="ts">
import Heading1 from '@/components/shared/atomic-design/atoms/Heading1.vue'

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
                <Heading1 v-transition="'title-primary'"> {{ title }} </Heading1>
                <p class="py-6">
                    {{ description }}
                </p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
</template>
