<script lang="ts" setup>
    const { update } = useThemeStore()
</script>
<template>
    <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
                theme
            </div>
        </div>
        <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div class="card-body">
                <span class="text-lg font-bold">{{ $t('changeLang') }}</span>
                <div class="card-actions">
                    <SharedAtomsButton @click="update('lemonade')">lemonade</SharedAtomsButton>
                    <SharedAtomsButton @click="update('custom')">custom</SharedAtomsButton>
                    <SharedAtomsButton @click="update('custom2')">custom2</SharedAtomsButton>
                    <SharedAtomsButton @click="update('dark')">dark</SharedAtomsButton>
                    <SharedAtomsButton @click="update('cupcake')">cupcake</SharedAtomsButton>
                </div>
            </div>
        </div>
    </div>
</template>
  

  