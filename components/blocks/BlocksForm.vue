<script setup lang="ts">
import { useMyThemeStore } from '~/stores/theme';

const emit = defineEmits(['submit'])
const props = defineProps<{
    blocks: Array<Object>
}>()
const submit = (formData: any) => {
    emit('submit', formData)
}   

const items = reactive(props.blocks)

const itemsObject = reactive(
    items.reduce((acc, item) => {
        // Usamos `item.key` como la clave y `item.value` como el valor
        acc[item.key] = item.value;
        return acc;
    }, {} as Record<string, any>)  // `Record<string, any>` define que acc es un objeto con claves de tipo string y valores de cualquier tipo
);
emit('submit', itemsObject)
console.log(items);

const addItem = (index: number, type: string) => {
    console.log(index, type)
    items.push({key: type+'-'+index})
    console.log(items)
}
</script>

<template>
    <SharedAtomicDesignAtomsFormsFormWrap v-if="items.length>0 || props.blocks.length>0" :value="itemsObject" formId="blocks-form" @submit="submit" submitLabel="Save">
        <SharedAtomicDesignAtomsCardContainer v-for="(item, index) in items">
            <BlocksJumbotronForm v-if="item.key.includes('jumbotron')" :index="index" />
            <BlocksMediaSectionForm v-if="item.key.includes('mediaSection')" :index="index" />
        </SharedAtomicDesignAtomsCardContainer>
    </SharedAtomicDesignAtomsFormsFormWrap>
    <Button @click="addItem(items.length, 'jumbotron')">add jumbotron</Button>
    <br>
    <Button @click="addItem(items.length, 'mediaSection')">add media section</Button>
</template>