<template>
  <FormKit type="file" :accept="accept" multiple="false" :name="name" :id="id" :validation="validation"
    :validation-messages="validationMessages" :label="label" :classes="{
      // 'outer': 'p-2',
      // 'input': 'input input-bordered w-full',
    }" @input="emit('input', $event)" />
</template>

<script setup lang="ts">
const emit = defineEmits(['input'])
defineProps({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  validation: {
    type: String,
    default: ''
  },
  validationMessages: {
    type: Object,
    default: () => ({})
  },
  label: {
    type: String,
    required: true
  },
  accept: {
    type: String,
    required: true
  }
})
</script>