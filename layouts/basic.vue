<script setup lang="ts">

</script>

<template>
  <div>
    <SharedMoleculesNav :lang="true" :theme="true" :fixed="true" color="base-100" />
    <main class="pt-[70px] container mx-auto"   >
      <slot />
    </main>
  </div>
</template>
