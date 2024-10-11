// plugins/prism.js
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Puedes elegir otro tema si lo deseas

export default defineNuxtPlugin(() => {
  // Hacer que Prism.js esté disponible globalmente
  return {
    provide: {
      prism: Prism,
    },
  };
});
