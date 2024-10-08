<script setup lang="ts">
import FormFieldsCreator from './FormFieldsCreator.vue'

const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  },
  value: {
    type: Object
  }
});

const emit = defineEmits(['submit','change'])
 
const submit = (formData: any) => {
    emit('submit', formData)
}

const change = (formData: any) => {
    emit('change', formData)
}
</script>

<template>
    <SharedAtomsFormsFormWrap formId="register-form" @submit="submit" @change="change" :value="value">
        <FormFieldsCreator :form-config="formConfig" />
    </SharedAtomsFormsFormWrap>
</template>