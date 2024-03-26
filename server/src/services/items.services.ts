import { SafeAny } from '../types'

const BASEAPI = 'https://api.mercadolibre.com'

export const getItemsService = async (query: string, limit: number): Promise<SafeAny> => {
  try {
    const response = await fetch(
      `${BASEAPI}/sites/MLA/search?q=${query}&&limit=${limit}`
    )
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getItemsByIdService = async (id: string): Promise<SafeAny> => {
  try {
    const response = await fetch(`${BASEAPI}/items/${id}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getItemDescriptionService = async (id: string): Promise<SafeAny> => {
  try {
    const response = await fetch(`${BASEAPI}/items/${id}/description`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getItemCategoryService = async (id: string): Promise<SafeAny> => {
  try {
    const response = await fetch(`${BASEAPI}/categories/${id}`)
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
