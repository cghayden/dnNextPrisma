'use client'

import { signinSampleStudio } from '@/actions/auth/signin'
import { useFormState } from 'react-dom'

// const initialState = { message: null }

export default function SigninSampleStudioForm() {
  const [formState, action] = useFormState(signinSampleStudio, null)

  return (
    <>
      <form id='signinSampleStudio' className='hidden' action={action}>
        <input type='hidden' name='email' value='dancedynamics@example.com' />
        <input type='hidden' name='password' value='dancedynamics' />
      </form>
      <button type='submit' form='signinSampleStudio'>
        Sign in Sample Studio
      </button>
    </>
  )
}
