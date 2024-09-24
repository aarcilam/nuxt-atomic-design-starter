<template>
    <FormKit type="group" :name="name" >
        <div :class="{ 'flex': dFlex }" class="group-form">
            <slot />
        </div>
    </FormKit>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    dFlex: {
        type: Boolean,
        default: false
    }
})
</script>