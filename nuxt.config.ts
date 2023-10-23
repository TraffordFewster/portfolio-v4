// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Bricolage Grotesque": true,
          Borel: true,
        },
      },
    ],
    "vue3-carousel-nuxt",
  ],
  app: {
    head: {
      title: "Trafford Fewster | Software Engineer",
    }
  }
});
