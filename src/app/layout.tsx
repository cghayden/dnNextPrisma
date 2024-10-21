import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/react'
// import { cn } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DancerNotes Next',
  description: 'Dance studio and parent communication app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-zinc-100 text-zinc-950 h-screen w-screen`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  )
}
