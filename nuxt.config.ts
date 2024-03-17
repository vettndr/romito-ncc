import Components from "unplugin-vue-components/vite"
import IconsResolver from "unplugin-icons/resolver"
import Icons from "unplugin-icons/vite"
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers"
import { FileSystemIconLoader } from "unplugin-icons/loaders"
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
    // Doc: https://github.com/nuxt/fonts
    "@nuxt/fonts",
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

  fonts: {
    provider: "google",
    families: [{ name: "Jost", provider: "google", weights: [400, 600, 700] }],
  },

  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: "v",
            customCollections: ["icons"],
          }),
          HeadlessUiResolver(),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader("./icons", (svg) => {
            const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg)
            if (!viewBox) return svg
            const w = viewBox?.[1]
            const h = viewBox?.[2]
            svg = svg.replace(/width=".*?"/, `width="${w}" `)
            svg = svg.replace(/height=".*?"/, `height="${h}" `)
            return svg
          }),
        },
      }),
    ],
  },
})
