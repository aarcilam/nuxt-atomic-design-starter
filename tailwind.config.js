module.exports = {
  // content: ["./components/*.{vue}", "./pages/**/*.{vue}"],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "lemonade",
      {
        custom2: {
          "primary": "#FF6B6B", // Rojo claro para primario
          "secondary": "#FFD93D", // Amarillo para secundario
          "accent": "#6BCB77", // Verde suave para acento
          "neutral": "#343A40", // Gris oscuro
          "base-100": "#F8F9FA", // Blanco para un fondo más limpio
          "info": "#17A2B8", // Azul para información
          "success": "#28A745", // Verde para éxito
          "warning": "#FFC107", // Amarillo para advertencias
          "error": "#DC3545", // Rojo intenso para errores

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "5px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      {
        custom: {
          "primary": "#3BFF6D", // Verde más oscuro para primario
          "secondary": "#4ADE80", // Verde medio para secundario
          "accent": "#A3E9B5", // Verde más claro para acento
          "neutral": "#1F2937", // Gris oscuro
          "base-100": "#1F2937", // Gris oscuro para un fondo más limpio
          "info": "#4ADE80", // Verde para información
          "success": "#4ADE80", // Verde para éxito
          "warning": "#4ADE80", // Verde para advertencias
          "error": "#EF4444", // Rojo intenso de Nuxt

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "5px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
