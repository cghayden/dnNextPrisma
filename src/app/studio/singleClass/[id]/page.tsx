import { getStudioDanceClass } from '@/models/danceClass'
import { getCurrentUser } from '@/models/user'

const SingleDanceClassPage = async ({ params }: { params: { id: string } }) => {
  // get dance class id from params
  const danceClassId = params.id
  // lookup dance class from db

  //get studioId from session
  const user = await getCurrentUser()
  const studioId = user.userId
  const danceClass = await getStudioDanceClass(danceClassId, studioId)
  // if there is no user, it will redirect to signin ...

  return (
    <div>
      <h2 className='panel_heading'>{danceClass.name}</h2>
      <div>
        <p>{danceClass.performanceName}</p>
        <div>
          <p>Enrolled</p>
          <ul>
            {danceClass.dancers.map((dancer) => (
              <li key={dancer.id}>
                {dancer.firstName} {dancer.lastName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleDanceClassPage
