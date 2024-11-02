<!-- components/modals/ExampleModal.vue -->
<template>
    <h3 class="text-lg font-bold">Hello drawer!</h3>
    <SharedAtomsButton @click="close(null)">close</SharedAtomsButton>
    <!-- <ul class="menu px-1">
        <template v-for="(item, index) in menu()" :key="index">
            <li v-if="item.visible">
                <NuxtLinkLocale :to="item.link" :class="{ 'text-secondary': item.active }">
                    {{ item.name }}
                </NuxtLinkLocale>
            </li>
        </template>
    </ul> -->
</template>

<script setup lang="ts">
const props = defineProps({
  close: Function
})
</script>