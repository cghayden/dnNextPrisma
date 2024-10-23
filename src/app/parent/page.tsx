import { getCurrentUser } from '@/models/user'

const ParentHome = async () => {
  const user = await getCurrentUser()
  console.log('user at studio page.tsx', user)
  // if there is no user, it will redirect to signin ...

  return (
    <div className='w-full flex h-full justify-center items-center'>
      <div>
        <h4 className='text-lg'>parent page.tsx / home</h4>
        {/* <h2 className="text-6xl font-semibold my-8 text-center">{count}</h2> */}
      </div>
    </div>
  )
}

export default ParentHome
