

<script lang="ts" setup>
    const user = useState('user')
</script>
<template>
   <div class="dropdown dropdown-end" v-if="user">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
                <NuxtLink to="/user" v-if="user">User <span class="badge">New</span></NuxtLink>
            </li>
            <li>
                <NuxtLink>Settings</NuxtLink>
            </li>
            <li>
                <NuxtLink>Logout</NuxtLink>
            </li>
        </ul>
    </div>
</template>
  

  