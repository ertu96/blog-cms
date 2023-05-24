import axios from 'axios'
import { Category } from '../../interfaces/Category'

export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get('/api/categories')
  return response.data
}
