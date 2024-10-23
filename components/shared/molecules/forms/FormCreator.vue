<script setup lang="ts">
console.log("form creator iniciado")
const props = defineProps({
  id:{
    type: String,
  },
  formConfig: {
    type: Object,
    required: true
  },
  submitLabel:{
    type: String,
    required: true,
    default: 'Submit'
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
    <SharedAtomsFormsFormWrap :formId="id" @submit="submit" @change="change" :value="value" :submit-label="submitLabel">
        <SharedMoleculesFormsFormFieldsCreator :form-config="formConfig" />
    </SharedAtomsFormsFormWrap>
</template>