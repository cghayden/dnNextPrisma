'use client'

import { useState } from 'react'
import ParentSignupForm from './ParentSignupForm'
import StudioSignupForm from './StudioSignupForm'
import { Button } from '@nextui-org/react'

export default function Signup() {
  const [userTypeChoice, setUserTypeChoice] = useState<
    'parent' | 'studio' | null
  >(null)

  return (
    // show parent or studio choice
    <div className='flex flex-col'>
      <div className='flex justify-around mb-4'>
        <Button
          // href='/parentSignup'
          onClick={() => setUserTypeChoice('parent')}
          className='flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-blue-50 sm:px-8'
        >
          Parent Signup
        </Button>
        <Button
          // href='/studioSignup'
          onClick={() => setUserTypeChoice('studio')}
          className='text-gray-700-700 flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-3 text-base font-medium shadow-sm hover:bg-blue-50 sm:px-8'
        >
          Studio Signup
        </Button>
      </div>
      <div>
        {userTypeChoice === 'parent' && <ParentSignupForm />}
        {userTypeChoice === 'studio' && <StudioSignupForm />}
      </div>
    </div>

    // show parent signup form

    // show studio signup form
  )
}
