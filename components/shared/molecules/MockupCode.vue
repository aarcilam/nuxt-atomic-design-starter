<template>
  <div class="mockup-code relative p-5 mx-auto w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-full overflow-x-auto">
    <pre class="overflow-x-auto whitespace-pre-wrap break-words">
      <code :class="`lang-${lang || 'html'}`">{{ code }}</code>
    </pre>
    <SharedAtomsButton @click="copyToClipboard()" class="absolute top-2 right-2">
      Copy All
    </SharedAtomsButton>
  </div>
</template>


<script setup lang="ts">
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.min.css";

onMounted(() => {
  Prism.highlightAll();
});
import { computed, onMounted } from 'vue';

interface CodeLine {
  prefix: string;
  content: string;
}

const props = defineProps<{
  code: any;
  lang?: string;
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
</script>

<style>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
}
</style>