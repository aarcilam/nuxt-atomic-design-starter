<template>
    <FormKit
      type="select"
      :name="name"
      :id="id"
      :validation="validation"
      :validation-messages="validationMessages"
      :label="label"
      :classes="{
        'outer': 'p-2',
        'input': 'select select-bordered w-full',
      }"
      :options="options"
    />
</template>

<script setup>
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
  options: {
    type: Array,
    required: true
  }
})
</script>