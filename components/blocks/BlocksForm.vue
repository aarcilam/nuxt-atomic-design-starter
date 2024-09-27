<script setup lang="ts">
import type { Block } from '~/interfaces/Block.interface';

const emit = defineEmits(['submit'])
const props = defineProps<{
    blocks: Block[]
}>()
const submit = (formData: any) => {
    emit('submit', formData)
}   

const items = reactive(props.blocks)

const itemsObject = reactive(
    items.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
    }, {} as Record<string, any>) 
);
emit('submit', itemsObject)
console.log(items);

const addItem = (index: number, type: string) => {
    console.log(index, type)
    items.push({key: type+'-'+index, value: { title: '', description: '' }})
    console.log(items)
}
</script>

<template>
    <SharedAtomicDesignAtomsFormsFormWrap v-if="items.length>0 || props.blocks.length>0" :value="itemsObject" formId="blocks-form" @submit="submit" submitLabel="Save">
        <SharedAtomicDesignAtomsCollapsableCard :title="item.key" v-for="(item, index) in items">
            <BlocksJumbotronForm v-if="item.key.includes('jumbotron')" :index="index" />
            <BlocksMediaSectionForm v-if="item.key.includes('mediaSection')" :index="index" />
        </SharedAtomicDesignAtomsCollapsableCard>
    </SharedAtomicDesignAtomsFormsFormWrap>
    <Button @click="addItem(items.length, 'jumbotron')">add jumbotron</Button>
    <br>
    <Button @click="addItem(items.length, 'mediaSection')">add media section</Button>
</template>