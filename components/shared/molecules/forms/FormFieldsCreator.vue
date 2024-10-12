<script setup lang="ts">
import FormGroup from '@/components/shared/atoms/forms/FormGroup.vue';
import TextInput from '@/components/shared/atoms/forms/fields/TextInput.vue';
import Heading1 from '@/components/shared/atoms/Heading1.vue';
import PassInput from '@/components/shared/atoms/forms/fields/PassInput.vue';
import BodyText from '@/components/shared/atoms/BodyText.vue';
import TextArea from '@/components/shared/atoms/forms/fields/TextArea.vue';
import SelectInput from '@/components/shared/atoms/forms/fields/SelectInput.vue';
import PhoneInput from '@/components/shared/atoms/forms/fields/PhoneInput.vue';
import FileInput from '../../atoms/forms/fields/FileInput.vue';

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
      break;
    case 'password':
      return h(PassInput, {
        name: field.name,
        id: field.id,
        validation: field.validation,
        label: field.label
      });
      break;
    case 'textarea':
      return h(TextArea, {
        name: field.name,
        id: field.id,
        validation: field.validation,
        label: field.label
      });
      break;
    case 'select':
      return h(SelectInput, {
        name: field.name,
        id: field.id,
        validation: field.validation,
        label: field.label,
        options: field.options
      });
      break;
    case 'phone':
      return h(PhoneInput, {
        name: field.name,
        id: field.id,
        validation: field.validation,
        label: field.label
      });
      break;
    case 'file':
      return h(FileInput, {
        name: field.name,
        id: field.id,
        validation: field.validation,
        label: field.label
      });
      break;
    case 'title':
      return h(Heading1, {}, () => field.label);
      break;
    case 'body':
      return h(BodyText, {}, () => field.label);
      break;
    default:
      return null;
  }
};
</script>

<template>
  <div>
    <template v-for="(item, index) in formConfig" :key="index">
      <FormGroup v-if="item.type === 'group'" :name="item.name" :dFlex="item.dFlex">
        <template v-for="(field, fieldIndex) in item.fields" :key="fieldIndex">
          <component :is="renderFormField(field)" />
        </template>
      </FormGroup>
      <component v-else :is="renderFormField(item)" />
    </template>
  </div>
</template>