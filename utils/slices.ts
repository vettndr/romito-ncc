export default `slices {
    ...on text_and_image {
      variation {
        ...on default {
          primary {
            image
            title_size
            title
            subtitle
            text
            button_link
            button_text
          }
        }
      }
    }
    ...on quote {
      variation {
        ...on default {
          primary {
            quote
            author
          }
        }
      }
    }
    ...on feature_listing {
      variation {
        ...on default {
          items {
            first {
              ...on page {
                title
                preview_image
                preview_title
                preview_subtitle
              }
            }
            second {
              ...on page {
                title
                preview_image
                preview_title
                preview_subtitle
              }
            }
          }
        }
      }
    }
    ...on three_photo {
      variation {
        ...on default {
          items {
            image
          }
        }
      }
    }
    ...on text_multi {
      variation {
        ...on default {
          primary {
            title_size
            title
          }
          items {
            above_title
            title
            text
          }
        }
      }
    }
    ...on testimonials {
      variation {
        ...on default {
          primary {
            title_size
            title
          }
          items {
            brand
          }
        }
      }
    }
    ...on text_row {
      variation {
        ...on default {
          primary {
            above_title
            title_size
            title
            text
          }
        }
      }
    }
    ...on gallery {
      variation {
        ...on default {
          items {
            item {
              ...on gallery_row {
                images {
                  image
                }
                inverted
              }
            }
          }
        }
      }
    }
    ...on service {
      variation {
        ...on default {
          primary {
            image
            title_size
            title
            text
            button_link
            button_text
            service
            service_text
            inverted
          }
        }
      }
    }
    ...on card_group {
      variation {
        ...on default {
          primary {
            title_size
            title
          }
          items {
            card {
              ...on page {
                title
                page_type
                preview_image
                preview_title
                preview_subtitle
                preview_category {
                  ...on page {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
    ...on text_and_image_variant {
      variation {
        ...on default {
          primary {
            image
            title_size
            title
            text
          }
        }
      }
    }
    ...on contact {
      variation {
        ...on default {
          primary {
            background
          }
        }
      }
    }
    ...on text {
      variation {
        ...on default {
          primary {
            text
            button_link
            button_text
            diary_title
          }
        }
      }
    }
  }`
