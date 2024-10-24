import { getDancer } from '@/models/dancer'

const DancerPage = async ({ params }: { params: { id: string } }) => {
  // get dancer id from params
  const dancerId = params.id
  // lookup dancer from db
  const dancer = await getDancer(dancerId)
  // if there is no user, it will redirect to signin ...

  return (
    // <div className='w-full flex h-full'>
    <div>
      <h2 className='panel_heading'>Dancer</h2>
      <div>
        <h3 className=''>
          {dancer.firstName} {dancer.lastName}
        </h3>
        <div>dancer info</div>
      </div>
    </div>
    // </div>
  )
}

export default DancerPage
