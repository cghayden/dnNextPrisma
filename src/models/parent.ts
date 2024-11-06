import 'server-only'
import prisma from '@/db/db'
import { memoize } from 'nextjs-better-unstable-cache'
import type { User, Parent } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { createTokenForUser } from '@/utils/createTokenForUser'

export async function signupParent({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: Parent['firstName']
  lastName: Parent['lastName']
  email: User['email']
  password: User['password']
}) {
  const type = 'PARENT'
  const hashedPassword = await bcrypt.hash(password, 10)
  const newParent = await prisma.user.create({
    data: {
      email,
      type,
      password: hashedPassword,
      parent: {
        create: {
          firstName,
          lastName,
        },
      },
    },
    select: {
      email: true,
      userId: true,
      type: true,
    },
  })

  const token = createTokenForUser(newParent.userId)
  const userTypeToken = createTokenForUser('parent')
  return { token, userTypeToken }
}

export const getDancerCount = async (userId: string) => {
  const dancerCount = await prisma.dancer.count({
    where: {
      parentId: userId,
    },
  })
  return dancerCount
}

export const getParentFromDancer = memoize(
  async (dancerId: string) => {
    const parent = await prisma.parent.findFirst({
      where: {
        dancers: {
          some: {
            id: dancerId,
          },
        },
      },
      select: {
        firstName: true,
        lastName: true,
        userId: true,
        user: {
          select: {
            email: true,
          },
        },
        dancers: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            enrollments: {
              select: {
                danceClass: {
                  select: {
                    name: true,
                    id: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    return parent
  },
  {
    persist: true,
    revalidateTags: () => ['dancer:account'],
  }
)
