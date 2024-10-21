'use client'

import { registerParent } from '@/actions/auth/registerParent'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'

const initialState = { message: null }

const ParentSignupForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    registerParent,
    initialState
  )
  console.log('formState', formState)

  return (
    <form
      className='bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 '
      action={action}
    >
      <h3 className='my-4'>Parent Sign Up</h3>
      <Input
        name='firstName'
        fullWidth
        size='lg'
        type='text'
        placeholder='first name'
        required
        autoComplete='given-name'
      />{' '}
      <Input
        name='lastName'
        fullWidth
        size='lg'
        type='text'
        placeholder='last name'
        required
        autoComplete='family-name'
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

export default ParentSignupForm
