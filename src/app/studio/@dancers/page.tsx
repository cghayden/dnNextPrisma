import { getUniqueDancers } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

const DancersSlot = async () => {
  const studio = await getCurrentUser()
  const dancers = await getUniqueDancers(studio.userId)
  return (
    <div>
      <div className='bg-zinc-200 py-2'>
        <h2 className='text-lg font-semibold text-center'>
          All Studio Dancers
        </h2>
      </div>
      <ul>
        <li>
          <p className='grid grid-cols-2 border-b-2 border-b-zinc-800'>
            <span className='text-lg text-blue-800 pl-2'>Dancer</span>
            <span>Parent</span>
          </p>
        </li>
        {dancers.map((dancer) => {
          const dancerName = `${dancer.firstName} ${dancer.lastName}`
          const parentName = `${dancer.parent.firstName} ${dancer.parent.lastName}`
          return (
            <li key={dancer.id}>
              <p className='grid grid-cols-2'>
                <span className='text-lg text-blue-800 pl-2'>
                  {dancerName}{' '}
                </span>
                <span>{parentName}</span>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DancersSlot
