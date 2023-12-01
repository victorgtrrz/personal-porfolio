import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './Theme/Providers'

const inter = Pixelify_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'my porftolio',
  description: '',
  keywords: '',
  publisher: 'The Digital Jungle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#00ff00] dark:bg-black`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
