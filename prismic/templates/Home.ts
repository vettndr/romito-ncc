import { connect as connectImage } from "../fragments/Image"
import type { HerobannerProps } from "~/components/organisms/Herobanner.props"

/**
 * Connects component fragment data to module props
 */
export const connect = (
  data: any
): {
  herobanner: HerobannerProps
  seo: {
    meta_title: string
    meta_description: string
    meta_image: string
  }
} => {
  const herobanner: HerobannerProps = {
    image: connectImage(data?.hero_image),
    title: data?.hero_title ?? "",
    subtitle: data?.hero_text ?? "",
  }

  return {
    herobanner,
    // content: connectElements(data?.slices),
    seo: {
      meta_title: data?.meta_title ?? "",
      meta_description: data?.meta_description ?? "",
      meta_image: data?.meta_image?.url ?? "",
    },
  }
}
