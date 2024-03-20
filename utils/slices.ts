export default `slices {
    ...on text_and_image {
      variation {
        ...on default {
          primary {
            image
            title_size
            title
            text
            button_link
            button_text
            inverted
          }
        }
      }
    }
  }`
