import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { Text } from '.'

const Contact = () => {
  return (
    <div id='contact' className='relative w-full bg-transparent h-screen p-8 flex items-center justify-center'>
      <div className='flex flex-col items-center z-10 text-sm sm:text-base'>
        <p className='font-bold'><Text arrayTexts={['conectemos!', 'let\'s connect!', 'connectons-nous !']}/></p>
        <p><Text arrayTexts={['puedes contactarme a través de mi', 'you can reach me trough my', 'vous pouvez me joindre via mon']}/> <a className='hover:underline' href='mailto:info@victorgutierrez.tech'>email</a></p>
        <p><Text arrayTexts={['y también siguiéndome en las redes sociales', 'and also following me in the media', 'et aussi en me suivant sur les réseaux sociaux']}/></p>
        <div className='flex flex-row justify-center'>
          <a className='m-4' href='mailto:info@victorgutierrez.tech'><FaEnvelope size={30} /></a>
          <a className='m-4' href='https://www.linkedin.com/in/victorgtrz/'><FaLinkedin size={30} /></a>
          <a className='m-4' href='https://github.com/victorgtrrz'><FaGithub size={30} /></a>
        </div>
      </div>
      <h2 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8 z-10'>my_personal_portfolio/<Text arrayTexts={['contacto', 'contact', 'contact']}/></h2>
      <div className='absolute bg-gradient-to-b from-transparent to-black bottom-0 right-0 w-full h-[100px]'></div>
    </div>
  )
}

export default Contact