import { it } from "@formkit/i18n"
import { defineFormKitConfig } from "@formkit/vue"
import { generateClasses } from "@formkit/themes"

export default defineFormKitConfig({
  locales: { it },
  locale: "it",
  config: {
    classes: generateClasses({
      global: {
        // all
        wrapper: "",
        inner: "$reset",
      },
      text: {
        input: "$reset form-input",
        label: "$reset form-label",
        message: "$reset form-message",
      },
      tel: {
        input: "$reset form-input",
        label: "$reset form-label",
        message: "$reset form-message",
      },
      email: {
        input: "$reset form-input",
        label: "$reset form-label",
        message: "$reset form-message",
      },
      textarea: {
        input: "$reset form-textarea",
        label: "$reset form-label",
        message: "$reset form-message",
      },
      submit: {
        inner: "$reset",
        input: "$reset button-submit",
      },
      checkbox: {
        input: "$reset form-checkbox",
        message: "$reset form-message",
      },
    }),
  },
})
