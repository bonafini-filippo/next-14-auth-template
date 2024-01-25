import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Metadata } from 'next'
import { MetadataLayout } from '@/lib/pages'
const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = MetadataLayout;

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: any
}) {

  return (
    <html>
      <body className={`${inter.className}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
