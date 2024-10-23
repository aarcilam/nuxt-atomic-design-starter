<!-- components/modals/ExampleModal.vue -->
<template>
  <div class="modal z-10" open @click="close" v-auto-animate>
    <div class="modal-box w-10/12 max-w-4xl animate__animated animate__fadeIn" @click.stop>
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="close">✕</button>
      </form>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close']);

const close = () => {
  emitClose(null);
};

const emitClose = (data) => {
  emit('close', data);
};
</script>
