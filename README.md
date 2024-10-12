# Nuxt Good Start

Este es un proyecto open source construido con **Nuxt 3**. El objetivo de este proyecto es ofrecer una base sólida para desarrollar aplicaciones web rápidas y modernas, con un enfoque en la modularidad, la internacionalización, el manejo de formularios, y un diseño adaptable.

## Características

- **Nuxt 3** para una arquitectura modular y un desarrollo más rápido de aplicaciones web.
- **Internacionalización** con `@nuxtjs/i18n` para manejar múltiples idiomas.
- **Tailwind CSS** y **daisyUI** para estilos y componentes predefinidos.
- **FormKit** para la creación de formularios avanzados.
- **Supabase** para la gestión de bases de datos y autenticación.
- **Pinia** para el manejo del estado global.

## Tecnologías y Dependencias

### Dependencias

- **[@formkit/nuxt](https://github.com/formkit/nuxt)**: Utilizado para simplificar la creación de formularios en Nuxt 3. Ofrece componentes de formularios avanzados, validación de formularios y control sobre el estado del formulario, lo que permite a los desarrolladores centrarse en la lógica de negocio sin preocuparse por los detalles de la creación de formularios.

- **[@nuxt/image](https://github.com/nuxt/image)**: Esta herramienta optimiza automáticamente las imágenes para mejorar el rendimiento de la aplicación. Es especialmente útil para mejorar la velocidad de carga y reducir el consumo de ancho de banda.

- **[@nuxtjs/i18n](https://github.com/nuxt-modules/i18n)**: Agrega soporte de internacionalización a la aplicación. Permite la traducción de textos y la configuración de múltiples idiomas, lo que es esencial para aplicaciones que buscan llegar a un público global.

- **[@nuxtjs/supabase](https://github.com/nuxt-modules/supabase)**: Se integra con Supabase para facilitar la autenticación y la interacción con bases de datos. Es útil para aplicaciones que requieren funcionalidades backend como autenticación de usuarios, gestión de datos y más, sin la necesidad de configurar un servidor personalizado.

- **[@nuxtjs/tailwindcss](https://github.com/nuxt-modules/tailwindcss)**: Proporciona una integración directa de Tailwind CSS en Nuxt, facilitando la creación de diseños modernos y adaptables sin escribir CSS personalizado. Es ideal para mantener un código limpio y un diseño coherente.

- **[@pinia/nuxt](https://github.com/vuejs/pinia)**: Utilizado para el manejo del estado global en la aplicación. Pinia es una alternativa moderna y liviana a Vuex, y se integra perfectamente con Nuxt 3, proporcionando un control centralizado y fácil de usar para el estado de la aplicación.

- **[nuxt](https://github.com/nuxt/nuxt)**: La columna vertebral del proyecto. Nuxt 3 facilita la creación de aplicaciones Vue modernas con una arquitectura que permite el renderizado del lado del servidor (SSR) y la generación estática, entre otros beneficios.

- **[vue](https://github.com/vuejs/core)** y **[vue-router](https://github.com/vuejs/router)**: Vue.js es el framework base para la construcción de la interfaz de usuario, mientras que Vue Router es esencial para la navegación dentro de la aplicación. Nuxt abstrae muchas de estas configuraciones, pero tener estas dependencias garantiza el control total en la creación de componentes y en la configuración de rutas.

### DevDependencies

- **[daisyui](https://github.com/saadeghi/daisyui)**: Extensión de componentes para Tailwind CSS que permite utilizar una colección de componentes preconstruidos y estilos predeterminados. Esto acelera el desarrollo y proporciona un diseño consistente sin necesidad de escribir CSS adicional.

## Scripts

- **`dev`**: Ejecuta el servidor de desarrollo.
- **`build`**: Compila la aplicación para producción.
- **`generate`**: Genera una versión estática de la aplicación, útil para el despliegue en servidores estáticos.
- **`preview`**: Previsualiza la aplicación compilada antes de desplegarla.
- **`postinstall`**: Comando que se ejecuta después de instalar las dependencias para preparar el entorno de Nuxt.

## Componentes Propios

Aquí puedes describir algunos de los componentes propios que has creado para tu aplicación. Asegúrate de incluir detalles como:

- **Nombre del componente**: Descripción breve de su función.
- **Props**: Enumera las propiedades que recibe el componente y su tipo.
- **Ejemplo de uso**: Proporciona un fragmento de código que muestre cómo se utiliza el componente.

### Ejemplo:

#### `MyButton.vue`

- **Descripción**: Un botón reutilizable que puede recibir diferentes estilos y manejar eventos de clic.
  
- **Props**:
  - `label` (String): Texto que se muestra en el botón.
  - `type` (String): Tipo de botón (e.g., "primary", "secondary").
  
- **Ejemplo de uso**:
  ```vue
  <template>
    <MyButton label="Haz clic en mí" type="primary" @click="manejarClic" />
  </template>
  
  <script>
  export default {
    methods: {
      manejarClic() {
        console.log('¡Botón clicado!');
      }
    }
  }
  </script>
  ```

## Compilación en Docker
Este proyecto puede compilarse en Docker. Utiliza el siguiente comando para construir la imagen de Docker:
```
    docker build -t starter-app-with-nuxt .
```
