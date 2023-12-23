import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devLinks: Online Link Sharing Generator',
  description: 'Generated by create next app',
  icons: {
    icon: '/img/favicon-32x32.png', // /public path
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={'h-full ' + inter.className}>{children}</body>
    </html>
  )
}
