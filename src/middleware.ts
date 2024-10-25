import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { COOKIE_NAME } from './utils/constants'

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {

  //   if (!request.cookies.has(COOKIE_NAME)) {
  //     return NextResponse.redirect(new URL('/signin', request.url))
  //   }
  // }

  // if cookie, redirect to studio home
  if (request.nextUrl.pathname === '/') {
    if (request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL('/userRouter', request.url))
    }
  }
}

export const config = {
  matcher: ['/'],
}
