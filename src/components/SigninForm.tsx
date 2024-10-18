'use client'

import { signin } from '@/actions/auth/signin'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'

const initialState = { message: null }

export default function SignInForm() {
  const [formState, action] = useFormState<{ message: string | null }>(
    signin,
    initialState
  )
  console.log('formState', formState)

  return (
    <form
      className='bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 '
      action={action}
    >
      <h3 className='my-4'> Sign In</h3>
      <Input
        name='email'
        fullWidth
        size='lg'
        type='email'
        placeholder='Email'
        required
        autoComplete='email'
      />
      <Input
        name='password'
        fullWidth
        size='lg'
        type='password'
        placeholder='Password'
        required
        autoComplete='current-password'
      />
      <SubmitButton label={'Sign In'} />
      <div>
        <Link href='/signup'>{`Create an account?`}</Link>
      </div>
      {formState.message && <p>{formState.message}</p>}
    </form>
  )
}
