<!-- components/modals/ExampleModal.vue -->
<template>
  <h3 class="text-lg font-bold">Hello modal!</h3>
  <SharedAtomsButton @click="openModal()">Open new modal</SharedAtomsButton>
  <SharedAtomsButton @click="close()">close</SharedAtomsButton>

</template>

<script setup lang="ts">
import Modal from './Modal.vue';

const { showModal } = useStack()
const openModal = async () => {
  console.log("modal from modal")
  const result = await showModal(Modal);
  console.log(result);
}
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