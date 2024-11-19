'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@nextui-org/react'

const links = [
  { route: '/parent', name: 'Home' },
  { route: '/parent/dancers', name: 'Dancers' },
  { route: '/parent/studios', name: 'Studios' },
  { route: '/parent/events', name: 'Events' },
  { route: '/parent/account', name: 'My Account' },
]

const isActive = (path: string, route: string) => {
  if (route === '/parent') {
    return path === '/parent'
  } else {
    return path.includes(route)
  }
}
export default function ParentNav() {
  const path = usePathname()
  const activeClass = 'bg-zinc-50 hover:bg-zinc-100'

  return (
    <nav>
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
    </nav>
  )
}
