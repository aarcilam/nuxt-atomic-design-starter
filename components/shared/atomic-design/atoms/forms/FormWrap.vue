<template>
    <FormKit :actions="actions" :value="value" :submit-label="submitLabel" type="form" :id="formId" @submit="submit" :classes="{
        'form': '',
    }">
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
    },
    actions: {
        type: Boolean,
        default: true
    }
})

const submit = (data: any) => {
    emit('submit', data)
}

</script>

<style >
.formkit-input[type="submit"] {
    margin-top: 1rem;
    @apply btn btn-primary;
}
</style>