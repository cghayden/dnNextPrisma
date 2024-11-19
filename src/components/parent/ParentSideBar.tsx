import { Button } from '@nextui-org/react'
import ParentNav from './ParentNav'

const ParentSideBar = () => {
  return (
    <div className='w-full h-full px-3 bg-zinc-300'>
      <div className='flex py-8'>Parent Notes</div>
      <ParentNav />
      <div className='absolute bottom-0 left-0 px-4'>
        <Button fullWidth variant='ghost'>
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default ParentSideBar
