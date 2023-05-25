import axios from 'axios'
import { getAuthorizationHeader } from '../../utils/getAuthorizationHeader'

export const deleteCategory = async (id: number | null): Promise<void> => {
  const response = await axios.delete(`/api/categories/${id}`, {
    headers: {
      ...getAuthorizationHeader(),
    },
  })
  return response.data
}
