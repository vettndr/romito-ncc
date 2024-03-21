import { asHTML } from "@prismicio/client"
import type { ServicesContentProps } from "~/components/content/Services.props"
import linkz from "~/utils/linkz"
import serializer from "~/utils/textSerializer"

export function connect(data: any): ServicesContentProps {
  const dataObj = data?.primary
  const items = data?.items

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
      services: items?.map((service: any) => ({
        title: service?.service_title ?? "",
        desc: asHTML(service?.service_text, { serializer }) as string,
      })),
    },
  }
}
