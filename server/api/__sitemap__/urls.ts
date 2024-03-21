import { createClient, type PrismicDocument } from "@prismicio/client"
import fetch from "node-fetch"
import slugRoute from "~/utils/slugRoute"

export default defineSitemapEventHandler(async () => {
  const { public: envs } = useRuntimeConfig()

  const queryTypes = ["home"]
  let entryObjs: any = []

  const client = createClient("romitorobertoncc", { fetch })

  for (const queryType of queryTypes) {
    const response = await client.getAllByType(queryType)

    if (!response?.length) {
      continue
    }

    const entries = response?.map((entry: PrismicDocument) => {
      return {
        loc: `${envs.BASE_URL}${slugRoute(entry.uid as string, queryType)}`,
        lastmod: entry.last_publication_date,
      }
    })

    entryObjs = [...entryObjs, ...entries]
  }

  return entryObjs
})
