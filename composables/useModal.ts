import { ref, h, createVNode, render } from 'vue';

export function useModal() {
  const container = ref(null);

  const showModal = (Component, props = {}) => {
    return new Promise((resolve) => {
      // Creamos un contenedor temporal para el modal.
      const containerElement = document.createElement('div');
      container.value = containerElement;

      // Creamos el VNode del componente pasado.
      const vnode = createVNode(Component, {
        ...props,
        onClose: (data) => {
          // Al emitir el evento 'close', desmontamos el componente y resolvemos la promesa.
          render(null, containerElement);
          containerElement.remove();
          resolve(data);
        },
      });

      // Renderizamos el VNode dentro del contenedor.
      render(vnode, containerElement);
      document.body.appendChild(containerElement);
    });
  };

  return {
    showModal,
  };
}
