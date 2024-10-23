import { getUniqueDancers } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

const DancersSlot = async () => {
  const studio = await getCurrentUser()
  const dancers = await getUniqueDancers(studio.userId)
  // console.log('dancers', dancers)
  return (
    <div>
      <h1>dancers Slot</h1>
      <p>Here are the dancers</p>
    </div>
  )
}

export default DancersSlot
