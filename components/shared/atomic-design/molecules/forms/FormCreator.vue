<script setup lang="ts">
import FormGroup from '@/components/shared/atomic-design/atoms/forms/FormGroup.vue';
import TextInput from '@/components/shared/atomic-design/atoms/forms/fields/TextInput.vue';
import Heading1 from '@/components/shared/atomic-design/atoms/Heading1.vue';
import PassInput from '@/components/shared/atomic-design/atoms/forms/fields/PassInput.vue';
import BodyText from '@/components/shared/atomic-design/atoms/BodyText.vue';

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
    case 'title':
      return h(Heading1, {}, () => field.label);
      break;
    case 'body':
      return h(BodyText, {}, () => field.label);
      break;
    // Aquí puedes agregar más casos para otros tipos de campos
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