<script setup lang="ts">
const route = useRoute()

const blog:any = await queryContent('/blog').where({
  slug: route.params.slug
}).findOne()

console.log(blog);

</script>

<template>
  <NuxtLayout name="basic">
    <figure>
      <img :v-transition="blog.slug" :src="blog.image" alt="car!" />
    </figure>

      <h2 class="card-title">
        {{ blog.title }}
      </h2>
  </NuxtLayout>
</template>