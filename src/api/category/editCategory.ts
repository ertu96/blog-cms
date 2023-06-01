import axios from 'axios'
import { CategoryForm } from '../../interfaces/forms/CategoryForm'
import { getAuthorizationHeader } from '../../utils/getAuthorizationHeader'

export const editCategory = async (
  categoryId: number,
  category: CategoryForm
): Promise<void> => {
  const response = await axios.put(`/api/categories/${categoryId}`, category, {
    headers: {
      ...getAuthorizationHeader(),
    },
  })

  return response.data
}
