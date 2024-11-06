import signinSampleStudio from '@/actions/auth/signinSampleStudio'

export async function GET() {
  await signinSampleStudio()
}
