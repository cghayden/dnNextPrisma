import 'server-only'

import prisma from '@/db/db'
import {
  createTokenForUser,
  createTypeTokenForUser,
} from '@/utils/createTokenForUser'
import type { User } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'
import jwt from 'jsonwebtoken'
import { cache } from 'react'

export async function signinUser({
  email,
  password,
}: {
  email: User['email']
  password: User['password']
}) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
  })

  if (!userWithPassword || !userWithPassword.password) {
    throw new Error('invalid user or password')
  }
  const isValid = await bcrypt.compare(password, userWithPassword.password)

  if (!isValid) {
    throw new Error('invalid password')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword

  const token = createTokenForUser(userWithoutPassword.userId)
  const userTypeToken = createTypeTokenForUser(userWithoutPassword.type)

  return { user: userWithoutPassword, token, userTypeToken }
}

export const getCurrentUser = cache(async () => {
  console.log('getting current user')
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')
  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')
  return user
})

const getUserFromToken = async (token: { name: string; value: string }) => {
  const payload = jwt.verify(token.value, process.env.COOKIE_SECRET!) as {
    id: string
  }

  const user = await prisma.user.findUnique({
    where: { userId: payload.id },
    select: {
      userId: true,
      email: true,
    },
  })

  return user
}
