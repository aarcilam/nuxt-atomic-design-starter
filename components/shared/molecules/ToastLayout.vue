<template>
  <div :class="classes + ' toast'">
    <div class="alert alert-info">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  position: {
    type: String,
    default: 'top-end',
    validator: (value:string) => {
      return ['top-end', 'top-start', 'bottom-end', 'bottom-start'].includes(value);
    }
  }
})

let classes = "toast-top toast-end"
if(props.position == 'top-start') classes = "toast-top toast-start"
if(props.position == 'bottom-start') classes = "toast-bottom toast-start"
if(props.position == 'top-end') classes = "toast-top toast-end"
if(props.position == 'bottom-end') classes = "toast-bottom toast-end"
</script>

<style>

</style>