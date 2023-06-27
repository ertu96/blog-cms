import axios from 'axios'
import { createFileFormData } from '../../utils/createFileFormData'

export const uploadThumbnail = async (file: File) => {
  const response = await axios.post(
    '/api/posts/thumbnail',
    createFileFormData(file)
  )
  return response.data
}
