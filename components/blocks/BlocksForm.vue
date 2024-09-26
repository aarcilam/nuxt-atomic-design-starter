<script setup lang="ts">
import { reactive } from 'vue'
import JumbotronForm from '@/components/blocks/jumbotron/Jumbotron.form.vue'
import FormWrap from '@/components/shared/atomic-design/atoms/forms/FormWrap.vue'

const emit = defineEmits(['submit'])

const submit = (formData: any) => {
    emit('submit', formData)
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
    <Button @click="addItem(items.length, 'jumbotron')">add jumbotron</Button>
    <Button @click="addItem(items.length, 'mediaSection')">add mecia section</Button>
</template>