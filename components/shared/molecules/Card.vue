<template>
  <div class="card max-w-[400px]" :class="customClasses">
    <figure>
      <img :v-transition="'pug-'+id" :src="image" alt="car!" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
        <SharedAtomsBodyText v-if="price">{{ price }} {{ discountPrice }}</SharedAtomsBodyText>
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <SharedAtomsBodyText v-if="description">{{ description }}</SharedAtomsBodyText>
      
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
    description?: string;
    price?: string;
    discountPrice?: string;
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
    required: false
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
  },
  glass: {
    type: Boolean,
    required: false,
    default: false
  },
  side: {
    type: Boolean,
    required: false,
    default: false
  },
  fullImg: {
    type: Boolean,
    required: false,
    default: false
  },
  color: {
    type: String,
    required: false,
    default: null
  }
})

let customClasses = ''
if(props.glass) customClasses += " glass"
if(props.side) customClasses += " card-side"
if(props.fullImg) customClasses += " image-full"
if(props.color == "primary") customClasses += " bg-primary"
if(props.color == "secondary") customClasses += " bg-secondary"
if(props.color == "neutral") customClasses += " bg-neutral"
if(props.color == "accent") customClasses += " bg-accent"


</script>

<style></style>