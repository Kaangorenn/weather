// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      WEERLIVE_API_KEY: process.env.WEERLIVE_API_KEY,
    },
  },

  compatibilityDate: '2024-08-14',
  modules: ["@nuxt/image"]
})