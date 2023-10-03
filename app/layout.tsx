import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Footer from '../components/common/Footer';

export const metadata: Metadata = {
  title: 'Prepaid Metering System BPDB',
  description: 'Prepaid Metering System BPDB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>BPDB Prepaid Metering System Website</title>
      </head>
      <body className={inter.className}>
        <main className='relative h-screen w-full md:mx-auto md:w-5/6 md:p-0'>
          {children}
          <Footer />
        </main> 
      </body>
    </html>
  )
}
