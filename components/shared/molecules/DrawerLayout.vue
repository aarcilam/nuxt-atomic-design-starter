<template>
  <div class="fixed top-2 left-0 w-screen h-screen z-10" @click.stop="close" v-auto-animate>
    <div class="p-5 bg-neutral animate__animated" :class="classes" @click.stop>
      <slot :close="emitClose"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['close']);
const props = defineProps({
  position: {
    type: String,
    default: 'left',
    validator: (value:string) => {
      return ['left', 'right', 'bottom'].includes(value);
    }
  }
})

let classes = "w-96 h-screen pt-[100px] animate__fadeInLeft"
if(props.position == 'bottom') classes = "w-screen h-2/3 pt-[50px] fixed bottom-0 animate__fadeInUp"
if(props.position == 'right') classes = "w-96 h-screen pt-[100px] float-right animate__fadeInRight"

const close = () => {
  emitClose(null);
};

const emitClose = (data) => {
  emit('close', data);
};
</script>

<style></style>