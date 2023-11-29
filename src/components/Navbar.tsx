import { useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie';
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTheme } from 'next-themes'

import Text from './Text'
import { MyContext } from './MyContext'

const Navbar = () => {

  const languages = ['es', 'en', 'fr']
  const { indexLanguage, setIndexLanguage, setSectionId, setLastScrollY, showMenu, setShowMenu } = useContext(MyContext);
  const { theme, setTheme } = useTheme()

  const handleSetIndexLanguage = (i: number) => {
    Cookies.set('indexLanguage', i.toString(), { expires: 7 });
    setIndexLanguage(i)
  }

  const handleSetTheme = (theme: string) => {
    Cookies.set('theme', theme, { expires: 7 });
    setTheme(theme)
  }

  useEffect(() => {
    const indexLanguageValue = Cookies.get('indexLanguage');
    const indexLanguage = Number(indexLanguageValue);
    setIndexLanguage(!isNaN(indexLanguage) ? indexLanguage : 0);
  }, [])

  const handlePressButtonNavbar = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSetShowMenu = () => {
    if (showMenu) {
      setSectionId('')
    } else {
      setLastScrollY(window.scrollY)
    }
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className='fixed flex flex-col w-full z-30'>
        <div className='bg-[#00ff00] text-black dark:bg-black dark:text-[#00ff00] w-full h-[100px] flex flex-row items-center justify-between px-8 text-sm sm:text-base'>
          <button onClick={() => handleSetShowMenu()} className='flex sm:hidden'>{showMenu ? <FaXmark size={20} /> : <FaBars className='ml-1' />}</button>
          <div className='hidden sm:flex flex-row'>
            <button onClick={() => handlePressButtonNavbar('home')} className='hover:underline mr-2'><Text arrayTexts={['home', 'home', 'accueil']} /></button>
            <button onClick={() => handlePressButtonNavbar('stack')} className='hover:underline mx-2'>stack</button>
            <button onClick={() => handlePressButtonNavbar('experience')} className='hover:underline mx-2'><Text arrayTexts={['experiencia', 'experience', 'expérience']} /></button>
            <button onClick={() => handlePressButtonNavbar('projects')} className='hover:underline mx-2'><Text arrayTexts={['proyectos', 'proyects', 'projets']} /></button>
            <button onClick={() => handlePressButtonNavbar('contact')} className='hover:underline mx-2'><Text arrayTexts={['contacto', 'contact', 'contact']} /></button>
          </div>
          <div className='flex flex-row items-center'>
            {isMounted && <button onClick={() => handleSetTheme(theme == 'dark' ? 'light' : 'dark')} >{theme == 'dark' ? <FaSun /> : <FaMoon />}</button>}
            <button className='hover:underline ml-4 text-xl sm:text-base' onClick={() => handleSetIndexLanguage((indexLanguage + 1) % 3)}>{languages[indexLanguage]}</button>
          </div>
        </div>
      </div>
      <div className='fixed mt-[100px] bg-gradient-to-b from-[#00ff00] dark:from-black to-transparent w-full h-[100px]'></div>
    </>
  )
}

export default Navbar