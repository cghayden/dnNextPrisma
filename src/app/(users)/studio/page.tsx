import { getUniqueDancers } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

export default async function StudioHome() {
  const user = await getCurrentUser()
  const uniqueDancers = await getUniqueDancers(user.userId)
  console.log('uniqueDancers', uniqueDancers[0])

  return (
    <div>
      <p>You have xx dancers enrolled at your studio</p>
    </div>
  )
}
