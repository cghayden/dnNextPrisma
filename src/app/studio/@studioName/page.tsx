import { getStudioName } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

export default async function StudioNameSlot() {
  const user = await getCurrentUser()
  const studioName = await getStudioName(user.userId)
  return <h1 className='text-xl font-bold'>{studioName}</h1>
}
