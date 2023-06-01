import axios from 'axios'
import { Post } from '../../interfaces/Post'

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get('/api/posts')
  return response.data
}
