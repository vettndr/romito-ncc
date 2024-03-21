export default (uri: string, type?: string, previewRef?: string): string => {
  const formattedUrl = uri.replace(/_/g, "/")

  switch (type) {
    case "home":
      if (previewRef) {
        return `/?ref=${previewRef}`
      }
      return `/`
    default:
      return `/${formattedUrl}`
  }
}
