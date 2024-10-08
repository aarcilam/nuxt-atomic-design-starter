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
const reDraw = ref(false)
const transformToObj = () => {
    return items.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
    }, {} as Record<string, any>)
}
const itemsObject = reactive(
    transformToObj()
);

emit('submit', itemsObject)
console.log(items);

const addItem = (index: number, type: string) => {
    reDraw.value = true;
    console.log(index, type)
    items.push({ key: type + '-' + index, value: { title: '', description: '' } })
    const newObj = {}
    items.forEach(item => {
        if (itemsObject[item.key]) {
            newObj[item.key] = itemsObject[item.key];
        }
    });
    Object.assign(itemsObject, newObj);
    console.log(items)
    reDraw.value = false;

}

function move(oldIndex, newIndex) {
    reDraw.value = true;
    if (newIndex >= items.length) {
        let k = newIndex - items.length + 1;
        while (k--) {
            items.push(undefined);
        }
    }
    items.splice(newIndex, 0, items.splice(oldIndex, 1)[0])
    console.log(itemsObject);
    const newObj = {}
    items.forEach(item => {
        if (itemsObject[item.key]) {
            newObj[item.key] = itemsObject[item.key];
        }
    });
    Object.assign(itemsObject, newObj);
    console.log(itemsObject);
    emit('submit', itemsObject)
    reDraw.value = false;

}

function remove(index) {
    reDraw.value = true;
    items.splice(index, 1);
    const newObj = {}
    items.forEach(item => {
        if (itemsObject[item.key]) {
            newObj[item.key] = itemsObject[item.key];
        }
    });
    Object.assign(itemsObject, newObj);
    emit('submit', itemsObject)
    reDraw.value = false;
}
</script>

<template>
    <SharedAtomicDesignAtomsFormsFormWrap v-if="(items.length > 0 || props.blocks.length > 0) && !reDraw" :value="itemsObject"
        formId="blocks-form" @submit="submit" submitLabel="Save">
        <SharedAtomicDesignAtomsCollapsableCard :title="item.key" v-for="(item, index) in items" :key="index">
            <div class="flex">
                <BlocksJumbotronForm v-if="item.key.includes('jumbotron')" :index="index" :key="index" />
                <BlocksMediaSectionForm v-if="item.key.includes('mediaSection')" :index="index" :key="index" />
                <div>
                    <div v-if="index > 0" @click="move(index, index - 1)">UP</div>
                    <div v-if="index < items.length - 1" @click="move(index, index + 1)">DOWN</div>
                    <div @click="remove(index)">DEELETE</div>
                </div>
            </div>

        </SharedAtomicDesignAtomsCollapsableCard>
    </SharedAtomicDesignAtomsFormsFormWrap>
    <Button @click="addItem(items.length, 'jumbotron')">add jumbotron</Button>
    <br>
    <Button @click="addItem(items.length, 'mediaSection')">add media section</Button>
</template>