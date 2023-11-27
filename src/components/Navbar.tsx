import { useEffect, useContext, useState } from 'react'
import Cookies from 'js-cookie';
import { FaMoon, FaSun } from "react-icons/fa";

import Text from './Text'
import { MyContext } from './MyContext'

const Navbar = () => {

  const languages = ['es', 'en', 'fr']
  const { indexLanguage, setIndexLanguage } = useContext(MyContext);
  const [light, setLight ] = useState(true);

  const handleSetIndexLanguage = (i: number) => {
    Cookies.set('indexLanguage', i.toString(), { expires: 7 });
    setIndexLanguage(i)
  }

  useEffect(() => {
    const indexLanguageValue = Cookies.get('indexLanguage');
    const indexLanguage = Number(indexLanguageValue);
    setIndexLanguage(!isNaN(indexLanguage) ? indexLanguage : 0);
  }, [])

  const handlePressButtonNavbar = (sectionId : string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='fixed flex flex-col w-full z-20'>
      <div className='bg-black w-full h-[100px] flex flex-row items-center justify-between px-8 text-sm sm:text-base'>
        <div className='flex flex-row'>
          <button onClick={() => handlePressButtonNavbar('home')} className='hover:underline mr-2'><Text arrayTexts={['home', 'home', 'accueil']} /></button>
          <button onClick={() => handlePressButtonNavbar('stack')} className='hover:underline mx-2'>stack</button>
          <button onClick={() => handlePressButtonNavbar('experience')} className='hover:underline mx-2'><Text arrayTexts={['experiencia', 'experience', 'experience']} /></button>
          <button onClick={() => handlePressButtonNavbar('projects')} className='hover:underline mx-2'><Text arrayTexts={['proyectos', 'proyects', 'projets']} /></button>
          <button onClick={() => handlePressButtonNavbar('contact')} className='hover:underline mx-2'><Text arrayTexts={['contacto', 'contact', 'contact']} /></button>
        </div>
        <div className='flex flex-row items-center'>
          {/* <button onClick={() => setLight(!light)} >{light ? <FaMoon /> : <FaSun />}</button> */}
          <button className='hover:underline ml-4' onClick={() => handleSetIndexLanguage((indexLanguage + 1) % 3)}>{languages[indexLanguage]}</button>
        </div>
      </div>
      <div className='bg-gradient-to-b from-black to-transparent w-full h-[100px]'>
      </div>
    </div>
  )
}

export default Navbar