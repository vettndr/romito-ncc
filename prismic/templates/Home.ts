import connectElements from "~/utils/connectElements"
import slugify from "~/utils/slugify"
import { connect as connectImage } from "../fragments/Image"
import type { HerobannerProps } from "~/components/organisms/Herobanner.props"
import type { TocItem } from "~/components/VHeader.props"

/**
 * Connects component fragment data to module props
 */
export const connect = (
  data: any
): {
  herobanner: HerobannerProps
  content: { name: string; id: string; props?: any }[]
  seo: {
    meta_title: string
    meta_description: string
    meta_image: {
      url: string
    }
    first_publication_date: string
    last_publication_date: string
  }
  items: TocItem[]
} => {
  const herobanner: HerobannerProps = {
    image: connectImage(data?.hero_image),
    title: data?.hero_title ?? "",
    subtitle: data?.hero_text ?? "",
  }

  const slicesData = connectElements(data?.slices)

  return {
    herobanner,
    content: slicesData,
    seo: {
      meta_title: data?.meta_title ?? "",
      meta_description: data?.meta_description ?? "",
      meta_image: data?.meta_image?.url ?? "",
      first_publication_date: data?.first_publication_date ?? "",
      last_publication_date: data?.last_publication_date ?? "",
    },
    items:
      slicesData?.map((slice) => ({
        label: slice.props?.data?.menuLink,
        slug: slugify(slice.props?.data?.menuLink),
      })) ?? [],
  }
}
