import type { VImageProps } from "~/components/VImage.props"

export function connect(data: any): VImageProps {
  if (!data?.url) {
    return {
      alt: "Placeholder",
      src: "https://images.prismic.io/ericazetatravel/1c62b23d-ca13-4a63-917a-da036713e51e_placeholder.png?auto=compress,format",
      width: 1000,
      height: 1000,
    }
  }

  return {
    alt: data?.alt ?? "Placeholder",
    src: data?.url,
    width: data?.dimensions?.width,
    height: data?.dimensions?.height,
    mobile: {
      title: data?.mobile?.title,
      alt: data?.mobile?.alt ?? "Placeholder",
      src: data?.mobile?.url,
      width: data?.mobile?.dimensions?.width,
      height: data?.mobile?.dimensions?.height,
    },
    tablet: {
      title: data?.tablet?.title,
      alt: data?.tablet?.alt ?? "Placeholder",
      src: data?.tablet?.url,
      width: data?.tablet?.dimensions?.width,
      height: data?.tablet?.dimensions?.height,
    },
  }
}
