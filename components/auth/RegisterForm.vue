<script setup lang="ts">
import FormWrap from '@/components/shared/atoms/forms/FormWrap.vue'
import FormFieldsCreator from '@/components/shared/molecules/forms/FormFieldsCreator.vue'
import type { FormGroup, FormField } from "@/interfaces/FormConfig"

const formConfig: (FormGroup | FormField)[] = [
    {
        type: 'text',
        id: 'email-register',
        name: 'email',
        label: 'Email',
        validation: 'required|email'
    },
    {
        type: 'password',
        id: 'password-register',
        name: 'password',
        label: 'Password',
        validation: 'required'
    },
    {
        type: 'text',
        id: 'name-register',
        name: 'name',
        label: 'Name',
        validation: 'required'
    },
    {
        type: 'text',
        id: 'lastname-register',
        name: 'lastname',
        label: 'Lastname',
        validation: 'required'
    },
    {
        type: 'text',
        id: 'phone-register',
        name: 'phone',
        label: 'Phone',
        validation: 'required'
    }
]

const submit = async (formData: any) => {
    console.log(formData)
    const { data: signUpData, error: signUpError } = await useSupabaseClient().auth.signUp(formData)
    console.log(signUpData, signUpError)
}
</script>

<template>
    <FormWrap formId="register-form" @submit="submit">
        <FormFieldsCreator :form-config="formConfig" />
    </FormWrap>
</template>