<template>
  <div class="flex">
    <div class="w-1/2">
      <SharedAtomsHeading2>The form on the right is created with this JSON bellow</SharedAtomsHeading2>
      <SharedAtomsBodyText>Edit the json and see how changes</SharedAtomsBodyText>
      <SharedAtomsButton @click="mountBasicForm()" v-if="createdForm==null">Basic form</SharedAtomsButton>
      <SharedAtomsButton @click="mountComplicatedForm()" v-if="createdForm==null">More complicated</SharedAtomsButton>
      <SharedMoleculesMockupCode :code="newForm" :editable="true" lang="js" @update:code="formChange">
        <SharedAtomsButton @click="createNew()" v-if="createdForm==null">New Form</SharedAtomsButton>
        <SharedAtomsButton @click="addInputToNewForm()" v-if="createdForm!=null">Add input</SharedAtomsButton>
      </SharedMoleculesMockupCode>
    </div>
    <div class="w-1/2">
      <SharedMoleculesFormsFormCreator v-if="newForm.length > 0" :form-config="newForm">
      </SharedMoleculesFormsFormCreator>
    </div>
  </div>
</template>

<script lang="ts" setup>
const formKey = ref(0)
const complicatedForm = '[{ "type": "group", "name": "usuario", "fields": [{ "type": "text", "name": "nombre", "id": "nombre", "validation": "required | minLength:3", "label": "Nombre" }, { "type": "text", "name": "correo", "id": "correo", "validation": "required | email", "label": "Correo Electrónico" }, { "type": "text", "name": "edad", "id": "edad", "validation": "required | number | between:18,100", "label": "Edad" }, { "type": "text", "name": "direccion", "id": "direccion", "validation": "required", "label": "Dirección" }, { "type": "text", "name": "ciudad", "id": "ciudad", "validation": "required", "label": "Ciudad" }, { "type": "text", "name": "pais", "id": "pais", "validation": "required", "label": "País" }, { "type": "password", "name": "contrasena", "id": "contrasena", "validation": "required | minLength:6", "label": "Contraseña" }, { "type": "select", "name": "genero", "id": "genero", "validation": "required", "label": "Género", "options": { "masculino": "Masculino", "femenino": "Femenino", "otro": "Otro" } }, { "type": "textarea", "name": "biografia", "id": "biografia", "validation": "required | minLength:10", "label": "Biografía" }] }, { "type": "title", "label": "Preferencias" }, { "type": "group", "name": "preferencias", "dFlex": true, "fields": [{ "type": "text", "name": "tema", "id": "tema", "validation": "required", "label": "Tema" }, { "type": "text", "name": "notificaciones", "id": "notificaciones", "validation": "required", "label": "Notificaciones" }] }, { "type": "text", "name": "test", "id": "test", "validation": "required", "label": "Test" }]'
const simpleForm = '[{ "type": "text", "name": "nombre", "id": "nombre", "validation": "required | minLength:3", "label": "Nombre" }, { "type": "text", "name": "correo", "id": "correo", "validation": "required | email", "label": "Correo Electrónico" }]'
const newForm = ref(JSON.parse(simpleForm))
const testForm = ref({
  json: simpleForm
})

const createdForm = ref(null)

const mountComplicatedForm = () => {
  newForm.value = JSON.parse(complicatedForm)
  testForm.value = { json: complicatedForm }
  formKey.value += 1
}

const mountBasicForm = () => {
  newForm.value = JSON.parse(simpleForm)
  testForm.value = { json: simpleForm }
  formKey.value += 1
}

const createNew = () => {
  createdForm.value = []
  newForm.value = createdForm.value
  testForm.value = { json: createdForm.value.toString() }
  formKey.value += 1
}

const addInputToNewForm = () => {
  let input = {
    "type": "text",
    "name": "nombre",
    "id": "nombre",
    "validation": "required | minLength:3",
    "label": "Nombre"
  }
  createdForm.value.push(input);
  testForm.value = { json: createdForm.value.toString() };
  formKey.value += 1
}

const formChange = (event: any) => {
  newForm.value = event ? JSON.parse(event) : [];
  testForm.value = event ? { json: event } : { json: {} };
  console.log(newForm.value);
  formKey.value += 1
}
</script>

<style></style>