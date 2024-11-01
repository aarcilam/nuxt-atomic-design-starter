<script lang="ts" setup>
    const { setLocale, locale } = useI18n()
</script>

<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
                {{ locale }}
            </div>
        </div>
        <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div class="card-body">
                <span class="text-lg font-bold">{{ $t('changeLang') }}</span>
                <div class="card-actions">
                    <SharedAtomsButton @click="setLocale('en')">English</SharedAtomsButton>
                    <SharedAtomsButton @click="setLocale('es')">Español</SharedAtomsButton>
                </div>
            </div>
        </div>
    </div>
</template>
  
