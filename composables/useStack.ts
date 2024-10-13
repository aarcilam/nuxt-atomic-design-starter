import { ref, createVNode, render, h } from 'vue';
import DrawerLayout from '~/components/shared/molecules/DrawerLayout.vue';
import ModalLayout from '~/components/shared/molecules/ModalLayout.vue';
import ToastLayout from '~/components/shared/molecules/ToastLayout.vue';

export function useStack() {
  const stack = ref([]);
  const container = ref(null);

  const createContainer = () => {
    const containerElement = document.createElement('div');
    document.body.appendChild(containerElement);
    container.value = containerElement;
    return containerElement;
  };

  const createStackComponent = (Component, Layout, props = {}, resolve) => {
    const containerElement = createContainer();
    const vnode = createVNode(Layout, { ...props }, {
      default: () => h(Component, props),
    });

    render(vnode, containerElement);
    stack.value.push(containerElement);

    vnode.props.onClose = (data) => {
      render(null, containerElement);
      containerElement.remove();
      stack.value.pop();
      resolve(data);
    };
  };

  const showModal = (Component, props = {}) => {
    return new Promise((resolve) => {
      createStackComponent(Component, ModalLayout, props, resolve);
    });
  };

  const showToast = (Component, props = {}) => {
    return new Promise((resolve) => {
      createStackComponent(Component, ToastLayout, props, resolve);
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

