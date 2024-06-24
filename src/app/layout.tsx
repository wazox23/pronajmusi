import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SessionProvider from './components/SessionProvider'
import { RouteKeys, PageMeta } from './constants/contants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = PageMeta[RouteKeys.HOME];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          <div className='bg-slate-100 w-full flex justify-center'>
            <div className='max-w-PAGE_MAX w-full'>
              <SessionProvider>
                {children}
              </SessionProvider>
            </div>
          </div>
        <Footer />
      </body>
    </html>
  )
}
