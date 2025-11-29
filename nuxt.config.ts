// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-28",
  devtools: { enabled: true },

  css: ["@fortawesome/fontawesome-free/css/all.min.css"],

  runtimeConfig: {
    public: {
      BaseUrl: process.env.PUBLIC_BASE_URL || "https://admin.b-tex.info",
    },
  },
});
