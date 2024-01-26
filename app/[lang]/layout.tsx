import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Metadata } from 'next'
import { MetadataLayout } from '@/lib/pages'
import { Locale } from '@/i18n.config'
import { getDictionary } from './dictionaries'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = MetadataLayout;

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  const { pages } = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={`${inter.className}`}>
        <Header pages={pages} />
        <main>
          {children}
        </main>
        <Footer pages={pages} />
        <Toaster />
      </body>
    </html>
  )
}
