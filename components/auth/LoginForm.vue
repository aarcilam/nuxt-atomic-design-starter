<script setup lang="ts">

import Toast from '../shared/Toast.vue';
const { showToast } = useStack()

const submit = async (formData: any) => {
    console.log(formData)
    const { data: signInData, error: signInError } = await useSupabaseClient().auth.signInWithPassword(formData)
   await showToast(Toast, { position: 'top-end', msg: "User logged in" });
    console.log(signInData, signInError)
}

</script>

<template>
    <MyLoginForm @submit="submit" :submit-label="$t('auth.login.submit')"></MyLoginForm>
</template>
