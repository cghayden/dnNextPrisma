import { getCurrentUser } from '@/models/user'

const ParentEventsPage = async () => {
  const user = await getCurrentUser()
  console.log('user at parent page.tsx', user)
  // if there is no user, it will redirect to signin ...

  return (
    <div className='w-full flex h-full justify-center items-center'>
      <div>
        <p className='text-lg'>List upcoming events for parents dancers</p>
      </div>
    </div>
  )
}

export default ParentEventsPage
