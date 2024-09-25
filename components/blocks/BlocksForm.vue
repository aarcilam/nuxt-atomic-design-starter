<script setup lang="ts">
import { reactive } from 'vue'
import JumbotronForm from './jumbotron/jumbotron.form.vue'
import FormWrap from '@/components/shared/atomic-design/atoms/forms/FormWrap.vue'

const submit = (formData: any) => {
    console.log(formData)
}   

const items = reactive([
    {
        'jumbotron-0': {
            title: 'Hello World',
            description: 'This is a test'
        }
    }
])

const itemsObject = reactive(
    items.reduce((acc, item) => {
        const key = Object.keys(item)[0];
        acc[key] = item[key];
        return acc;
    }, {})
);




const addItem = (index: number, type: string) => {
    console.log(index, type)
    items.push({[type+'-'+index]: {title: '', description: ''}})
}
</script>

<template>
    <FormWrap :value="itemsObject" formId="blocks-form" @submit="submit">
        <JumbotronForm v-for="(item, index) in items" :index="index" />
    </FormWrap>
    <Button @click="addItem(items.length, 'jumbotron')">add</Button>

</template>