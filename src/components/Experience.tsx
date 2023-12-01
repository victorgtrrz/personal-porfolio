import React from 'react'
import { Text } from '.'

const experience_1_desc = [
  'desc_esp',
  'desc_eng',
  'desc_fr'
]

const experience_2_desc = [
  'desc_esp',
  'desc_eng',
  'desc_fr'
]

const experiences = [
  {
    link: 'https://link_1',
    company: 'company 1',
    title: 'title 1',
    date: 'date 1',
    description: experience_1_desc
  },
  {
    link: 'https://link_2',
    company: 'company 2',
    title: 'title 2',
    date: 'date 2',
    description: experience_2_desc
  }
]

const Experience = () => {
  return (
    <div id='experience' className='relative w-full bg-transparent h-screen p-4 xl:p-8 flex flex-col items-center justify-center'>
      {experiences.map((experience, index) => (
        <div key={index} className='w-7/8 sm:w-4/5 p-2 sm:p-4 xl:p-8 bg-black dark:bg-[#00ff00] text-[#00ff00] dark:text-black my-2'>
          <p className='font-bold text-sm sm:text-base'><a target='_blank' href={experience.link} className='hover:underline'>{experience.company}</a> - {experience.title}</p>
          <p className='text-sm sm:text-base'>{experience.date}</p>
          <p className='mt-4 text-sm sm:text-base'><Text arrayTexts={experience.description} /></p>
        </div>
      ))}
      <h2 className='absolute bottom-0 right-0 text-bold text-xl text-black dark:text-[#00ff00] sm:text-2xl xl:text-4xl p-8'>my_personal_portfolio/<Text arrayTexts={['experiencia', 'experience', 'experience']} /></h2>
    </div>
  )
}

export default Experience