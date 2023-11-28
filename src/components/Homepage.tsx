import { Text } from "." 

const Homepage = () => {
  return (
    <div id='home' className='w-full bg-[#00ff00] text-black dark:bg-black dark:text-[#00ff00] h-screen p-8 flex items-end justify-end'>
      <div className='flex flex-col items-end z-10'>
        <p className='text-sm text-right sm:text-base'>víctor gutiérrez</p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['santander, españa', 'santander, spain', 'santander, espagne']} /></p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['ingeniero y programador', 'engineer and programmer', 'ingénieur et programmeur']} /></p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['desarrollador web', 'web developer', 'développeur web']} /></p>
        <p className='text-sm text-right sm:text-base'><Text arrayTexts={['interesado por la tecnología, web3, DeFi, IA..', 'interested in technology, web3, DeFi, AI...', 'intéressé par la technologie, web3, DeFi, IA...']} /></p>
        <h1 className='text-bold text-xl sm:text-2xl xl:text-4xl'>my_personal_portfolio/<Text arrayTexts={['home', 'home', 'accueil']}/></h1>
      </div>
    </div>
  )
}

export default Homepage