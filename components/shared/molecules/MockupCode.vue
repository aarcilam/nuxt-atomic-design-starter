<template>
  <div class="mockup-code relative p-5">
    <pre class=" border-r-2">
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
  // const { prism }:any = useNuxtApp(); // Obtener la instancia de Prism.js
  // prism.highlightAll();
});
</script>

<style>
code[class*="language-"],
pre[class*="language-"] {
	color: #c5c8c6 !important;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #1d1f21;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #7C7C7C !important;
}

.token.punctuation {
	color: #c5c8c6 !important;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.keyword,
.token.tag {
	color: #96CBFE !important;
}

.token.class-name {
	color: #FFFFB6 !important;
	text-decoration: underline;
}

.token.boolean,
.token.constant {
	color: #99CC99 !important;
}

.token.symbol,
.token.deleted {
	color: #f92672 !important;
}

.token.number {
	color: #FF73FD !important;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #A8FF60 !important;
}

.token.variable {
	color: #C6C5FE !important;
}

.token.operator {
	color: #EDEDED !important;
  background-color: transparent;
}

.token.entity {
	color: #FFFFB6 !important;
	cursor: help !important;
}

.token.url {
	color: #96CBFE !important;
}

.language-css .token.string,
.style .token.string {
	color: #87C38A !important;
}

.token.atrule,
.token.attr-value {
	color: #F9EE98 !important;
}

.token.function {
	color: #DAD085 !important;
}

.token.regex {
	color: #E9C062 !important;
}

.token.important {
	color: #fd971f !important;
}

.token.important,
.token.bold {
	font-weight: bold !important;
}

.token.italic {
	font-style: italic !important;
}
</style>
