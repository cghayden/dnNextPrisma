'use client'

import DraggableSplitter from '@/components/DraggableSplitter'
import StudioSideBar from '@/components/StudioSideBar'
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
    initial: 170,
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
  const {
    isDragging: isBRDragging,
    position: BR_Height,
    separatorProps: BR_DragBarProps,
  } = useResizable({
    axis: 'y',
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
            <StudioSideBar />
          </div>
          <DraggableSplitter
            id='sidebar-drag-bar'
            isDragging={isSideBarDragging}
            {...sidebarDragBarProps}
          />
          <main className={'flex flex-grow'}>
            {path === '/studio' ? (
              <>
                <div className={'flex-grow transitionBlur overflow-scroll'}>
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
                  <div className='flex flex-col h-full'>
                    <div className='w-full flex-grow overflow-scroll'>
                      {danceClasses}
                    </div>
                    <DraggableSplitter
                      dir={'horizontal'}
                      id='BR-drag-bar'
                      isDragging={isBRDragging}
                      {...BR_DragBarProps}
                    />
                    <div
                      className={cn(
                        'shrink-0 transitionBlur',
                        isBRDragging && 'dragging'
                      )}
                      style={{ height: BR_Height }}
                    >
                      {children}
                    </div>
                  </div>
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
