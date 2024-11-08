'use client'
import { Input } from '@nextui-org/react'
// import { Button, Tooltip } from '@nextui-org/react'
// import { CirclePlus } from 'lucide-react'

const Nav = () => {
  return (
    <nav className='h-[65px] border-b border-zinc-600 flex items-center px-6 gap-4 bg-zinc-300'>
      <div className='w-1/2'>
        <Input size='sm' variant='faded' placeholder='search' />
      </div>
    </nav>
  )
}

export default Nav
