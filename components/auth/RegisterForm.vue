<script setup lang="ts">
import { registerFormSchema } from './schemas/register.form';

const submit = async (formData: any) => {
    console.log(formData)
    const { data: signUpData, error: signUpError } = await useSupabaseClient().auth.signUp(formData)
    console.log(signUpData, signUpError)
}
</script>

<template>
    <SharedMoleculesFormsFormCreator id="register-form" :form-config="registerFormSchema" @submit="submit" submit-label="Registrate" />
</template>