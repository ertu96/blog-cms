import axios from 'axios'
import { Post } from '../../interfaces/Post'
import { PostForm } from '../../interfaces/forms/PostForm'
import { getAuthorizationHeader } from '../../utils/getAuthorizationHeader'

export const createPost = async (post: PostForm | Post) => {
  const response = await axios.post('/api/posts', post, {
    headers: {
      ...getAuthorizationHeader(),
    },
  })
  return response.data
}
