import Nav from './Nav'
import StudioSide from './StudioSide'

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex w-screen h-screen'>
      <aside className='w-[200px] min-w-[200px] max-w-[200px] h-full border-r border-zinc-600'>
        <StudioSide />
      </aside>
      <div className='w-[calc(100vw-200px)] '>
        <Nav />
        <main className='h-[calc(100vh-65px)]'>{children}</main>
      </div>
    </div>
  )
}

export default Shell
