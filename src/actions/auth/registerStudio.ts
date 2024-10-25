'use server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME, USER_TYPE_COOKIE_NAME } from '@/utils/constants'
import { signupStudio } from '../../models/studio'
// import { PassThrough } from 'stream'

const signupStudioSchema = z.object({
  name: z
    .string({ required_error: 'Studio Name is required' })
    .min(2, { message: 'Studio Name Must Be At Least 2 Characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password Must Be At Least 8 Characters' }),
})

export const registerStudio = async (prevState: any, formData: FormData) => {
  // validate input with zod
  const input = signupStudioSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!input.success) {
    return { message: input.error.errors[0].message }
  }

  try {
    // TODO does user already exist?
    const { token, userTypeToken } = await signupStudio(input.data)

    cookies().set(COOKIE_NAME, token)
    cookies().set(USER_TYPE_COOKIE_NAME, userTypeToken)
  } catch (e: any) {
    console.error(e)
    return { message: `Error: Failed to sign up ${e.message}` }
  }
  // redirect cannot be put in a try-catch
  redirect('/studio')
}
