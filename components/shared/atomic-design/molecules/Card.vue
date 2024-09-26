<template>
  <div class="card glass">
    <figure>
      <img :src="image" alt="car!" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{title}}</h2>
      <p>{{ description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
</script>

<style></style>