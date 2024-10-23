export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useState('user',()=>useSupabaseUser().value);
});
  