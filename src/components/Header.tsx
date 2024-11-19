'use client'
import { Input } from '@nextui-org/react'

const Header = () => {
  return (
    <div className='h-[65px] border-b border-zinc-600 flex items-center px-6 gap-4 bg-zinc-300'>
      <div className='w-1/2'>
        <Input size='sm' variant='faded' placeholder='search' />
      </div>
    </div>
  )
}

export default Header
