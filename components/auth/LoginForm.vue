<script setup lang="ts">
import FormWrap from '@/components/shared/atomic-design/atoms/forms/FormWrap.vue'
import FormCreator from '@/components/shared/atomic-design/molecules/forms/FormCreator.vue'
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

const submit = (data: any) => {
    console.log(data)
}

</script>

<template>
    <FormWrap formId="login-form" @submit="submit">
        <FormCreator :form-config="formConfig" />
    </FormWrap>
</template>
