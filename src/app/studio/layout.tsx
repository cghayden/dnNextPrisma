// /app/dashboard/layout.tsx
'use client'

import Nav from '@/components/Nav'
import SampleSplitter from '@/components/SampleSplitter'
import StudioSide from '@/components/StudioSide'
import { cn, Input } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { useResizable } from 'react-resizable-layout'

const StudioDashboard = ({
  children,
  dancers,
  danceClasses,
}: {
  children: React.ReactNode
  dancers: React.ReactNode
  danceClasses: React.ReactNode
}) => {
  const path = usePathname()

  const {
    isDragging: isSideDragging,
    position: sideW,
    splitterProps: sideDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 200,
    min: 50,
  })
  const {
    isDragging: isRightDragging,
    position: rightW,
    splitterProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 300,
    min: 50,
    reverse: true,
  })

  return (
    <>
      <nav className='h-[65px] border-b border-zinc-600 flex items-center px-6 gap-4 bg-zinc-300'>
        <div className='w-1/2'>
          <Input size='sm' variant='faded' placeholder='search' />
        </div>
      </nav>
      <div className='flex' style={{ height: 'calc(100vh - 65px)' }}>
        <div className='SHELL flex grow  '>
          <div
            className={cn(
              'shrink-0 transitionBlur ',
              isSideDragging && 'dragging'
            )}
            style={{ width: sideW }}
          >
            <StudioSide />
          </div>
          <SampleSplitter isDragging={isSideDragging} {...sideDragBarProps} />
          <main className={'flex flex-grow'}>
            {path === '/studio' ? (
              <>
                <div
                  className={'grow bg-darker transitionBlur overflow-scroll'}
                >
                  {dancers}
                </div>
                <SampleSplitter
                  isDragging={isRightDragging}
                  {...rightDragBarProps}
                />
                <div
                  className={cn(
                    'shrink-0 transitionBlur',
                    isRightDragging && 'dragging'
                  )}
                  style={{ width: rightW }}
                >
                  <div className='border-b border-zinc-600 w-full h-1/2 overflow-scroll'>
                    {danceClasses}
                  </div>
                  <div className='w-full h-1/2'>{children}</div>
                </div>
              </>
            ) : (
              <>{children}</>
            )}
          </main>
        </div>
      </div>
    </>
  )
}

export default StudioDashboard
