'use client'

import { signin } from '@/actions/auth/signin'
import { Input } from '@nextui-org/react'
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
    <form className='p-3 flex flex-col gap-2 ' action={action}>
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

      {formState.message && <p className='text-zinc-50'>{formState.message}</p>}
    </form>
  )
}
