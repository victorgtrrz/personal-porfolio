'use client'

import { useState, useEffect, useContext } from 'react'
import { BackgroundNumbers, Navbar, Homepage, Stack, Experience, Projects, Contact, Menu } from '../components'
import { useTheme } from 'next-themes'
import { MyContext } from '@/components/MyContext';

export default function Home() {

  const { theme } = useTheme()

  const { showMenu, sectionId } = useContext(MyContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showMenu) return
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [showMenu, sectionId])

  return (
    <main className="relative flex min-h-screen flex-col items-center">
      {isMounted && <BackgroundNumbers theme={theme} />}
      <Navbar />
      {showMenu && <Menu />}
      {!showMenu && (
        <>
          <Homepage />
          <Stack />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </main>
  )
}
