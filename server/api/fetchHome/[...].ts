import { assertMethod, defineEventHandler, getRouterParams } from "h3"
import { createClient } from "@prismicio/client"
import fetch from "node-fetch"

import slices from "~/utils/slices"
import { connect } from "~/prismic/templates/Home"

export default defineEventHandler(async (event) => {
  assertMethod(event, "GET")
  const routeParams = getRouterParams(event)._.split("/")

  const slug = routeParams[0] ? routeParams[0] : "home"
  const previewRef = routeParams[1] ? routeParams[1] : null

  const client = createClient("romitorobertoncc", { fetch })

  const graphQuery = `
  {
    home {
      hero_title
      hero_text
      hero_image
      meta_title
      meta_description
      meta_image
      ${slices}
    }
  }
`

  let response

  try {
    response = await client.getByUID("home", slug, {
      lang: "it-it",
      graphQuery,
      ref: previewRef ? previewRef : undefined,
    })
  } catch (e: any) {
    throw createError({
      statusCode: 500,
      message: e.message,
      fatal: true,
    })
  }

  const { data } = response

  if (!data) {
    throw createError({
      statusCode: 404,
      message: "Could not find the page you were looking for",
    })
  }

  return connect(data)
})
