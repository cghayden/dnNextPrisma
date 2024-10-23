import 'server-only'
import prisma from '@/db/db'

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

export async function getUniqueDancers(studioId: string) {
  const uniqueDancers = await prisma.enrollment.findMany({
    where: {
      studioId: studioId,
    },
    distinct: ['dancerId'],
  })

  return uniqueDancers
}

export async function getStudioHomePanelData(studioId: string) {
  // throw new Error('not implemented')
  return 'home panel data'
}
