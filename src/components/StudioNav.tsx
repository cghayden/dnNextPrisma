'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@nextui-org/react'

const links = [
  { route: '/studio', name: 'Home' },
  { route: '/studio/dancers', name: 'Dancers' },
  { route: '/studio/classes', name: 'Classes' },
  { route: '/studio/events', name: 'Events' },
  { route: '/studio/configuration', name: 'My Studio' },
]

const isActive = (path: string, route: string) => {
  if (route === '/studio') {
    return path === '/studio'
  } else {
    return path.includes(route)
  }
}
export default function StudioNav() {
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
