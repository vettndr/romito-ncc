import { capitalize } from "~/utils/capitalizeString"
import { connectors } from "~/prismic/blocks"

export default (collection: any) => {
  return collection.map((item: any) => {
    const typeName = item?.slice_type

    if (typeName) {
      const cTypeName = typeName
        .split("_")
        .map((word: string, index: number) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("")

      let componentName = capitalize(cTypeName)

      if (!connectors.hasOwnProperty(componentName)) {
        return {
          name: "Default",
          id: `Default_`,
          // @ts-ignore
          props: {
            data: componentName,
          },
        }
      }

      return {
        name: componentName,
        id: `${componentName}_`,
        // @ts-ignore
        props: connectors[componentName](item),
      }
    }
    return {}
  }) as { name: string; id: string; props?: any }[]
}
