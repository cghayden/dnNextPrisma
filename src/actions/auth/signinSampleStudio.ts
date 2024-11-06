'use server'
import { cookies } from 'next/headers'
import { COOKIE_NAME, USER_TYPE_COOKIE_NAME } from '@/utils/constants'
import { redirect } from 'next/navigation'
import { signinUser } from '../../models/user'
import getErrorMessage from '@/utils/reportError'

async function signinSampleStudio() {
  let user
  let token
  try {
    const response = await signinUser({
      email: 'dancedynamics@example.com',
      password: 'dancedynamics',
    })
    if (response) {
      user = response.user
      token = response.token
      const userTypeToken = response.userTypeToken
      cookies().set(COOKIE_NAME, token)
      cookies().set(USER_TYPE_COOKIE_NAME, userTypeToken)
    }
  } catch (e) {
    return { message: getErrorMessage(e) }
  }

  redirect(`/${user?.type.toLowerCase()}`)
}

export default signinSampleStudio
