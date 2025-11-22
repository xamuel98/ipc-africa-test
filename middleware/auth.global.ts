export default defineNuxtRouteMiddleware((to, from) => {
    const authCookie = useCookie('auth')

    if (to.path !== '/login' && !authCookie.value) {
        return navigateTo('/login')
    }

    if (to.path === '/login' && authCookie.value) {
        return navigateTo('/')
    }
})
