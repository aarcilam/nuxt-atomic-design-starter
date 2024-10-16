export default defineNuxtRouteMiddleware((to, from) => {
  const themeStore = useThemeStore();
  const colorTheme = useCookie("colorTheme").value || "custom";
  themeStore.setInitialTheme(colorTheme);
});
