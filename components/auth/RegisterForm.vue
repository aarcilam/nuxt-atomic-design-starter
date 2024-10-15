<script setup lang="ts">
const submit = async (formData: any) => {
    console.log(formData)
    const { data: signUpData, error: signUpError } = await useSupabaseClient().auth.signUp(formData)
    console.log(signUpData, signUpError)
}
</script>

<template>
    <MyRegisterForm @submit="submit" :submit-label="$t('auth.register.submit')"></MyRegisterForm>
</template>