<script setup lang="ts">
import FormFieldsCreator from './FormFieldsCreator.vue'

const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
});
</script>

<template>
      <SharedAtomicDesignAtomsFormsFormWrap formId="register-form">
        <FormFieldsCreator :form-config="formConfig" />
    </SharedAtomicDesignAtomsFormsFormWrap>
</template>