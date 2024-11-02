<script setup lang="ts">
import { isClient } from '@vueuse/core';

const props = defineProps({
    cart: {
        type: Boolean,
        default: false
    },
    lang: {
        type: Boolean,
        default: false
    },
    theme: {
        type: Boolean,
        default: false
    },
    fixed: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: ''
    }
});

let classes = ''
if (props.fixed) classes += ' fixed'
if (props.color == 'base-100') classes += ' bg-base-100'
if (props.color == 'primary') classes += ' bg-primary'
if (props.color == 'neutral') classes += ' bg-neutral'

</script>

<template>
    <div class="navbar w-full z-50 px-5" :class="classes">
        <div class="flex-1">
            <SharedAtomsLogo></SharedAtomsLogo>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <template v-for="(item, index) in menu()" :key="index">
                    <li v-if="item.visible">
                        <NuxtLink :to="item.link" :class="{ 'text-secondary': item.active }">
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
            <div v-if="props.cart" class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div class="card-body">
                        <span class="text-lg font-bold">8 Items</span>
                        <span class="text-info">Subtotal: $999</span>
                        <div class="card-actions">
                            <SharedAtomsButton>View cart</SharedAtomsButton>
                        </div>
                    </div>
                </div>
            </div>
            <SharedMoleculesLangSelector v-if="props.lang"></SharedMoleculesLangSelector>
            <SharedMoleculesThemeSelector v-if="props.theme"></SharedMoleculesThemeSelector>
            <SharedMoleculesUserDropdown></SharedMoleculesUserDropdown>
        </div>
    </div>
</template>