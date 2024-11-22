// import { NextResponse } from 'next/server'

// import signinSampleStudio from '@/actions/auth/signinSampleStudio'
import { signin } from '@/actions/auth/signin'

export async function GET() {
  const formData = new FormData()
  formData.append('email', 'dancedynamics@example.com')
  formData.append('password', 'dancedynamics')

  await signin(null, formData)
  // await signinSampleStudio()
}
