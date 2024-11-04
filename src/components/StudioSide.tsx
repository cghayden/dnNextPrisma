'use client'

// import Image from 'next/image'
import Link from 'next/link'
// import Logo from '@/images/pardy.png'
import { Button, cn } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

const links = [
  { route: '/studio', name: 'Home' },
  { route: '/studio/dancers', name: 'Dancers' },
  { route: '/studio/classes', name: 'Classes' },
  { route: '/studio/events', name: 'Events' },
  { route: '/studio/settings', name: 'Settings' },
]

const isActive = (path: string, route: string) => {
  // all routes other than auth routes include "/dashboard"
  // so handle that first
  if (route === '/studio') {
    return path === '/studio'
  } else {
    return path.includes(route)
  }
}

const StudioSide = () => {
  const path = usePathname()
  const activeClass = 'bg-zinc-50 hover:bg-zinc-100'

  return (
    <div className='w-full h-full px-3 bg-zinc-300'>
      <div className='flex py-8'>
        <h1 className='text-2xl font-bold'>StudioNotes</h1>
      </div>
      <div>
        {links.map((link) => (
          <div className='w-full' key={link.route}>
            <Link href={link.route}>
              <div
                className={cn(
                  'w-full h-full py-2 px-2 hover:bg-content1 rounded-lg',
                  isActive(path, link.route) && activeClass
                )}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='absolute bottom-0 left-0 px-4'>
        <Button fullWidth variant='ghost'>
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default StudioSide
