<template>  
    <FormKit :value="value" :submit-label="submitLabel" type="form" :id="formId" @submit="submit">
        <slot />
    </FormKit>
</template>

<script setup lang="ts">

const emit = defineEmits(['submit'])
const props = defineProps({
    formId: {
        type: String,
        required: true
    },
    submitLabel: {
        type: String,
        default: 'Submit'
    },
    value: {
        type: Object,
        default: () => ({})
    }
})

const submit = (data: any) => {
    emit('submit', data)
}

</script>