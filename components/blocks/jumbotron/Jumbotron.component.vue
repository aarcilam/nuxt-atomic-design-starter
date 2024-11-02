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
    buttonText: {
        type: String,
        default: 'Get Started' // Valor por defecto
    },
    buttonLink: {
        type: String,
        default: '#' // Valor por defecto
    },
    alignment: {
        type: String,
        default: 'center' // 'left', 'right', 'center'
    },
    height: {
        type: String,
        default: 'screen' // 'auto', 'screen', 'full', o cualquier clase de Tailwind CSS
    }
})
</script>

<template>
    <div :class="['p-10 bg-base-200', height === 'screen' ? 'min-h-screen' : height === 'full' ? 'h-full' : 'h-auto']">
        <div :class="['container mx-auto',alignment === 'left' ? 'text-left' : alignment === 'right' ? 'text-right' : 'text-center']">
            <div >
                <SharedAtomsHeading1> {{ title }} </SharedAtomsHeading1>
                <p class="py-6">
                    {{ description }}
                </p>
                <a :href="buttonLink">
                    <SharedAtomsButton class="btn btn-primary">{{ buttonText }}</SharedAtomsButton>
                </a>
            </div>
        </div>
    </div>
</template>