<script setup lang="ts">
import FormWrap from '@/components/shared/atomic-design/molecules/forms/FormWrap.vue'
import FormFieldsCreator from '@/components/shared/atomic-design/molecules/forms/FormFieldsCreator.vue'
import { FormGroup, FormField } from "@/interfaces/FormConfig"

const props = defineProps<{
    index: number
}>()

const formConfig: (FormGroup | FormField)[] = [
    {
        type: 'group',
        name: `jumbotron-${props.index}`,
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
    <!-- <FormWrap formId="jumbotron-form" @submit="submit"> -->
    <FormFieldsCreator :form-config="formConfig" />
    <!-- </FormWrap> -->
</template>
