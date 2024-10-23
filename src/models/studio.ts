import 'server-only'
import prisma from '@/db/db'
import { memoize } from 'nextjs-better-unstable-cache'

import type {
  User,
  Studio,
  // Parent,
  // AgeLevel,
  // DanceClass,
  // SkillLevel,
  // Tights,
  // Footwear,
  // StyleOfDance,
} from '@prisma/client'
import bcrypt from 'bcryptjs'
import { createTokenForUser } from '@/utils/createTokenForUser'
import { delay } from '@/utils/delay'

export async function signupStudio({
  name,
  email,
  password,
}: {
  name: Studio['name']
  email: User['email']
  password: User['password']
}) {
  const type = 'STUDIO'
  const hashedPassword = await bcrypt.hash(password, 10)
  const newStudio = await prisma.user.create({
    data: {
      email,
      type,
      password: hashedPassword,
      studio: {
        create: {
          name,
        },
      },
    },
    select: {
      email: true,
      userId: true,
      type: true,
    },
  })
  const token = createTokenForUser(newStudio.userId)
  return { token, newStudio }
}

export const getUniqueDancers = memoize(
  async (studioId: string) => {
    //simulate delay
    await delay()

    const distinctDancerEnrollments = await prisma.enrollment.findMany({
      orderBy: [{ dancer: { lastName: 'asc' } }],
      where: {
        studioId: studioId,
      },
      distinct: ['dancerId'],

      include: {
        dancer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            parent: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    })

    const uniqueDancers = distinctDancerEnrollments.map(
      (enrollment) => enrollment.dancer
    )

    return uniqueDancers || []
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:dancers'],
    log: ['datacache', 'verbose', 'dedupe'],
    logid: 'dashboard:dancers',
    suppressWarnings: true,
  }
)

export const getStudioDanceClasses = memoize(
  async (studioId: string) => {
    //simulate delay
    await delay()

    const danceClasses = await prisma.danceClass.findMany({
      where: {
        studioId,
      },
      select: {
        id: true,
        name: true,
        ageLevel: true,
        skillLevel: true,
        styleOfDance: true,
        tights: true,
        footwear: true,
      },
    })

    return danceClasses || []
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:danceClasses'],
    log: ['datacache', 'verbose', 'dedupe'],
    logid: 'dashboard:danceClasses',
    suppressWarnings: true,
  }
)

export async function getStudioHomePanelData(studioId: string) {
  // throw new Error('not implemented')
  return 'home panel data'
}
