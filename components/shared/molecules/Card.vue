<template>
  <div class="card glass max-w-[400px]">
    <figure>
      <img :v-transition="'pug-'+id" :src="image" alt="car!" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <SharedAtomsBodyText>{{ description }}</SharedAtomsBodyText>
      <SharedAtomsBodyText v-if="price">{{ price }} {{ discountPrice }}</SharedAtomsBodyText>
      <div class="card-actions justify-end">
        <button v-if="button" class="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface CardItem {
    id: number;
    title: string;
    description: string;
    image: string;
}
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'basic'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  button: {
    type: String,
    required: false,
    default: null
  },
  discountPrice: {
    type: String,
    required: false,
    default: null
  },
  price: {
    type: String,
    required: false,
    default: null
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<style></style>