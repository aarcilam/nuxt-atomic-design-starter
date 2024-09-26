<script setup lang="ts">
import FormWrap from '@/components/shared/atomic-design/atoms/forms/FormWrap.vue'
import FormFieldsCreator from '@/components/shared/atomic-design/molecules/forms/FormFieldsCreator.vue'
import { FormGroup, FormField } from "@/interfaces/FormConfig"
const formConfig: (FormGroup | FormField)[] = [
    {
        type: 'text',
        id: 'email-login',
        name: 'email',
        label: 'Email',
        validation: 'required|email'
    },
    {
        type: 'password',
        id: 'password-login',
        name: 'password',
        label: 'Password',
        validation: 'required'
    }
]

const submit = async (formData: any) => {
    console.log(formData)
    const { data: signInData, error: signInError } = await useSupabaseClient().auth.signInWithPassword(formData)
    console.log(signInData, signInError)
}

</script>

<template>
    <FormWrap formId="login-form" @submit="submit">
        <FormFieldsCreator :form-config="formConfig" />
    </FormWrap>
</template>
