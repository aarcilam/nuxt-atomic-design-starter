<script setup lang="ts">
import { isClient } from '@vueuse/core';

const user = useSupabaseUser()
const {setLocale, locale} = useI18n()
const {update,setInitialTheme} = useThemeStore()

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
if(props.fixed) classes += ' fixed'
if(props.color == 'base-100') classes += ' bg-base-100'
if(props.color == 'primary') classes += ' bg-primary'
if(props.color == 'neutral') classes += ' bg-neutral'

const changeLocale = (locale) => {
    setLocale(locale)
}
const changeTheme= (theme) => {
    update(theme)
}
</script>

<template>
    <div class="navbar w-full z-50 px-5" :class="classes">    
        <div class="flex-1">
            <SharedAtomsLogo></SharedAtomsLogo>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li><NuxtLink to="/" :class="{ 'text-secondary': $route.path === '/' }">Home</NuxtLink></li>
                <li><NuxtLink to="/design-system" :class="{ 'text-secondary': $route.path.includes('/design-system') }">Design System</NuxtLink></li>
                <li v-if="!user"><NuxtLink to="/login" :class="{ 'text-secondary': $route.path.includes('/login') }">Authentication</NuxtLink></li>
                <!-- <li><NuxtLink to="/edit-blocks" :class="{ 'text-secondary': $route.path.includes('/edit-blocks') }">Edit Blocks</NuxtLink></li> -->
                <!-- <li><NuxtLink to="/edit-blocks/show" :class="{ 'text-secondary': $route.path.includes('/edit-blocks/show') }">Blocks</NuxtLink></li> -->
                <!-- <li><NuxtLink to="/test" :class="{ 'text-secondary': $route.path.includes('/test') }">View transition</NuxtLink></li> -->
                <li><NuxtLink to="/formCreator" :class="{ 'text-secondary': $route.path.includes('/formCreator') }">From Creator</NuxtLink></li>
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
            <div v-if="props.lang" class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        {{locale}}
                    </div>
                </div>
                <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div class="card-body">
                        <span class="text-lg font-bold">{{$t('changeLang')}}</span>
                        <div class="card-actions">
                            <SharedAtomsButton @click="changeLocale('en')">English</SharedAtomsButton>
                            <SharedAtomsButton @click="changeLocale('es')">Español</SharedAtomsButton>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="props.theme" class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        theme
                    </div>
                </div>
                <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div class="card-body">
                        <span class="text-lg font-bold">{{$t('changeLang')}}</span>
                        <div class="card-actions">
                            <SharedAtomsButton @click="changeTheme('lemonade')">lemonade</SharedAtomsButton>
                            <SharedAtomsButton @click="changeTheme('custom')">custom</SharedAtomsButton>
                            <SharedAtomsButton @click="changeTheme('custom2')">custom2</SharedAtomsButton>
                            <SharedAtomsButton @click="changeTheme('dark')">dark</SharedAtomsButton>
                            <SharedAtomsButton @click="changeTheme('cupcake')">cupcake</SharedAtomsButton>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown dropdown-end" v-if="user">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><NuxtLink to="/user" v-if="user">User <span class="badge">New</span></NuxtLink></li>
                    <li><NuxtLink >Settings</NuxtLink></li>
                    <li><NuxtLink >Logout</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
</template>