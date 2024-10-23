<script setup lang="ts">
const submit = async (formData: any) => {
    console.log(formData)
    const { data: signInData, error: signInError } = await useSupabaseClient().auth.signInWithPassword(formData)
    console.log(signInData, signInError)
}

</script>

<template>
    <MyLoginForm @submit="submit" :submit-label="$t('auth.login.submit')"></MyLoginForm>
</template>
