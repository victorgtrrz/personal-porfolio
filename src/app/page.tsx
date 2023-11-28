'use client'

import { useState, useEffect } from 'react'
import { BackgroundNumbers, Navbar, Homepage, Stack, Experience, Projects, Contact } from '../components'
import { useTheme } from 'next-themes'

export default function Home() {

  const { theme } = useTheme()

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {isMounted && <BackgroundNumbers theme={theme} />}
      <Navbar />
      <Homepage />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
