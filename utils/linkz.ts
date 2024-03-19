import slugRoute from "./slugRoute"

export default (obj: any): string => {
  if (obj?.type === "page") {
    return slugRoute(obj?.uid, "page")
  } else if (obj?.link_type === "Web") {
    return obj?.url
  } else {
    return "/"
  }
}
