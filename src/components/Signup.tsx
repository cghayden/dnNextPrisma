'use client'

import { useState } from 'react'

export default function Signup() {
  const [showUserTypeChoice, toggleShowUserTypeChoice] = useState<
    'parent' | 'studio' | null
  >(null)

  return (
    // show parent or studio choice
    <div className='flex justify-around'>
      <button
        // href='/parentSignup'
        onClick={() => toggleShowUserTypeChoice('parent')}
        className='flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-3 text-base font-medium text-gray-800 shadow-sm hover:bg-blue-50 sm:px-8'
      >
        Parent Signup
      </button>
      <button
        // href='/studioSignup'
        onClick={() => toggleShowUserTypeChoice('studio')}
        className='text-gray-700-700 flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-3 text-base font-medium shadow-sm hover:bg-blue-50 sm:px-8'
      >
        Studio Signup
      </button>
    </div>

    // show parent signup form

    // show studio signup form
  )
}
