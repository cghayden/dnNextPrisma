import CreateDanceForm from '@/components/CreateDanceForm'
import { getStudioConfig } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

export default async function CreateDanceClass() {
  const user = await getCurrentUser()
  const studioConfig = await getStudioConfig(user.userId)

  return (
    <div className='p-6'>
      {studioConfig && <CreateDanceForm studioConfig={studioConfig} />}
    </div>
  )
}
