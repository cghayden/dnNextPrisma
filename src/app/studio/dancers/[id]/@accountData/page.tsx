import { getParentFromDancer } from '@/models/parent'

const DancerDataSlot = async ({ params }: { params: { id: string } }) => {
  const dancerId = params.id
  const dancerParent = await getParentFromDancer(dancerId)
  console.log('dancerParent', dancerParent)
  return (
    <div>
      <h2 className='panel_heading'>Account</h2>
      <div>
        <div className='m-2'>
          <h3 className='text-lg'>
            {dancerParent?.firstName} {dancerParent?.lastName}
          </h3>
          <a
            href={`mailto:${dancerParent?.user.email}`}
            className='text-blue-500'
          >
            {dancerParent?.user.email}
          </a>
        </div>

        <ul className='m-2'>
          {dancerParent?.dancers.map((dancer) => (
            <li key={dancer.id} className='my-2'>
              <div className='rounded-md overflow-hidden'>
                <h3 className='bg-zinc-300 text-center py-2 font-semibold'>
                  {dancer.firstName} {dancer.lastName}
                </h3>
                <ul className='bg-zinc-200 p-2'>
                  {dancer.enrollments.map((enrollment) => {
                    return (
                      <li key={enrollment.danceClass.id}>
                        {enrollment.danceClass.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DancerDataSlot
