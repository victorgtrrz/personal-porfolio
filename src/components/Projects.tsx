import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Text } from '.'

const Projects = () => {

  const { theme } = useTheme()

  const projects = [
    {
      name: 'project_1',
      description: ['desc_esp', 'desc_eng', 'desc_fr'],
      logo: '/basic_logo.png',
      logo_light: '/basic_logo_light.png',
      link: 'https://project_1.com'
    },
    {
      name: 'project_2',
      description: ['desc_esp', 'desc_eng', 'desc_fr'],
      logo: '/basic_logo.png',
      logo_light: '/basic_logo_light.png',
      link: 'https://project_2.com'
    },
    {
      name: 'project_3',
      description: ['desc_esp', 'desc_eng', 'desc_fr'],
      logo: '/basic_logo.png',
      logo_light: '/basic_logo_light.png',
      link: 'https://project_3.com'
    }
  ]

  const [indexProject, setIndexProject] = useState(projects.length)

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div id='projects' className='relative w-full bg-transparent min-h-screen p-8 flex items-center justify-center text-black dark:text-[#00ff00]'>
      <div className='w-[80%] flex flex-col'>
        <div className='flex flex-wrap items-center justify-center mb-8'>
          {projects.map((item, index) => (
            <a key={index} onTouchStart={() => setIndexProject(index)} onMouseEnter={() => setIndexProject(index)} onTouchEnd={() => setIndexProject(projects.length)} onMouseLeave={() => setIndexProject(projects.length)} target='_blank' href={item.link} className={`relative border-2 ${indexProject == index ? 'bg-[#00ff00] dark:bg-black border-black dark:border-[#00ff00]' : 'bg-black dark:bg-[#00ff00] border-[#00ff00] dark:border-black'} w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] m-4 sm:m-8 flex flex-col justify-between`}>
              <p className={`${indexProject == index ? 'bg-black dark:bg-[#00ff00] text-[#00ff00] dark:text-black' : 'bg-[#00ff00] dark:bg-black text-black dark:text-[#00ff00]'} text-center p-2 text-sm sm:text-base`}>{item.name}</p>
              {isMounted && <Image className={`mx-auto`} src={indexProject == index ? (theme == 'dark' ? item.logo_light : item.logo) : (theme == 'dark' ? item.logo : item.logo_light)} width={200} height={200} alt={item.name} title={item.name} />}
              <p className={`${indexProject == index ? 'bg-black dark:bg-[#00ff00] text-[#00ff00] dark:text-black' : 'bg-[#00ff00] dark:bg-black text-black dark:text-[#00ff00]'} text-center p-2 text-sm sm:text-base`}><Text arrayTexts={item.description} /></p>
            </a>
          ))}
        </div>
      </div>
      <h2 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8 z-10'>my_personal_portfolio/<Text arrayTexts={['proyectos', 'proyects', 'projets']} /></h2>
    </div>
  )
}

export default Projects