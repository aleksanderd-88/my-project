export const firstLetterToUpper = (text: string): string => {
  if(!text.match(/^[a-zA-Z\s.,]+$/)) return 'No title available'
  return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}