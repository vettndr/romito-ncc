import screens from "./utils/screens"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "robots",
          name: "robots",
          content: process.env.IS_PRODUCTION === "yes" ? "all" : "noindex",
        },
      ],
    },
  },

  css: ["~/assets/scss/app.scss"],

  modules: [
    //Doc: https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",
    //Doc: https://github.com/mvrlin/nuxt-viewport
    "nuxt-viewport",
    // Doc: https://image.nuxt.com/
    "@nuxt/image",
    // Doc: https://formkit.com/
    "@formkit/nuxt",
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

  image: {
    prismic: {},
  },

  formkit: {
    autoImport: true,
  },
})
