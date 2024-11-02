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
        <div class="container mx-auto flex flex-col md:flex-row">
            <!-- Slot de la izquierda -->
            <div v-if="$slots.left" class="w-full md:w-1/4 p-4">
                <slot name="left" />
            </div>

            <!-- Contenido principal -->
            <div :class="['w-full', $slots.left || $slots.right ? 'md:w-1/2' : 'md:w-full', alignment === 'left' ? 'text-left' : alignment === 'right' ? 'text-right' : 'text-center']">
                <SharedAtomsHeading1 v-if="title"> {{ title }} </SharedAtomsHeading1>
                <p class="py-6">
                    {{ description }}
                </p>
                <a :href="buttonLink">
                    <SharedAtomsButton class="btn btn-primary">{{ buttonText }}</SharedAtomsButton>
                </a>
            </div>

            <!-- Slot de la derecha -->
            <div v-if="$slots.right" class="w-full md:w-1/4 p-4">
                <slot name="right" />
            </div>
        </div>
    </div>
</template>
