import { Text } from "." 

const Homepage = () => {
  return (
    <div id='home' className='w-full bg-[#00ff00] text-black dark:bg-black dark:text-[#00ff00] h-screen p-8 flex items-end justify-end'>
      <div className='flex flex-col items-end z-10 mb-24 sm:mb-0'>
        <p className='text-sm text-right sm:text-base'>name</p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['city_esp', 'city_eng', 'city_fr']} /></p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['profession_esp', 'profession_eng', 'profession_fr']} /></p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['interests_esp', 'interests_eng', 'interests_fr']} /></p>
        <h1 className='text-bold text-xl sm:text-2xl xl:text-4xl'>my_personal_portfolio/<Text arrayTexts={['home', 'home', 'accueil']}/></h1>
      </div>
    </div>
  )
}

export default Homepage