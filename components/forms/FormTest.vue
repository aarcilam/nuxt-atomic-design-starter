<script setup lang="ts">
import FormWrap from '@/components/shared/atoms/forms/FormWrap.vue'
import FormFieldsCreator from '@/components/shared/molecules/forms/FormFieldsCreator.vue'
import Heading1 from '@/components/shared/atoms/Heading1.vue'
import BodyText from '@/components/shared/atoms/BodyText.vue'
import  type { FormGroup, FormField } from "@/interfaces/FormConfig"

const emit = defineEmits(['submit']);

const submit = (datos: any) => {
    emit('submit', datos);
}

const datosUsuario = {
    usuario: {
        nombre: 'Juan',
        correo: 'juan@ejemplo.com',
        edad: 30,
        direccion: 'Calle Principal 123',
        ciudad: 'Ciudad Ejemplo',
        pais: 'País Ejemplo'
    },
    test: 'test',
    preferencias: {
        tema: 'claro',
        notificaciones: true
    }
}

const formConfig: (FormGroup | FormField)[] = [
    {
        type: 'group',
        name: 'usuario',
        fields: [
            {
                type: 'text',
                name: 'nombre',
                id: 'nombre',
                validation: 'required | minLength:3',
                label: 'Nombre'
            },
            {
                type: 'text',
                name: 'correo',
                id: 'correo',
                validation: 'required | email',
                label: 'Correo Electrónico'
            },
            {
                type: 'text',
                name: 'edad',
                id: 'edad',
                validation: 'required | number | between:18,100',
                label: 'Edad'
            },
            {
                type: 'text',
                name: 'direccion',
                id: 'direccion',
                validation: 'required',
                label: 'Dirección'
            },
            {
                type: 'text',
                name: 'ciudad',
                id: 'ciudad',
                validation: 'required',
                label: 'Ciudad'
            },
            {
                type: 'text',
                name: 'pais',
                id: 'pais',
                validation: 'required',
                label: 'País'
            },
            {
                type: 'password',
                name: 'contrasena',
                id: 'contrasena',
                validation: 'required | minLength:6',
                label: 'Contraseña'
            },
            {
                type: 'select',
                name: 'genero',
                id: 'genero',
                validation: 'required',
                label: 'Género',
                options: {
                    masculino: 'Masculino',
                    femenino: 'Femenino',
                    otro: 'Otro'
                }
            },
            {
                type: 'textarea',
                name: 'biografia',
                id: 'biografia',
                validation: 'required | minLength:10',
                label: 'Biografía'
            }
        ]
    },
    {
        type: 'title',
        label: 'Preferencias'
    },
    {
        type: 'group',
        name: 'preferencias',
        dFlex: true,
        fields: [
            {
                type: 'text',
                name: 'tema',
                id: 'tema',
                validation: 'required',
                label: 'Tema'
            },
            {
                type: 'text',
                name: 'notificaciones',
                id: 'notificaciones',
                validation: 'required',
                label: 'Notificaciones'
            }
        ]
    },
    {
        type: 'text',
        name: 'test',
        id: 'test',
        validation: 'required',
        label: 'Test'
    }
]


</script>

<template>
    <Heading1>Formulario de Prueba</Heading1>
    <BodyText>Este es un formulario de prueba para demostrar la funcionalidad de FormKit.</BodyText>
    <FormWrap :value="datosUsuario" formId="formularioPrueba" @submit="submit">
        <FormFieldsCreator :formConfig="formConfig" />
    </FormWrap>
</template>