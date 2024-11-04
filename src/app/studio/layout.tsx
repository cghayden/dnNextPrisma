'use client'

import DraggableSplitter from '@/components/DraggableSplitter'
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
    isDragging: isSideBarDragging,
    position: sidebarW,
    separatorProps: sidebarDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 200,
    min: 50,
  })
  const {
    isDragging: isRightDragging,
    position: rightW,
    separatorProps: rightDragBarProps,
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
              isSideBarDragging && 'dragging'
            )}
            style={{ width: sidebarW }}
          >
            <StudioSide />
          </div>
          <DraggableSplitter
            id='sidebar-drag-bar'
            isDragging={isSideBarDragging}
            {...sidebarDragBarProps}
          />
          <main className={'flex flex-grow'}>
            {path === '/studio' ? (
              <>
                <div
                  className={'grow bg-darker transitionBlur overflow-scroll'}
                >
                  {dancers}
                </div>
                <DraggableSplitter
                  id='right-drag-bar'
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
