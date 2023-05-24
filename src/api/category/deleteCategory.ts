import axios from 'axios'

export const deleteCategory = async (id: number) => {
  const response = await axios.delete(`/api/categories/${id}`)
  return response.data
}
