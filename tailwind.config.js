const screens = require("./tailwind/screens")
const colors = require("./tailwind/colors")

module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    screens,
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    colors,
    extend: {
      zIndex: {
        full: 9999,
      },
    },
  },
}
