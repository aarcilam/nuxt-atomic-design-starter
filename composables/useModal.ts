// composables/useModal.js
import { ref, createVNode, render, isRef, unref } from 'vue';

export function useModal() {
  const container = ref(null);

  const showModal = (Component, props = {}) => {
    return new Promise((resolve) => {
      // Verificamos que estamos en el cliente antes de usar document
      if (typeof window === 'undefined') {
        console.warn('showModal can only be used on the client-side.');
        return;
      }

      const containerElement = document.createElement('div');
      container.value = containerElement;

      const vnode = createVNode(Component, {
        ...unref(props),
        onClose: (data) => {
          render(null, containerElement);
          containerElement.remove();
          resolve(data);
        },
      });

      render(vnode, containerElement);
      document.body.appendChild(containerElement);
    });
  };

  return {
    showModal,
  };
}
