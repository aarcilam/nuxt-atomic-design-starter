<script setup lang="ts">
import FormWrap from '@/components/atomic-design/atoms/forms/FormWrap.vue'
import FormCreator from '@/components/atomic-design/atoms/forms/FormCreator.vue'

const submit = (datos: any) => {
    console.log(datos) 
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

const formConfig = [
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
            }
        ]
    },
    {
        type: 'group',
        name: 'preferencias',
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
    <FormWrap :value="datosUsuario" formId="formularioPrueba" @submit="submit">
        <FormCreator :formConfig="formConfig" />
    </FormWrap>
</template>