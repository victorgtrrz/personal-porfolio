import { Text } from "." 

const Homepage = () => {
  return (
    <div id='home' className='w-full bg-transparent h-screen p-8 flex items-end justify-end'>
      <div className='flex flex-col items-end z-10'>
        <p className='text-sm sm:text-base'>victor gutierrez</p>
        <p className='text-sm sm:text-base'><Text arrayTexts={['santander, españa', 'santander, spain', 'santander, espagne']} /></p>
        <p className='text-sm sm:text-base'><Text arrayTexts={['ingeniero y programador', 'engineer and programmer', 'ingenieur et programmeur']} /></p>
        <p className='text-sm sm:text-base'><Text arrayTexts={['2 años de experiencia como desarrollador web', '2 years of experience as web developer', '2 ans d\'experience en tant que developpeur web']} /></p>
        <p className='text-sm sm:text-base'><Text arrayTexts={['interesado por la tecnología, web3, DeFi, IA..', 'interested in technology, web3, DeFi, AI...', 'interesse par la technologie, web3, DeFi, IA...']} /></p>
        <h1 className='text-bold text-xl sm:text-2xl xl:text-4xl'>my_personal_portfolio/<Text arrayTexts={['home', 'home', 'accueil']}/></h1>
      </div>
    </div>
  )
}

export default Homepage