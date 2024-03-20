import type { RouteLocationRaw } from "vue-router"

export type VButtonProps = {
  path: RouteLocationRaw
  label: string
  target?: string
}
