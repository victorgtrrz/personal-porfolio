'use client'

import { useState, useEffect, useContext } from 'react'
import { BackgroundNumbers, Navbar, Homepage, Stack, Experience, Projects, Contact, Menu } from '../components'
import { useTheme } from 'next-themes'
import { MyContext } from '@/components/MyContext';

export default function Home() {

  const { theme } = useTheme()

  const { showMenu, sectionId, lastScrollY } = useContext(MyContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showMenu) return
    window.scrollTo({top: lastScrollY});
    if (sectionId == '') return
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
          <div className='bg-gradient-to-b from-transparent to-[#00ff00] dark:to-black bottom-0 right-0 w-full h-[100px] z-30 flex'>
            <p className='m-auto text-xs'>powered by <a target="_blank" className='hover:underline' href='https://thedigitaljungle.io'>the digital jungle</a></p>
          </div>
        </>
      )}
    </main>
  )
}
