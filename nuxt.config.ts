// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // routeRules: {
  //   '/': { prerender: true },
  //   '/components': { prerender: true },
  //   '/edit-blocks': { ssr: false },
  // },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/content',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'es',
        file: 'es.json'
      }
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
  },
  formkit: {
    autoImport: true
  },
  supabase: {
    redirect: false
  },
  experimental: {
    viewTransition: true
  },
})