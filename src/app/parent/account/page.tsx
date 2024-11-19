import { getCurrentUser } from '@/models/user'

const ParentAccountPage = async () => {
  const user = await getCurrentUser()
  console.log('user at parent page.tsx', user)
  // if there is no user, it will redirect to signin ...

  return (
    <div className='w-full flex h-full justify-center items-center'>
      <div>
        <p className='text-lg'>Parents account profile page</p>
      </div>
    </div>
  )
}

export default ParentAccountPage
