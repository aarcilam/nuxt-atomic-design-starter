<!-- components/modals/ExampleModal.vue -->
<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl mb-4">Example Modal</h2>
        <input v-model="inputValue" placeholder="Enter some data" class="border p-2 mb-4" />
        <button @click="submit" class="bg-blue-500 text-white p-2 rounded">Submit</button>
        <button @click="close" class="bg-gray-300 p-2 rounded mt-2">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const emit = defineEmits(['close']);
  const inputValue = ref('');
  
  const submit = () => {
    emitClose(inputValue.value);
  };
  
  const close = () => {
    emitClose(null);
  };

  const emitClose = (data) => {
    emit('close', data);
  };
  </script>
  