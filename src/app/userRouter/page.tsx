import { routeCurrentUser } from '@/actions/auth/routeCurrentUser'

export default async function UserRouter() {
  await routeCurrentUser()
  return null
}
