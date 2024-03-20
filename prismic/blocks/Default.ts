import type { DefaultContentProps } from "~/components/content/Default.props"

export function connect(data: string): DefaultContentProps {
  return {
    data,
  }
}
