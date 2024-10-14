import { defineNuxtPlugin } from '#app';
import { defineAsyncComponent, h } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
  const formModules = import.meta.glob('../forms/*.form.ts');

  for (const path in formModules) {
    const name = path
      .split('/')
      .pop()
      ?.replace('.form.ts', '')
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
      .replace(/\./g, '') || '';
    const componentName = name+'Form'

    const component = defineAsyncComponent(async () => {
      const formConfig = (await formModules[path]()).default();

      return {
        components: {
          FormCreator: await import('@/components/shared/molecules/forms/FormCreator.vue'), // Ajusta la ruta según tu estructura
        },
        render() {
          return h('FormCreator', { formConfig, id: componentName });
        },
      };
    });
    nuxtApp.vueApp.component(componentName, component);
  }
});
