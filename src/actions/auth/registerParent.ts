'use server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME, USER_TYPE_COOKIE_NAME } from '@/utils/constants'
import { signupParent } from '../../models/parent'
// import { PassThrough } from 'stream'

const signupParentSchema = z.object({
  firstName: z
    .string({ required_error: 'First Name is required' })
    .min(2, { message: 'First Name Must Be At Least 2 Characters' }),
  lastName: z
    .string({ required_error: 'Last Name is required' })
    .min(3, { message: 'First Name Must Be At Least 2 Characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password Must Be At Least 8 Characters' }),
})

export const registerParent = async (
  prevState: unknown,
  formData: FormData
) => {
  // validate input with zod
  const input = signupParentSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!input.success) {
    return { message: input.error.errors[0].message }
  }

  try {
    // does user already exist?
    const { token, userTypeToken } = await signupParent(input.data)
    cookies().set(COOKIE_NAME, token)
    cookies().set(USER_TYPE_COOKIE_NAME, userTypeToken)
  } catch (e: any) {
    console.error(e)
    return { message: `Error: Failed to sign up ${e.message}` }
  }
  // redirect cannot be put in a try-catch
  redirect('/parent')
}
