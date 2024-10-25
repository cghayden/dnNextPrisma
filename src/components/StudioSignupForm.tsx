'use client'

import { Input } from '@nextui-org/react'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'
import { registerStudio } from '@/actions/auth/registerStudio'

const initialState = { message: null }

const StudioSignupForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    registerStudio,
    initialState
  )

  return (
    <form
      className='bg-content1 border border-zinc-400 shadow-lg rounded-md p-3 flex flex-col gap-2 '
      action={action}
    >
      <h3 className='my-4'>Studio Sign Up</h3>
      <Input
        name='name'
        fullWidth
        size='lg'
        type='text'
        placeholder='Studio Name'
        required
      />
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
        autoComplete='new-password'
      />
      <SubmitButton label={'Sign Up'} />

      {formState.message && <p>{formState.message}</p>}
    </form>
  )
}

export default StudioSignupForm
