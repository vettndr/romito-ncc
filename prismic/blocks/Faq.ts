import { asHTML } from "@prismicio/client"
import type { FaqContentProps } from "~/components/content/Faq.props"
import linkz from "~/utils/linkz"
import serializer from "~/utils/textSerializer"

export function connect(data: any): FaqContentProps {
  const dataObj = data?.primary

  const path = linkz(dataObj?.button_link)

  return {
    data: {
      title: {
        title:
          (asHTML(
            dataObj?.title?.map((element: any) => ({
              ...element,
              isTitle: true,
            })),
            { serializer }
          ) as string) ?? "",
        position: "left",
        titleSize: dataObj?.title_size,
      },
      text: asHTML(dataObj?.text, { serializer }) as string,
      button: {
        label: dataObj?.button_text,
        path,
        target: dataObj?.button_link?.target ?? undefined,
      },
      faqs: data?.items?.map((faq: any) => ({
        title: faq?.faq_title ?? "",
        content: asHTML(faq?.faq_text, { serializer }) as string,
      })),
      menuLink: dataObj?.menu_link ?? "",
    },
  }
}
