export default defineNuxtRouteMiddleware((to, from) => {
  let authCookie: ReturnType<typeof useCookie> | { value: false };

  try {
    authCookie = useCookie("auth");
  } catch (e) {
    console.warn("Failed to read auth cookie", e);
    authCookie = { value: false };
  }

  //   console.log(authCookie.value);

  if (to.path !== "/login" && !authCookie.value) {
    return navigateTo("/login");
  }

  if (to.path === "/login" && authCookie.value) {
    return navigateTo("/");
  }
});
