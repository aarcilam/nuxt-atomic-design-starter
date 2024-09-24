<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'

const submit = (datos: any) => {
    console.log(datos)
}
</script>

<template>
  <div class="p-5">
    <h1>Home</h1>
    <div class="flex gap-4"> 
      <div class="w-1/2">
        <LoginForm @submit="submit" />
      </div>
      <div class="w-1/2">
        <RegisterForm @submit="submit" />
      </div>
    </div>
  </div>
</template>
