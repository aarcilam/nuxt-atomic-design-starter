<template>
    <button :class="`btn ${colorClass}`">
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    color?: string;
}>();

let colorClass = "btn-primary";
if (props.color === "secondary") {
    colorClass = "btn-secondary";
} else if (props.color === "neutral") {
    colorClass = "btn-neutral";
} else if (props.color === "accent") {
    colorClass = "btn-accent";
}
</script>