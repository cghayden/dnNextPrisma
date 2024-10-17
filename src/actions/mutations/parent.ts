import 'server-only'
import prisma from '@/db/db'
import jwt from 'jsonwebtoken'

import type {
  User,
  Parent,
  // Studio,
  // AgeLevel,
  // DanceClass,
  // SkillLevel,
  // Tights,
  // Footwear,
  // StyleOfDance,
} from '@prisma/client'
import bcrypt from 'bcryptjs'

const COOKIE_SECRET = process.env.COOKIE_SECRET!

export const createTokenForUser = (userId: string) => {
  const token = jwt.sign({ id: userId }, COOKIE_SECRET)
  return token
}

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
  return { token, newParent }
}
