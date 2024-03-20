import type { VImageProps } from "~/components/VImage.props"
import type { VButtonProps } from "~/components/VButton.props"
import type { TitleProps } from "~/components/molecules/Title.props"

export type TextWithImageProps = {
  image: VImageProps
  title: TitleProps
  text: string
  button?: VButtonProps
}
