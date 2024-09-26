<script setup lang="ts">
import { reactive } from 'vue'

const emit = defineEmits(['submit'])

const submit = (formData: any) => {
    emit('submit', formData)
}   

const items = reactive([])

const itemsObject = reactive(
    items.reduce((acc, item) => {
        const key = Object.keys(item)[0];
        acc[key] = item[key];
        return acc;
    }, {})
);

const addItem = (index: number, type: string) => {
    console.log(index, type)
    items.push({[type+'-'+index]: {type: type, title: '', description: ''}})
}
</script>

<template>
    <SharedAtomicDesignAtomsFormsFormWrap v-if="items.length>0" :value="itemsObject" formId="blocks-form" @submit="submit" submitLabel="Save">
        <div v-for="(item, index) in items">
            <BlocksJumbotronForm v-if="item[Object.keys(item)[0]].type == 'jumbotron'" :index="index" />
            <BlocksMediaSectionForm v-if="item[Object.keys(item)[0]].type == 'mediaSection'" :index="index" />
        </div>
    </SharedAtomicDesignAtomsFormsFormWrap>
    <Button @click="addItem(items.length, 'jumbotron')">add jumbotron</Button>
    <br>
    <Button @click="addItem(items.length, 'mediaSection')">add media section</Button>
</template>