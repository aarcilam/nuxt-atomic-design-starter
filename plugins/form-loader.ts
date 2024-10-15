import { defineNuxtPlugin } from '#app';
import { h } from 'vue';
import FormCreator from '@/components/shared/molecules/forms/FormCreator.vue';
import { useI18n } from 'vue-i18n';

export default defineNuxtPlugin((nuxtApp) => {
  const formModules = import.meta.glob('../forms/*.form.ts');

  for (const path in formModules) {
    const name = path
      .split('/')
      .pop()
      ?.replace('.form.ts', '')
      .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
      .replace(/\./g, '') || '';
    const componentName = name + 'Form';

    const component = {
      async setup(props, { emit }) {
        const { t } = useI18n()
        const formModule = await formModules[path]();
        const formConfig = formModule.default(t);

        const handleSubmit = (formData) => {
          emit('submit', formData);
        };

        const handleChange = (formData) => {
          emit('change', formData);
        };

        return () => {
          return h('div', [
            h(FormCreator, {
              formConfig,
              id: componentName,
              submitLabel: props.submitLabel || 'Enviar',
              value: props.value || {},
              onSubmit: handleSubmit,
              onChange: handleChange,
            }),
          ]);
        };
      },
      props: {
        submitLabel: {
          type: String,
          default: 'Enviar',
        },
        value: {
          type: Object,
          default: () => ({}),
        },
      },
      emits: ['submit', 'change'],
    };

    nuxtApp.vueApp.component(componentName, component);
  }
});
