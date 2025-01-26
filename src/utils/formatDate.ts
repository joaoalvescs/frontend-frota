export const formatPrice = (value: string) => {
  const cleanedValue = value.replace(/[^\d,]/g, '')
  const parts = cleanedValue.split(',')
  if (parts.length === 2 && parts[1].length > 2) {
    parts[1] = parts[1].slice(0, 2)
  }
  return `R$ ${parts.join(',')}`
}
