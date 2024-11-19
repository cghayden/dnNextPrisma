import Header from './Header'
import StudioSideBar from './StudioSideBar'

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='SHELL flex w-screen h-screen'>
      <aside className='w-[200px] min-w-[200px] max-w-[200px] h-full border-r border-zinc-600'>
        <StudioSideBar />
      </aside>
      <div className='w-[calc(100vw-200px)] '>
        <Header />
        <main className='h-[calc(100vh-65px)]'>{children}</main>
      </div>
    </div>
  )
}

export default Shell
