export const useVViewport = () => {
  const { $viewport } = useNuxtApp()

  const isMobile = computed(() => $viewport.isLessThan("sm"))
  const isTablet = computed(
    () => $viewport.isGreaterOrEquals("sm") && $viewport.isLessThan("lg")
  )
  const isDesktop = computed(() => $viewport.isGreaterOrEquals("lg"))
  const breakpoint = computed(() => $viewport.breakpoint)

  return {
    isMobile,
    isTablet,
    isDesktop,
    breakpoint,
  }
}
