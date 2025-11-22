// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        public: {
            adminUser: process.env.NUXT_PUBLIC_ADMIN_USER || 'admin',
            adminPassword: process.env.NUXT_PUBLIC_ADMIN_PASSWORD || 'password'
        }
    }
})
