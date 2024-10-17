import prisma from '@/db/db'
import { createTokenForUser } from '@/utils/createTokenForUser'
import type { User } from '@prisma/client'
import bcrypt from 'bcryptjs'

export async function getUser({
  email,
  password,
}: {
  email: User['email']
  password: User['password']
}) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
  })
  console.log('userWithPassword', userWithPassword)

  if (!userWithPassword || !userWithPassword.password) {
    return null
  }
  const isValid = await bcrypt.compare(password, userWithPassword.password)

  if (!isValid) {
    return null
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword
  console.log('userWithoutPassword', userWithoutPassword)

  const token = createTokenForUser(userWithoutPassword.userId)

  return { user: userWithoutPassword, token }
}
