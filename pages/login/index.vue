<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import Heading1 from '@/components/shared/atoms/Heading1.vue'

definePageMeta({
  middleware: 'no-auth',
  viewTransition: false
})

const submit = (datos: any) => {
  console.log(datos)
}
</script>

<template>
  <NuxtLayout name="basic">
    <br><br><br><br><br>
    <Heading1>login</Heading1>
    <div class="p-5">
      <div class="flex gap-4">
        <div class="w-1/2">
          <LoginForm @submit="submit" />
        </div>
        <div class="w-1/2">
          <RegisterForm @submit="submit" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>