import { defineNuxtPlugin } from '#app'
import { useViewTransition } from '~/composables/useViewTransition'

export default defineNuxtPlugin((nuxtApp) => {
  const { vTransition } = useViewTransition()
  nuxtApp.vueApp.directive('transition', vTransition)
})