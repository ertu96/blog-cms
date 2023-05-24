import { useSystemStore } from '../stores/SystemStore'

export const getAuthorizationHeader = () => {
  const systemStore = useSystemStore()
  return { Authorization: `Bearer ${systemStore.getAccessToken}` }
}
