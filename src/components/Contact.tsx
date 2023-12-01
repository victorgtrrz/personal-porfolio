import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { Text } from '.'

const Contact = () => {

  const email = ''
  const linkedin = ''
  const github = ''

  return (
    <div id='contact' className='relative w-full bg-transparent h-screen p-8 flex items-center justify-center text-black dark:text-[#00ff00]'>
      <div className='flex flex-col items-center z-10 text-sm sm:text-base'>
        <p className='font-bold'><Text arrayTexts={['conectemos!', 'let\'s connect!', 'connectons-nous!']}/></p>
        <div className='flex flex-row justify-center'>
          <a className='m-4' href={`mailto:${email}`}><FaEnvelope size={30} /></a>
          <a className='m-4' target='_blank' href={`https://www.linkedin.com/in/${linkedin}`}><FaLinkedin size={30} /></a>
          <a className='m-4' target='_blank' href={`https://github.com/${github}`}><FaGithub size={30} /></a>
        </div>
      </div>
      <h2 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8 z-10'>my_personal_portfolio/<Text arrayTexts={['contacto', 'contact', 'contact']}/></h2>
    </div>
  )
}

export default Contact