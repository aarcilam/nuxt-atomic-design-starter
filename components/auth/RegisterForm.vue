<script setup lang="ts">
import Toast from '../shared/Toast.vue';
const { showToast } = useStack()
const submit = async (formData: any) => {
    console.log(formData)
    const { data: signUpData, error: signUpError } = await useSupabaseClient().auth.signUp(formData)
    await showToast(Toast, { position: 'top-end', msg: "User registered in" });
    console.log(signUpData, signUpError)
}
</script>

<template>
    <MyRegisterForm @submit="submit" :submit-label="$t('auth.register.submit')"></MyRegisterForm>
</template>