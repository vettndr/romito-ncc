import type { VButtonProps } from "~/components/VButton.props"
import type { TitleProps } from "~/components/molecules/Title.props"

export type ContactProps = {
  title: TitleProps
  text: string
  button?: VButtonProps
  menuLink?: string
}
