'server-only'

import { USER_TYPE_COOKIE_NAME } from '@/utils/constants'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { redirect } from 'next/navigation'

export const routeCurrentUser = async () => {
  const userTypeToken = cookies().get(USER_TYPE_COOKIE_NAME)
  if (!userTypeToken) {
    redirect('/')
  }
  const payload = jwt.verify(
    userTypeToken.value,
    process.env.COOKIE_SECRET!
  ) as {
    userType: string
  }

  redirect(`/${payload.userType?.toLowerCase()}`)
}
