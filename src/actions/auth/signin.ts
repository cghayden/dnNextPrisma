'use server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'
import { signinUser } from '../../models/user'
// import { PassThrough } from 'stream'

const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string(),
})

export const signin = async (prevState: any, formData: FormData) => {
  // validate input with zod
  const input = authSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!input.success) {
    return { message: input.error.errors[0].message }
  }

  let user
  let token
  try {
    const response = await signinUser(input.data)
    if (response) {
      user = response.user
      token = response.token
      cookies().set(COOKIE_NAME, token)
    }
  } catch (e) {
    console.error(e)
    return { message: `Failed to sign in ${e.message}` }
  }
  // redirect cannot be put in a try-catch
  redirect(`/${user?.type.toLowerCase()}`)
}
