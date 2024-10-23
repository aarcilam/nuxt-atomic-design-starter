<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  viewTransition: false
})
const { getUser } = useAuth()

const { data, error } = await getUser()

console.log(data, error)
</script>

<template>
    <NuxtLayout name="basic">
        <h1>User</h1>
        <pre>{{ data }}</pre>
    </NuxtLayout>
</template>