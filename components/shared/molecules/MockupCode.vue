<template>
  <div class="mockup-code relative">
    <pre v-for="(line, index) in formattedCode" :key="index" :data-prefix="line.prefix" :class="line.class">
      <code>{{ line.content }}</code>
    </pre>
    <SharedAtomsButton @click="copyToClipboard()" class="absolute top-2 right-2 ">
      Copy All
    </SharedAtomsButton>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface CodeLine {
  prefix: string;
  content: string;
  class?: string;
}

const props = defineProps<{
  code: string;
}>();

// Dividir el string de código en líneas y agregar prefijos y estilos
const formattedCode = computed<CodeLine[]>(() =>
  props.code.split('\n').map((line, index) => {
    let prefix = (index + 1).toString(); // Usar el número de línea como prefijo
    let className = '';

    // Asignar clases según el contenido de la línea
    if (line.startsWith('npm')) {
      className = 'text-primary'; // Añadir clase si es un comando de npm
    } else if (line.toLowerCase().includes('installing')) {
      className = 'text-warning';
    } else if (line.toLowerCase().includes('done')) {
      className = 'text-success';
    }

    return {
      prefix,
      content: line,
      class: className,
    };
  })
);

// Método para copiar todo el contenido al portapapeles
const copyToClipboard = () => {
  const allCode = props.code; // Obtener todo el código
  navigator.clipboard.writeText(allCode).then(() => {
    console.log('All code copied to clipboard');
  }).catch(err => {
    console.error('Could not copy code: ', err);
  });
};
</script>

<style scoped>
.mockup-code {
  position: relative; /* Para que el botón se posicione correctamente */
}
</style>
