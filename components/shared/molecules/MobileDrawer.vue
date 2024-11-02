<script setup lang="ts">
import MobileMenu from '../MobileMenu.vue';

const { showDrawer } = useStack()

const openDrawer = async () => {
  const result = await showDrawer(MobileMenu, { position: 'left' });
}
</script>
<template>
    <svg
        @click="openDrawer()"
        class="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512">
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
</template>