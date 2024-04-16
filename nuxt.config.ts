// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/style/main.scss"],
  devServer: {
    port:8080
  },
  googleFonts: {
    families: {
      Outfit: [300,400,500,600,700,800,900]
    }
  },
  image: {
    dir: "assets/image"
  },
  pinia: {
    storesDirs: ['./composables/**'],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/content",
  ]
})