const DancerPageLayout = ({
  children,
  accountData,
}: {
  children: React.ReactNode
  accountData: React.ReactNode
}) => {
  return (
    <div className='flex w-full h-full'>
      <div className='w-1/2 border-r border-zinc-600 overflow-scroll'>
        {children}
      </div>
      <div className='w-1/2 flex flex-col'>
        <div className='border-b border-zinc-600 w-full h-full overflow-scroll'>
          {accountData}
        </div>
        {/* <div className='w-full h-1/2'>{children}</div> */}
      </div>
    </div>
  )
}
export default DancerPageLayout
