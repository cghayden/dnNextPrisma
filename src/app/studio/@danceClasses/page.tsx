import { getStudioDanceClasses } from '@/models/studio'
import { getCurrentUser } from '@/models/user'
import Link from 'next/link'

const DanceClassesSlot = async () => {
  const studio = await getCurrentUser()
  const danceClasses = await getStudioDanceClasses(studio.userId)
  return (
    <>
      <div className='bg-zinc-200 py-2'>
        <h2 className='text-lg font-semibold text-center'>
          All Studio Dance Classes
        </h2>
      </div>
      <ul>
        {danceClasses.map((danceClass) => {
          return (
            <li key={danceClass.id} className='pl-2 py-1'>
              <Link href={`/classes/${danceClass.id}`}>{danceClass.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default DanceClassesSlot
