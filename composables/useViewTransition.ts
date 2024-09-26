import type { Directive } from 'vue'
import { useRouter } from 'vue-router'

export function useViewTransition() {
    const router = useRouter()
    const vTransition: Directive = {
        mounted(el, binding) {
            el.style.viewTransitionName = binding.value
            // transitionAnimation(el, binding)
        },
        updated(el, binding) {
            el.style.viewTransitionName = binding.value
            // transitionAnimation(el, binding)
        }
    }

    const startViewTransition = (ruta: string, callback?: () => void | Promise<void>) => {
        if ('startViewTransition' in document) {
            (document as any).startViewTransition(() => {
                router.push(ruta)
                if(callback)callback()
                // applyTransitionStyles()
            })
        } else {
            router.push(ruta)
            if(callback)callback()
        }
    }

    const transitionAnimation = (el: HTMLElement, binding: any) => {
        const duration = binding.arg || '0.3s'
        const animationType = binding.modifiers?.fade ? 'fade' : 'slide'

        el.style.transition = `all ${duration} ease-in-out`

        if (animationType === 'fade') {
            el.style.opacity = '0'
            setTimeout(() => el.style.opacity = '1', 0)
        } else {
            el.style.transform = 'translateY(20px)'
            setTimeout(() => el.style.transform = 'translateY(0)', 0)
        }
    }

    const applyTransitionStyles = () => {
        const styles = `
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
      }
    `
        const styleElement = document.createElement('style')
        styleElement.textContent = styles
        document.head.appendChild(styleElement)
    }

    return {
        vTransition,
        startViewTransition
    }
}