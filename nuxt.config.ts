import screens from "./utils/screens"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ["~/assets/scss/app.scss"],

  modules: [
    //Doc: https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
    //Doc: https://github.com/mvrlin/nuxt-viewport
    "nuxt-viewport",
  ],

  viewport: {
    breakpoints: {
      ...screens,
    },
    defaultBreakpoints: {
      desktop: "md",
      tablet: "sm",
      mobile: "xs",
    },
    fallbackBreakpoint: "md",
  },
})
