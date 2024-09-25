import type { Directive } from 'vue'

export function useViewTransition() {
  const vTransition: Directive = {
    mounted(el, binding) {
      el.style.viewTransitionName = binding.value
    },
    updated(el, binding) {
      el.style.viewTransitionName = binding.value
    }
  }

  const startViewTransition = (callback: () => void | Promise<void>) => {
    if ('startViewTransition' in document) {
      (document as any).startViewTransition(callback)
    } else {
      callback()
    }
  }

  return {
    vTransition,
    startViewTransition
  }
}