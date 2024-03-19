export default (uri: string, type?: string): string => {
  const formattedUrl = uri.replace(/_/g, "/")

  switch (type) {
    case "page":
      return `/${formattedUrl}`
    default:
      return `/${formattedUrl}`
  }
}
