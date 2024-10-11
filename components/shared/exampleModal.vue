<!-- components/modals/ExampleModal.vue -->
<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded shadow">
        <h2 class="text-xl mb-4">Example Modal</h2>
        <button @click="close" class="bg-gray-300 p-2 rounded mt-2">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
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
  