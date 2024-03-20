export default {
  span: ({ text }) => (text ? text : ""),
  paragraph: ({ node, children }) => {
    const label = node?.spans?.filter((n) => n?.type === "label")?.[0]?.data
      ?.label

    if (node?.isTitle) {
      return `${children}`
    }

    if (label) {
      return `<p class="${label}">${children}</p>`
    }

    return `<p>${children}</p>`
  },
}
