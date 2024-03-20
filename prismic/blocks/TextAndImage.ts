import { asHTML } from "@prismicio/client"
import type { TextAndImageContentProps } from "~/components/content/TextAndImage.props"
import { connect as connectImage } from "../fragments/Image"
import linkz from "~/utils/linkz"
import serializer from "~/utils/textSerializer"

export function connect(data: any): TextAndImageContentProps {
  const dataObj = data?.primary

  const path = linkz(dataObj?.button_link)

  return {
    data: {
      image: connectImage(dataObj?.image),
      title: {
        title: (asHTML(dataObj?.title, { serializer }) as string) ?? "",
        position: "center",
        titleSize: dataObj?.title_size,
      },
      text: asHTML(dataObj?.text, { serializer }) as string,
      button: {
        label: dataObj?.button_text,
        path,
        target: dataObj?.button_link?.target ?? undefined,
      },
    },
  }
}
