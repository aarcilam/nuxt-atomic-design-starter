<template>
  <div class="mockup-code relative p-5">
    <pre>
      <code class="language-javascript">{{ code }}</code>
    </pre>
    <SharedAtomsButton @click="copyToClipboard()" class="absolute top-2 right-2">
      Copy All
    </SharedAtomsButton>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

interface CodeLine {
  prefix: string;
  content: string;
}

const props = defineProps<{
  code: string;
}>();

const formattedCode = computed<CodeLine[]>(() =>
  props.code.split('\n').map((line, index) => ({
    prefix: (index + 1).toString(),
    content: line,
  }))
);

const copyToClipboard = () => {
  navigator.clipboard.writeText(props.code).then(() => {
    console.log('All code copied to clipboard');
  }).catch(err => {
    console.error('Could not copy code: ', err);
  });
};

// Resaltar la sintaxis al montar
onMounted(() => {
  const { prism }:any = useNuxtApp(); // Obtener la instancia de Prism.js
  prism.highlightAll();
});
</script>

<style scoped>
.mockup-code {
  position: relative; /* Para que el botón se posicione correctamente */
}
</style>
