import axios from 'axios'
import { CategoryForm } from '../../interfaces/CategoryForm'
import { getAuthorizationHeader } from '../../utils/getAuthorizationHeader'

export const createCategory = async (category: CategoryForm): Promise<void> => {
  const response = await axios.post('/api/categories', category, {
    headers: {
      ...getAuthorizationHeader(),
    },
  })
  return response.data
}
