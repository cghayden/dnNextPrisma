import { Button } from '@nextui-org/react'
import StudioNav from './StudioNav'

const StudioSideBar = () => {
  return (
    <div className='w-full h-full px-3 bg-zinc-300'>
      <div className='flex py-8'>Studio Notes</div>
      <StudioNav />
      <div className='absolute bottom-0 left-0 px-4'>
        <Button fullWidth variant='ghost'>
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default StudioSideBar
