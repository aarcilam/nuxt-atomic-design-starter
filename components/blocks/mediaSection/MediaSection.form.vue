<script setup lang="ts">
import FormFieldsCreator from '@/components/shared/atomic-design/molecules/forms/FormFieldsCreator.vue'
import type { FormGroup, FormField } from "@/interfaces/FormConfig"

const props = defineProps<{
    index: number
}>()

const formConfig: (FormGroup | FormField)[] = [
    {
        type: 'group',
        name: `mediaSection-${props.index}`,
        fields: [
            {
                type: 'text',
                id: 'title',
                name: 'title',
                label: 'Title',
                validation: 'required'
            },
            {
                type: 'text',
                id: 'description',
                name: 'description',
                label: 'Description',
                validation: 'required'
            },
            {
                type: 'text',
                id: 'image',
                name: 'image',
                label: 'Image',
                validation: 'required'
            }
        ]
    }
]

const emit = defineEmits(['submit'])

const submit = (formData: any) => {
    emit('submit', formData)
}
</script>

<template>
    <SharedAtomicDesignAtomsHeading2>Jumbotron</SharedAtomicDesignAtomsHeading2>
    <FormFieldsCreator :form-config="formConfig" />
</template>
