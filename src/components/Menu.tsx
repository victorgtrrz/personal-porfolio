import { useState, useContext, useEffect } from 'react'
import { MyContext } from './MyContext'

import { Text } from "."

const Menu = () => {

  const { showMenu, setShowMenu, sectionId, setSectionId } = useContext(MyContext);

  const handlePressButtonMenuMobile = (sectionId: string) => {
    setShowMenu(false)
    setSectionId(sectionId)
  }

  useEffect(() => {
    if (showMenu) return
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, [showMenu, sectionId])

  return (
    <div id='home' className='relative w-full bg-transparent text-black dark:text-[#00ff00] h-screen p-8 flex items-center justify-center'>
      <div className='flex flex-col items-center z-10 w-full'>
        <button onClick={() => handlePressButtonMenuMobile('home')} className='py-4 w-1/2 hover:bg-black hover:text-[#00ff00] hover:dark:bg-[#00ff00] hover:dark:text-black'><Text arrayTexts={['home', 'home', 'accueil']} /></button>
        <button onClick={() => handlePressButtonMenuMobile('stack')} className='py-4 w-1/2 hover:bg-black hover:text-[#00ff00] hover:dark:bg-[#00ff00] hover:dark:text-black'>stack</button>
        <button onClick={() => handlePressButtonMenuMobile('experience')} className='py-4 w-1/2 hover:bg-black hover:text-[#00ff00] hover:dark:bg-[#00ff00] hover:dark:text-black'><Text arrayTexts={['experiencia', 'experience', 'expérience']} /></button>
        <button onClick={() => handlePressButtonMenuMobile('projects')} className='py-4 w-1/2 hover:bg-black hover:text-[#00ff00] hover:dark:bg-[#00ff00] hover:dark:text-black'><Text arrayTexts={['proyectos', 'proyects', 'projets']} /></button>
        <button onClick={() => handlePressButtonMenuMobile('contact')} className='py-4 w-1/2 hover:bg-black hover:text-[#00ff00] hover:dark:bg-[#00ff00] hover:dark:text-black'><Text arrayTexts={['contacto', 'contact', 'contact']} /></button>
      </div>
      <h1 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8'>my_personal_portfolio/<Text arrayTexts={['menu', 'menu', 'menu']} /></h1>
    </div>
  )
}

export default Menu