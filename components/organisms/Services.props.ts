import type { VButtonProps } from "~/components/VButton.props"
import type { TitleProps } from "~/components/molecules/Title.props"
import type { ServiceProps } from "~/components/molecules/Service.props"

export type ServicesProps = {
  title: TitleProps
  text: string
  button?: VButtonProps
  services: ServiceProps[]
}
