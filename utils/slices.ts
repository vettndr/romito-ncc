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
            menu_link
          }
        }
      }
    }
    ...on text_and_services {
      variation {
        ...on default {
          primary {
            image
            title_size
            title
            text
            button_link
            button_text
            menu_link
          }
          items {
            service_title
            service_text
          }
        }
      }
    }
    ...on text {
      variation {
        ...on default {
          primary {
            title_size
            title
            text
            button_link
            button_text
            menu_link
          }
        }
      }
    }
    ...on services {
      variation {
        ...on default {
          primary {
            title_size
            title
            text
            button_link
            button_text
            menu_link
          }
          items {
            service_title
            service_text
          }
        }
      }
    }
    ...on faq {
      variation {
        ...on default {
          primary {
            title_size
            title
            text
            button_link
            button_text
            menu_link
          }
          items {
            faq_title
            faq_text
          }
        }
      }
    }
    ...on contact {
      variation {
        ...on default {
          primary {
            title_size
            title
            text
            button_link
            button_text
            menu_link
          }
        }
      }
    }
  }`
