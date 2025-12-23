export const capitalize = (text: string) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}
export const getInitials = (name: string) => name.substring(0, 2).toUpperCase()
export const formatPrice = (price: number, currency: string) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(price)
}
