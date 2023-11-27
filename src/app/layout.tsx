import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MyContextProvider } from '@/components/MyContext';

const inter = Inter({ subsets: ['latin'] })

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
      <MyContextProvider>
        <body className={inter.className}>{children}</body>
      </MyContextProvider>
    </html>
  )
}
