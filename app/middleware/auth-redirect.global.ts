export default defineNuxtRouteMiddleware((to) => {

  const user = useSupabaseUser();
  const authRoutes = ["/login", "/register"];

  if (authRoutes.includes(to.path) && user.value) {
    return navigateTo("/dashboard", { replace: true });
  }
});
