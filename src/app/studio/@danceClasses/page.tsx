import { getStudioDanceClasses } from '@/models/studio'
import { getCurrentUser } from '@/models/user'

const DanceClassesSlot = async () => {
  const studio = await getCurrentUser()
  const danceClasses = await getStudioDanceClasses(studio.userId)
  return (
    <div>
      <div className='bg-zinc-200 py-2'>
        <h2 className='text-lg font-semibold text-center'>
          All Studio Dance Classes
        </h2>
      </div>
      <ul>
        {danceClasses.map((danceClass) => {
          return <li key={danceClass.id}>{danceClass.name}</li>
        })}
      </ul>
    </div>
  )
}

export default DanceClassesSlot
