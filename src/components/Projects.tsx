import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Text } from '.'

const Projects = () => {

  const [indexProject, setIndexProject] = useState(3)
  const { theme } = useTheme()

  const text = [
    'he estado trabajando en diferentes proyectos desde que comencé mi camino como programador, siendo esos los más relevantes por el momento. Seguro que vendrán muchos más...',
    'I\'ve been working in different projects since I started my journey as a programmer, the most relevant for the moment being those. A lot more to come, for sure...',
    'je travaille sur différents projets depuis que j\'ai commencé mon parcours en tant que programmeur, ceux-ci étant les plus pertinents pour le moment. Il y en aura certainement beaucoup d\'autres à venir...'
  ]

  const projects = [
    {
      name: 'ironhölics',
      description: ['plataforma de entrenamiento online', 'online training platform', 'plateforme d\'entrainement en ligne'],
      logo: '/ironholics_logo.png',
      logo_light: '/ironholics_logo_light.png',
      link: 'https://ironholics.net'
    },
    {
      name: 'cr formula',
      description: ['3d models para simracing', '3d models for simracing', 'modèles 3D pour le simracing'],
      logo: '/crformula_logo.png',
      logo_light: '/crformula_logo_light.png',
      link: 'https://crformula.com'
    },
    {
      name: 'the digital jungle',
      description: ['desarrollo web', 'web development', 'developpement web'],
      logo: '/thedigitaljungle_logo.png',
      logo_light: '/thedigitaljungle_logo_light.png',
      link: 'https://thedigitaljungle.io'
    }
  ]

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div id='projects' className='relative w-full bg-transparent min-h-screen p-8 flex items-center justify-center text-black dark:text-[#00ff00]'>
      <div className='w-[80%] flex flex-col'>
        <p className='text-sm sm:text-base'><Text arrayTexts={text}/></p>
        <div className='flex flex-wrap items-center justify-center mb-8'>
          {projects.map((item, index) => (
            <a key={index} onTouchStart={() => setIndexProject(index)} onMouseEnter={() => setIndexProject(index)} onTouchEnd={() => setIndexProject(3)} onMouseLeave={() => setIndexProject(3)} target='_blank' href={item.link} className={`relative border-2 ${indexProject == index ? 'bg-[#00ff00] dark:bg-black border-black dark:border-[#00ff00]' : 'bg-black dark:bg-[#00ff00] border-[#00ff00] dark:border-black'} w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] m-4 sm:m-8 flex flex-col justify-between`}>
              <p className={`${indexProject == index ? 'bg-black dark:bg-[#00ff00] text-[#00ff00] dark:text-black' : 'bg-[#00ff00] dark:bg-black text-black dark:text-[#00ff00]'} text-center p-2 text-sm sm:text-base`}>{item.name}</p>
              {isMounted && <Image className={`mx-auto ${index == 0 && 'p-8'}`} src={indexProject == index ? (theme == 'dark' ? item.logo_light : item.logo) : (theme == 'dark' ? item.logo : item.logo_light)} width={index == 0 ? 300 : 100} height={index == 0 ? 300 : 100} alt={item.name} title={item.name} />}
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