<!-- components/modals/ExampleModal.vue -->
<template>
  <div class="modal" open>
    <div class="modal-box w-10/12 max-w-4xl">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="close">✕</button>
      </form>
      <slot></slot>
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
