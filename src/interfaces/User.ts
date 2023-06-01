import { Post } from './Post'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  emailVerifiedAt: Date
  lastLogin: Date | null
  profile: string
  posts: Post[]
}
