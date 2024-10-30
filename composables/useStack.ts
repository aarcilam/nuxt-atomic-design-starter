import { createVNode, h, ref, render } from "vue";
import DrawerLayout from "~/components/shared/molecules/DrawerLayout.vue";
import ModalLayout from "~/components/shared/molecules/ModalLayout.vue";
import ToastLayout from "~/components/shared/molecules/ToastLayout.vue";

export function useStack() {
  const stack = ref([]);
  const container = ref(null);

  const createContainer = () => {
    const containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
    container.value = containerElement;
    return containerElement;
  };

  const createStackComponent = (Component, Layout, props = {}, resolve) => {
    const containerElement = createContainer();
  
    // Creamos el vnode del layout, y dentro del slot pasamos el Component con la función close
    const vnode = createVNode(Layout, { ...props }, {
      default: ({ close }) => h(Component, { ...props, close }), // Pasamos 'close' como prop
    });
  
    render(vnode, containerElement);
    stack.value.push(containerElement);
  
    // Configuramos la función de cierre del modal
    vnode.props.onClose = (data) => {
      render(null, containerElement); // Desmontamos el modal
      containerElement.remove(); // Removemos el contenedor del DOM
      stack.value.pop(); // Quitamos el contenedor del stack
      resolve(data); // Resolvemos con los datos del cierre
    };
  };
  

  const showModal = (Component, props = {}) => {
    return new Promise((resolve) => {
      createStackComponent(Component, ModalLayout, props, resolve);
    });
  };

  const showToast = (Component, props = {}, duration = 3000) => {
    return new Promise((resolve) => {
      createStackComponent(Component, ToastLayout, props, resolve);

      // Desaparece el toast después de 'duration' milisegundos
      setTimeout(() => {
        const lastContainer = stack.value[stack.value.length - 1];
        if (lastContainer) {
          render(null, lastContainer); // Desmontamos el toast
          lastContainer.remove(); // Removemos el contenedor del DOM
          stack.value.pop(); // Quitamos el contenedor del stack
          resolve(null); // Resolvemos la promesa
        }
      }, duration);
    });
  };

  const showDrawer = (Component, props = {}) => {
    return new Promise((resolve) => {
      createStackComponent(Component, DrawerLayout, props, resolve);
    });
  };

  return {
    showModal,
    showToast,
    showDrawer,
  };
}
