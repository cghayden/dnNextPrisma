'use server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'
import { getUser } from '../queries/getUser'
// import { PassThrough } from 'stream'

const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string(),
})

export const signin = async (prevState: any, formData: FormData) => {
  // validate input with zod
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  let user
  let token
  try {
    const response = await getUser(data)
    console.log('response', response)
    if (!response) {
      throw new Error('User Not found: Invalid email or password')
    }
    user = response.user
    token = response.token
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign in' }
  }
  // redirect cannot be put in a try-catch
  redirect(`/${user.type.toLowerCase()}`)
}
