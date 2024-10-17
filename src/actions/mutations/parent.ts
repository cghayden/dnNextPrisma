import 'server-only'
import prisma from '@/db/db'
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
  const hashedPassword = await bcrypt.hash(password, 10)
  const type = 'PARENT'
  return prisma.user.create({
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
}
