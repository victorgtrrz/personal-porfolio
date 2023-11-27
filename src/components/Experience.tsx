import React from 'react'
import { Text } from '.'

const lifeGamesDesc = [
  'desarrollo tanto del front end (interfaz de usuario) como del back-end (bases de datos, conexiones blockchain y unreal engine) de la aplicación web Life Games, una plataforma de videojuegos donde los usuarios pueden apostar entre sí utilizando el token nativo, LFGM',
  'development of both the front-end (user interface) and back-end (databases, blockchain and unreal engine connections) of the Life Games web application, a platform of video games where users can bet against each other using the native token, LFGM',
  'développement de l\'interface utilisateur (front end) et du serveur (back-end) incluant les bases de données, les connexions blockchain et unreal engine de l\'application web Life Games, une plateforme de jeux vidéo où les utilisateurs peuvent parier les uns contre les autres en utilisant le jeton natif, LFGM'
]

const axpeDesc_1 = [
  'participación en un grupo de desarrolladores enfocados en la adición de funcionalidades, revisión de código y resolución de errores en la aplicación web',
  'being part of a group of developers focused on the addition of functionalities, revision of code and bug solving in the',
  'participation dans un groupe de développeurs axés sur l\'ajout de fonctionnalités, la révision du code et la résolution de bugs dans l\'application web'
]

const axpeDesc_2 = [
  ', una plataforma de ofertas de empleo, siguiendo una metodología agile',
  ' web application, a platform of job postings, while following an agile methodology',
  ', une plateforme d\'offres d\'emploi, tout en suivant une méthodologie agile'
]

const Experience = () => {
  return (
    <div id='experience' className='relative w-full bg-transparent h-screen p-4 xl:p-8 flex flex-col items-center justify-center'>
      <div className='w-7/8 sm:w-4/5 p-2 sm:p-4 xl:p-8 bg-[#00ff00] text-black'> 
        <p className='font-bold text-sm sm:text-base'><a target='_blank' href='https://lifegames.io' className='hover:underline'>life games</a> - full stack</p>
        <p className='text-sm sm:text-base'>july 2023 - today</p>
        <p className='mt-4 text-sm sm:text-base'><Text arrayTexts={lifeGamesDesc}/></p>
      </div>
      <div className='w-7/8 sm:w-4/5 p-2 sm:p-4 xl:p-8 bg-[#00ff00] text-black mt-2'> 
        <p className='font-bold text-sm sm:text-base'><a target='_blank' href='https://www.axpe.com/' className='hover:underline'>AXPE consulting</a> - junior programmer</p>
        <p className='text-sm sm:text-base'>may 2022 - may 2023</p>
        <p className='mt-4 text-sm sm:text-base'><Text arrayTexts={axpeDesc_1}/> <a target='_blank' href='https://aplicacionesweb.cantabria.es/betcan/' className='hover:underline'>BETCAN</a><Text arrayTexts={axpeDesc_2}/></p>
      </div>
      <h2 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8'>my_personal_portfolio/<Text arrayTexts={['experiencia', 'experience', 'experience']}/></h2>
    </div>
  )
}

export default Experience