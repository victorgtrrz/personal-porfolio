import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './Theme/Providers'

const inter = Pixelify_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'victor porftolio',
  description: 'Welcome to my online portfolio, where I show my skills as a web developer and my projects since I started my journey as a programmer. Feel free to take a look or even contact me for more info.',
  keywords: 'frontend, junior programmer, full stack, web developer, react, nextjs, typescript, javascript, html, css, sass, tailwindcss, nodejs, express, mongodb, mysql, web3, solidity, defi, react native, mobile',
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
