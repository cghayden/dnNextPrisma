'use client'

import { useState } from 'react'
import stageLights from '@/images/stageLights.png'
import Image from 'next/image'
// import Link from 'next/link'
// import ParentSignupForm from '@/components/ParentSignupForm'
import SignInForm from '@/components/SigninForm'
import Signup from '@/components/Signup'
// import { useOptionalUser } from '~/utils'

export default function Welcome() {
  // const [showUserTypeChoice, toggleShowUserTypeChoice] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  // const user = useOptionalUser()
  return (
    <main>
      <div className='h-screen w-screen'>
        <div className='absolute inset-0'>
          <Image
            className='h-full w-full object-cover'
            src={stageLights}
            alt='stage lights'
          />
          <div className='absolute inset-0 bg-[color:rgba(27,167,254,0.4)] mix-blend-multiply' />
        </div>
        <div className='logo fixed top-32 left-1/2 transform -translate-x-1/2 whitespace-nowrap'>
          <h1 className=' text-center text-5xl font-extrabold tracking-tight sm:text-6xl'>
            <span className='block uppercase text-gray-300 drop-shadow-md'>
              Dancer Notes
            </span>
          </h1>
        </div>

        <div className='grid h-full place-items-center'>
          <div className='relative'>
            <div className='activeView w-[320px] mx-auto mt-10 justify-center'>
              <div className=''>{showSignup ? <Signup /> : <SignInForm />}</div>
              <div className='text-zinc-300 flex justify-center py-8 text-xl'>
                {showSignup ? (
                  <button onClick={() => setShowSignup(false)}>Login</button>
                ) : (
                  <button onClick={() => setShowSignup(true)}>
                    Create an Account
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='fixed bottom-20 left-2/4 -translate-x-2/4 text-gray-50'>
          <div className='flex flex-wrap gap-10'>
            <a className='whitespace-nowrap' href='loginSampleStudio'>
              Login To Sample Studio
            </a>
            <br />
            <a className='whitespace-nowrap' href='loginSampleParent'>
              Login To Sample Parent Account
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
