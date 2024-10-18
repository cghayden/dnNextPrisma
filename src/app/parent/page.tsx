import { getDancerCount } from '@/models/parent'
import { getCurrentUser } from '@/models/user'

export default async function ParentHome() {
  const user = await getCurrentUser()
  const dancerCount = await getDancerCount(user.userId)
  console.log('dancerCount', dancerCount)

  return (
    <div>
      <h2>Parent Home</h2>
      <p>You have {dancerCount} dancers</p>
    </div>
  )
}
