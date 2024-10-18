<template>
  <div class="mockup-code relative p-5 pt-[35px] mx-auto w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-[1200px] overflow-x-auto">
    <pre v-if="!isEditing" class="overflow-x-auto whitespace-pre-wrap break-words">
      <code :class="`language-${lang || 'html'}`">{{ editableCode }}</code>
    </pre>
    <textarea
      v-else
      v-model="editableCode"
      class="overflow-x-auto whitespace-pre-wrap break-words w-full border border-gray-300 p-2 resize-none"
      rows="10"
    ></textarea>
    <div class="absolute top-2 right-5 flex space-x-2">
      <SharedAtomsButton v-if="editable" color="secondary" @click="toggleEditMode">
        {{ isEditing ? 'Stop Editing' : 'Edit' }}
      </SharedAtomsButton>
      <SharedAtomsButton color="secondary" @click="copyToClipboard">
        Copy
      </SharedAtomsButton>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";

const props = defineProps<{
  code: string;
  lang?: string;
  editable?: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:code', code: string): void;
}>();

const isEditing = ref(false);
const editableCode = ref(props.code);

watch(() => props.code, (newCode) => {
  editableCode.value = newCode;
  Prism.highlightAll();
});

onMounted(() => {
  Prism.highlightAll();
});

const toggleEditMode = () => {
  isEditing.value = !isEditing.value;

  // Si se deja de editar, emitir el código actualizado y resaltar el código.
  if (!isEditing.value) {
    emit('update:code', editableCode.value);
    Prism.highlightAll();
  }
};

const copyToClipboard = () => {
  const textToCopy = editableCode.value;
  navigator.clipboard.writeText(textToCopy).then(() => {
    console.log('All code copied to clipboard');
  }).catch(err => {
    console.error('Could not copy code: ', err);
  });
};
</script>

<style>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
}
textarea {
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
  width: 100%;
  height: auto;
  max-height: 400px;
  padding: 1rem;
}
</style>
