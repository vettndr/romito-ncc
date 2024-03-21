import type { VButtonProps } from "~/components/VButton.props"
import type { TitleProps } from "~/components/molecules/Title.props"
import type { VAccordionProps } from "~/components/VAccordion.props"

export type FaqProps = {
  title: TitleProps
  text: string
  button?: VButtonProps
  faqs: VAccordionProps[]
}
