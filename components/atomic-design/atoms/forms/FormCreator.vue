<script setup lang="ts">
import FormGroup from '@/components/atomic-design/atoms/forms/FormGroup.vue';
import TextInput from '@/components/atomic-design/atoms/forms/fields/TextInput.vue';

const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
});

const renderFormField = (field: any) => {
  switch (field.type) {
    case 'text':
      return h(TextInput, {
        name: field.name,
        id: field.id,
        validation: field.validation,
        label: field.label
      });
    // Aquí puedes agregar más casos para otros tipos de campos
    default:
      return null;
  }
};

const renderFormGroup = (group: any) => {
  return h(FormGroup, { name: group.name }, () =>
    group.fields.map((field: any) => renderFormField(field))
  );
};
</script>

<template>
  <div>
    <template v-for="(item, index) in formConfig" :key="index">
      <FormGroup v-if="item.type === 'group'" :name="item.name">
        <template v-for="(field, fieldIndex) in item.fields" :key="fieldIndex">
          <component :is="renderFormField(field)" />
        </template>
      </FormGroup>
      <component v-else :is="renderFormField(item)" />
    </template>
  </div>
</template>