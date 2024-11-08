// /app/dashboard/layout.tsx
'use client'
import Shell from '@/components/Shell'
import { usePathname } from 'next/navigation'

const ParentDashboard = ({
  children,
  dancers,
}: {
  children: React.ReactNode
  dancers: React.ReactNode
  danceClasses: React.ReactNode
}) => {
  const path = usePathname()

  return (
    <Shell>
      {path === '/studio' ? (
        <div className='flex w-full h-full'>
          <div className='w-1/2 border-r border-zinc-600'>{dancers}</div>
          <div className='w-1/2 flex flex-col'>
            <div className='border-b border-zinc-600 w-full h-1/2'>
              {/* {danceClasses} */}
              dance classes panel
            </div>
            <div className='w-full h-1/2'>{children}</div>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </Shell>
  )
}

export default ParentDashboard
