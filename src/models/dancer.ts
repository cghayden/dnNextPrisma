import 'server-only'
import prisma from '@/db/db'

export const getDancer = async (dancerId: string) => {
  const dancer = await prisma.dancer.findUnique({
    where: {
      id: dancerId,
    },
  })

  if (!dancer) {
    throw new Error('Dancer not found')
  }
  return dancer
}
