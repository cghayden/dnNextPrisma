'use server'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'
import { signupParent } from '../mutations/parent'
// import { PassThrough } from 'stream'

const authSchema = z.object({
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

export const registerParent = async (prevState: any, formData: FormData) => {
  // validate input with zod
  const data = authSchema.parse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  try {
    const { newParent, token } = await signupParent(data)
    console.log('newParent', newParent)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.error(e)
    return { message: 'Failed to sign up' }
  }
  // redirect cannot be put in a try-catch
  redirect('/parent')
}
