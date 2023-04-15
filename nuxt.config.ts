// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", 'nuxt-icon', "@nuxt/content"],
  colorMode: {
    classSuffix: "",
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
  },
});
