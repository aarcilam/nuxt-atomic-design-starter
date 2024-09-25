<script setup lang="ts">
import { useViewTransition } from '~/composables/useViewTransition'
const { startViewTransition } = useViewTransition()
</script>

<template>
  <NuxtLayout name="basic">
    <div class="p-5">
        <br><br><br><br>
      <img @click="startViewTransition('/')" v-transition="'pug'" style="position: absolute;right: 0px;bottom: 0px;" src="https://cdn.royalcanin-weshare-online.io/K1Zu8noBBKJuub5q4rq-/v3/bp-lot-2-pug-couleur-outdoor" />
    </div>
  </NuxtLayout>
</template>