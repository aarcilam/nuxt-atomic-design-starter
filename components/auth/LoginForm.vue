<script setup lang="ts">
import FormWrap from '@/components/shared/atoms/forms/FormWrap.vue'
import FormFieldsCreator from '@/components/shared/molecules/forms/FormFieldsCreator.vue'
import { loginFormSchema } from './schemas/login.form';

const submit = async (formData: any) => {
    console.log(formData)
    const { data: signInData, error: signInError } = await useSupabaseClient().auth.signInWithPassword(formData)
    console.log(signInData, signInError)
}

</script>

<template>
    <FormWrap formId="login-form" @submit="submit">
        <FormFieldsCreator :form-config="loginFormSchema" />
    </FormWrap>
</template>
