// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  formkit: {
    autoImport: true
  },
  supabase: {
    redirect: false
  },
  experimental: {
    viewTransition: true
  }
})