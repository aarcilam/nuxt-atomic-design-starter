# Nuxt Good Start

Este es un proyecto open source construido con **Nuxt 3**. El objetivo de este
proyecto es ofrecer una base sólida para desarrollar aplicaciones web rápidas y
modernas, con un enfoque en la modularidad, la internacionalización, el manejo
de formularios, y un diseño adaptable.

## Características especiales

- **Nuxt 3** para una arquitectura modular y un desarrollo rápido de
  aplicaciones web.
- **Internacionalización** con `@nuxtjs/i18n` para manejar múltiples idiomas.
- **Tailwind CSS** y **daisyUI** para estilos y componentes predefinidos.
- **FormKit** para la creación de formularios avanzados.
- **Supabase** para la gestión de bases de datos y autenticación.
- **Drizzle ORM** para interactuar con la base de datos de Supabase de manera
  sencilla y eficiente.
- **Pinia** para el manejo del estado global.
- **Bun**: Utilizado para la gestión de paquetes y la compilación de la
  aplicación. Bun es un gestor de paquetes y un compilador de código rápido y
  eficiente, diseñado para reemplazar a npm y yarn. Ofrece una mayor velocidad y
  eficiencia en la gestión de dependencias y la compilación de la aplicación, lo
  que reduce el tiempo de desarrollo y mejora la experiencia del desarrollador.
- **[Plugin de carga de formularios]**: Este plugin carga automáticamente los
  módulos de formularios definidos en el directorio `../forms/*.form.ts`. Cada
  módulo de formulario se convierte en un componente de Vue que puede ser
  utilizado en la aplicación. El plugin utiliza `import.meta.glob` para cargar
  los módulos de forma dinámica y `useI18n` para internacionalizar los textos de
  los formularios. Por ejemplo, un archivo `example.form.ts` se convertiría en
  un componente auto importado `<ExampleForm>`.

## Tecnologías y Dependencias

### Dependencias

- **[@formkit/nuxt](https://github.com/formkit/nuxt)**: Para la creación y
  manejo avanzado de formularios.
- **[@nuxt/image](https://github.com/nuxt/image)**: Optimización automática de
  imágenes para mejorar el rendimiento.
- **[@nuxtjs/i18n](https://github.com/nuxt-modules/i18n)**: Soporte para
  internacionalización, permitiendo la traducción de textos y el manejo de
  múltiples idiomas.
- **[@nuxtjs/supabase](https://github.com/nuxt-modules/supabase)**: Integración
  con Supabase para facilitar la autenticación y la interacción con bases de
  datos.
- **[Drizzle ORM](https://github.com/drizzle-team/drizzle-orm)**: ORM ligero que
  se integra con Supabase para gestionar las consultas de la base de datos de
  manera eficiente.
- **[@nuxtjs/tailwindcss](https://github.com/nuxt-modules/tailwindcss)**:
  Integración directa de Tailwind CSS para diseños modernos y adaptables.
- **[@pinia/nuxt](https://github.com/vuejs/pinia)**: Para el manejo centralizado
  del estado global en la aplicación.
- **[nuxt](https://github.com/nuxt/nuxt)**: La columna vertebral del proyecto.
- **[vue](https://github.com/vuejs/core)** y
  **[vue-router](https://github.com/vuejs/router)**: Framework base para la
  interfaz de usuario y gestión de rutas.

### DevDependencies

- **[daisyui](https://github.com/saadeghi/daisyui)**: Extensión de componentes
  para Tailwind CSS que permite utilizar una colección de componentes
  preconstruidos y estilos predeterminados. Esto acelera el desarrollo y
  proporciona un diseño consistente sin necesidad de escribir CSS adicional.

## Ejecución con Bun

Para ejecutar este proyecto, es necesario utilizar Bun, un gestor de paquetes y
un ejecutor de scripts rápido y moderno. Asegúrate de tener Bun instalado en tu
sistema y ejecuta el siguiente comando:

```
bun run dev
```

## Scripts

- **`dev`**: Ejecuta el servidor de desarrollo.
- **`build`**: Compila la aplicación para producción.
- **`generate`**: Genera una versión estática de la aplicación, útil para el
  despliegue en servidores estáticos.
- **`preview`**: Previsualiza la aplicación compilada antes de desplegarla.
- **`postinstall`**: Comando que se ejecuta después de instalar las dependencias
  para preparar el entorno de Nuxt.

## Componentes Propios

Aquí puedes describir algunos de los componentes propios que has creado para tu
aplicación. Asegúrate de incluir detalles como:

- **Nombre del componente**: Descripción breve de su función.
- **Props**: Enumera las propiedades que recibe el componente y su tipo.
- **Ejemplo de uso**: Proporciona un fragmento de código que muestre cómo se
  utiliza el componente.

### Ejemplo:

#### `MyButton.vue`

- **Descripción**: Un botón reutilizable que puede recibir diferentes estilos y
  manejar eventos de clic.

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

Este proyecto puede compilarse en Docker. Utiliza el siguiente comando para
construir la imagen de Docker:

```
docker build -t starter-app-with-nuxt .
```

## Creación de una copia y sincronización con nuxtstarter

### 1. Crear un repositorio Git local

1. **Crear una carpeta para el proyecto:**
   - mkdir mi-proyecto
   - cd mi-proyecto

2. **Inicializar el repositorio Git:**
   - git init

3. **Crear un archivo README.md:**
   - echo "# Mi Proyecto" > README.md

4. **Añadir el archivo y realizar el primer commit:**
   - git add .
   - git commit -m "Primer commit - inicialización del proyecto"

### 2. Añadir un repositorio remoto (origin)

1. **Añadir tu repositorio remoto como origin:**
   - git remote add origin https://github.com/usuario/mi-repositorio.git

2. **Subir los cambios al repositorio remoto:**
   - git push -u origin main

### 3. Sincronización con el repositorio original (nuxtstarter)

1. **Agregar el repositorio original como nuxtstarter:**
   - git remote add nuxtstarter https://github.com/aarcilam/nuxt-atomic-design-starter.git

2. **Traer los cambios desde nuxtstarter:**
   - git fetch nuxtstarter

3. **Fusionar los cambios en tu rama actual:**
   - git merge nuxtstarter/main --allow-unrelated-histories

4. **Subir los cambios actualizados a tu repositorio remoto:**
   - git push origin main
