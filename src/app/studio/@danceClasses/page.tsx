import { getStudioDanceClasses } from '@/models/studio'
import { getCurrentUser } from '@/models/user'
import { Button, Tooltip } from '@nextui-org/react'
import Link from 'next/link'
import { CirclePlus } from 'lucide-react'

const DanceClassesSlot = async () => {
  const studio = await getCurrentUser()
  const danceClasses = await getStudioDanceClasses(studio.userId)
  return (
    <>
      <div className='bg-zinc-200 py-2 px-6 flex'>
        <h2 className='text-lg font-semibold text-center'>
          All Studio Dance Classes
        </h2>
        <div className='ml-auto'>
          <Tooltip content='Create new dance'>
            <Button
              isIconOnly
              variant='ghost'
              size='sm'
              href='/studio/createDanceClass'
              as={Link}
              // onClick={handleClick}
              // isLoading={isPending}
            >
              <CirclePlus size={16} />
            </Button>
          </Tooltip>
        </div>
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
