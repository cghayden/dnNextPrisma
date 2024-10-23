import { getStudioHomePanelData } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

const StudioHome = async () => {
  const user = await getCurrentUser()
  const homePanelData = await getStudioHomePanelData(user.userId)
  // if there is no user, it will redirect to signin ...

  return (
    <div className='w-full flex h-full justify-center items-center'>
      <div>
        <h4 className='text-lg'>{homePanelData}</h4>
        {/* <h2 className="text-6xl font-semibold my-8 text-center">{count}</h2> */}
      </div>
    </div>
  )
}

export default StudioHome
