import type { FooterDefaultProps } from "~/components/footer/Default.props"
import { connect as connectImage } from "~/gql/fragments/Image"

export const connect = (data: any): FooterDefaultProps => {
  const { data: footerData } = data

  return {
    images: footerData?.images?.map((item: any) => connectImage(item?.image)),
  }
}
