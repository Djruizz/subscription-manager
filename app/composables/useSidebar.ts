export const useSidebar = () => {
  const isCollapsed = ref(false)
  const isHover = ref(false)

  const dynamicSide = computed(() => isHover.value && isCollapsed.value)
  const showNavItems = computed(() => {
    if (!isCollapsed.value) return true
    return dynamicSide.value
  })

  return {
    isCollapsed,
    isHover,
    dynamicSide,
    showNavItems
  }
}
