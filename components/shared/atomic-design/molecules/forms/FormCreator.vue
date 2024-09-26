<script setup lang="ts">
import FormWrap from '@/components/shared/atoms/forms/FormWrap.vue'
import FormFieldsCreator from './FormFieldsCreator.vue'

const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
});
</script>

<template>
      <FormWrap formId="register-form" @submit="submit">
        <FormFieldsCreator :form-config="formConfig" />
    </FormWrap>
</template>