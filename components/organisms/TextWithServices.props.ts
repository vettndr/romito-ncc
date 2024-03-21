import type { VImageProps } from "~/components/VImage.props"
import type { VButtonProps } from "~/components/VButton.props"
import type { TitleProps } from "~/components/molecules/Title.props"
import type { ServiceProps } from "~/components/molecules/Service.props"

export type TextWithServicesProps = {
  image: VImageProps
  title: TitleProps
  text: string
  button?: VButtonProps
  services: ServiceProps[]
  menuLink?: string
}
