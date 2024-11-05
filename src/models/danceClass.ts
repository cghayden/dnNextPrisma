import 'server-only'
import prisma from '@/db/db'

export const getStudioDanceClass = async (
  danceClassId: string,
  studioId: string
) => {
  const danceClass = await prisma.danceClass.findUnique({
    where: {
      id: danceClassId,
    },
    include: {
      enrollments: {
        include: {
          dancer: {
            select: {
              firstName: true,
              lastName: true,
              id: true,
            },
          },
        },
      },
    },
  })

  if (!danceClass) {
    throw new Error('Dance class not found')
  }

  if (danceClass.studioId !== studioId) {
    throw new Error('Unauthorized to view this class')
  }
  const dancers = danceClass.enrollments.map((enrollment) => enrollment.dancer)
  const danceClassWithDancers = { ...danceClass, dancers }

  return danceClassWithDancers
}
