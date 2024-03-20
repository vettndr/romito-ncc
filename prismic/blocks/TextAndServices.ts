import { asHTML } from "@prismicio/client"
import type { TextAndServicesContentProps } from "~/components/content/TextAndServices.props"
import type { ServiceProps } from "~/components/molecules/Service.props"
import { connect as connectImage } from "~/prismic/fragments/Image"
import linkz from "~/utils/linkz"
import serializer from "~/utils/textSerializer"

export function connect(data: any): TextAndServicesContentProps {
  const dataObj = data?.primary
  const items = data?.items

  const path = linkz(dataObj?.button_link)

  return {
    data: {
      image: connectImage(dataObj?.image),
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
