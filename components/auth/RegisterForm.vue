<script setup lang="ts">
import FormWrap from '@/components/shared/atomic-design/atoms/forms/FormWrap.vue'
import FormCreator from '@/components/shared/atomic-design/molecules/forms/FormCreator.vue'
import { FormGroup, FormField } from "@/interfaces/FormConfig"

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

const submit = (data: any) => {
    console.log(data)
}
</script>

<template>
    <FormWrap formId="register-form" @submit="submit">
        <FormCreator :form-config="formConfig" />
    </FormWrap>
</template>