export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useState('user',()=>useSupabaseUser().value);

  if (user.value) {
    return navigateTo("/user");
  }
});
