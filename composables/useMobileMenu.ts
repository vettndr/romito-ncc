export const useMobileMenu = () => {
  const isOpen = useState("mobileMenu", () => false)

  const setMobileMenu = (open: boolean) => {
    isOpen.value = open
  }

  return {
    isOpen,
    setMobileMenu,
  }
}
