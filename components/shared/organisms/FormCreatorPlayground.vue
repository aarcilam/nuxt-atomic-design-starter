<template>
  <div class="flex">
    <div class="w-1/2">
      <SharedAtomsHeading2>The form on the right is created with this JSON bellow</SharedAtomsHeading2>
      <SharedAtomsBodyText>Edit the json and see how changes</SharedAtomsBodyText>
      <div class="flex gap-1 mt-5">
        <SharedAtomsButton @click="mountBasicForm()">Basic form</SharedAtomsButton>
        <SharedAtomsButton @click="mountComplicatedForm()">More complicated</SharedAtomsButton>
        <SharedAtomsButton @click="createNew()">New Form</SharedAtomsButton>
        <SharedAtomsButton @click="showAddField = !showAddField" v-auto-animate><template v-if="!showAddField">Add field</template><template v-else>Close</template> </SharedAtomsButton>
      </div>
      <AddInputToFormCreatorForm v-if="showAddField" class="w-full" submit-label="Add" @submit="addInputToNewForm" v-auto-animate />
      <SharedAtomsHeading2 class="mt-5">Form config</SharedAtomsHeading2>
      <SharedMoleculesMockupCode :code="JSON.stringify(newForm)" :editable="true" lang="js" @update:code="formChange">
      </SharedMoleculesMockupCode>
      <SharedAtomsHeading2>Form component</SharedAtomsHeading2>
      <SharedMoleculesMockupCode :code="'<SharedMoleculesFormsFormCreator :form-config='+JSON.stringify(newForm)+' />'" lang="js" @update:code="formChange">
      </SharedMoleculesMockupCode>
      <SharedAtomsHeading2 class="mt-5">Form schema</SharedAtomsHeading2>
      <SharedAtomsBodyText>You can save this schema in the /forms folder nuxt plugin detects and declare component for you , if your schema is called example.form.ts it produces < ExampleForm /></SharedAtomsBodyText>
      <SharedMoleculesMockupCode :code="getFormAutoloadSchema(JSON.stringify(newForm))" lang="js"></SharedMoleculesMockupCode>
    </div>
    <div class="w-1/2 p-5">
      <SharedMoleculesFormsFormCreator v-if="newForm.length > 0" :form-config="newForm">
      </SharedMoleculesFormsFormCreator>
      <br><br><br><br>
    </div>
  </div>
</template>

<script lang="ts" setup>
const formKey = ref(0)
const complicatedForm = '[{ "type": "group", "name": "usuario", "fields": [{ "type": "text", "name": "nombre", "id": "nombre", "validation": "required | minLength:3", "label": "Nombre" }, { "type": "text", "name": "correo", "id": "correo", "validation": "required | email", "label": "Correo Electrónico" }, { "type": "text", "name": "edad", "id": "edad", "validation": "required | number | between:18,100", "label": "Edad" }, { "type": "text", "name": "direccion", "id": "direccion", "validation": "required", "label": "Dirección" }, { "type": "text", "name": "ciudad", "id": "ciudad", "validation": "required", "label": "Ciudad" }, { "type": "text", "name": "pais", "id": "pais", "validation": "required", "label": "País" }, { "type": "password", "name": "contrasena", "id": "contrasena", "validation": "required | minLength:6", "label": "Contraseña" }, { "type": "select", "name": "genero", "id": "genero", "validation": "required", "label": "Género", "options": { "masculino": "Masculino", "femenino": "Femenino", "otro": "Otro" } }, { "type": "textarea", "name": "biografia", "id": "biografia", "validation": "required | minLength:10", "label": "Biografía" }] }, { "type": "title", "label": "Preferencias" }, { "type": "group", "name": "preferencias", "dFlex": true, "fields": [{ "type": "text", "name": "tema", "id": "tema", "validation": "required", "label": "Tema" }, { "type": "text", "name": "notificaciones", "id": "notificaciones", "validation": "required", "label": "Notificaciones" }] }, { "type": "text", "name": "test", "id": "test", "validation": "required", "label": "Test" }]'
const simpleForm = '[{ "type": "text", "name": "nombre", "id": "nombre", "validation": "required | minLength:3", "label": "Nombre" }, { "type": "text", "name": "correo", "id": "correo", "validation": "required | email", "label": "Correo Electrónico" }]'
const newForm = ref(JSON.parse(simpleForm))
const showAddField = ref(false)
const testForm = ref({
  json: simpleForm
})

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
  newForm.value = []
  testForm.value = { json: [].toString() }
  formKey.value += 1
}

const addInputToNewForm = (e) => {
  console.log(e);
  let input = {
    "type": e.type,
    "name": e.name,
    "id": e.name,
    "validation": e.validation,
    "label": e.name
  }
  newForm.value.push(input);
  testForm.value = { json: newForm.value.toString() };
  formKey.value += 1
}

const formChange = (event: any) => {
  newForm.value = event ? JSON.parse(event) : [];
  testForm.value = event ? { json: event } : { json: {} };
  console.log(newForm.value);
  formKey.value += 1
}

const getFormAutoloadSchema = (schema)=>{
return `
import type { FormGroup, FormField } from "@/interfaces/FormConfig"

export default (t): (FormGroup | FormField)[] => {
  return ${schema}
}`
}
</script>

<style></style>