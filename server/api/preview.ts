import { createClient } from "@prismicio/client"
import fetch from "node-fetch"
import slugRoute from "~/utils/slugRoute"

export default defineEventHandler(async (event) => {
  assertMethod(event, "GET")

  const params = getQuery(event)
  const token = params?.token
  const documentId = params?.documentId

  const client = createClient("romitorobertoncc", { fetch })

  let response

  if (token && documentId) {
    try {
      response = await client.getByID(documentId as string, {
        lang: "it-it",
        ref: token as string,
      })

      return await sendRedirect(
        event,
        slugRoute(response?.uid, "home", token as string)
      )
    } catch (e: any) {
      throw createError({
        statusCode: 500,
        message: e.message,
        fatal: true,
      })
    }
  } else {
    throw createError({
      statusCode: 500,
      message: "no params in the request",
      fatal: true,
    })
  }
})
