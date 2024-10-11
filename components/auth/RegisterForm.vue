<script setup lang="ts">
import registerForm from './schemas/register.form';

const submit = async (formData: any) => {
    console.log(formData)
    const { data: signUpData, error: signUpError } = await useSupabaseClient().auth.signUp(formData)
    console.log(signUpData, signUpError)
}
</script>

<template>
    <SharedMoleculesFormsFormCreator id="register-form" :form-config="registerForm()" @submit="submit" :submit-label="$t('auth.register.submit')" />
</template>