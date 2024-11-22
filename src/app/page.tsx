'use client'

import { useState } from 'react'
import stageLights from '@/images/stageLights.png'
import Image from 'next/image'
import SignInForm from '@/components/SigninForm'
import Signup from '@/components/Signup'
import SigninSampleStudioForm from '@/components/SigninSampleStudioForm'
export default function Welcome() {
  const [showSignup, setShowSignup] = useState(false)

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
        <div className='grid h-full place-items-center'>
          <h1 className=' text-center text-5xl font-extrabold tracking-tight sm:text-6xl'>
            <span className='block uppercase text-gray-300 drop-shadow-md'>
              Dancer Notes
            </span>
          </h1>
          <div className=' relative activeView w-11/12 max-w-xl mx-auto mt-10 justify-center'>
            {showSignup ? <Signup /> : <SignInForm />}
            <div className='text-zinc-300 flex justify-center py-8 text-xl'>
              {showSignup ? (
                <button onClick={() => setShowSignup(false)}>
                  Already have an account? Sign in
                </button>
              ) : (
                <button onClick={() => setShowSignup(true)}>
                  Create an Account
                </button>
              )}
            </div>
          </div>
          <div className='relative text-gray-50'>
            <div className='flex flex-col md:flex-row flex-wrap'>
              {/* <SigninSampleStudioForm /> */}
              <br />
              {/* <a className='whitespace-nowrap' href='loginSampleParent'>
                Login To Sample Parent Account
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
