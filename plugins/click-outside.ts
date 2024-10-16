export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el, binding) {
      // Definimos la función `event` para ser usada en el `addEventListener`
      el.clickOutsideEvent = (event) => {
        // Emitimos el evento si el clic es fuera del elemento
        console.log("clickOutsideEvent");
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };

      // Evitamos que el evento de clic se propague al hacer clic en el elemento
      el.stopProp = (event) => event.stopPropagation();

      // Añadimos los listeners
      el.addEventListener("click", el.stopProp);
      document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
      // Removemos los listeners cuando se destruye el componente
      el.removeEventListener("click", el.stopProp);
      document.body.removeEventListener("click", el.clickOutsideEvent);
    },
  });
});
