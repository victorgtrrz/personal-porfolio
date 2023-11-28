import { useState } from 'react'
import Text from './Text'

const Stack = () => {

  const [index, setIndex] = useState(5)
  const [fixed, setFixed] = useState(false)

  const handleSetIndex = (index: number) => {
    setIndex(index)
    setFixed(false)
  }

  const nextjsDesc = [
    'next.js es un marco de trabajo basado en React.js, ofreciendo todas sus funcionalidades además de maneras de manejar el backend, enrutamiento y numerosas herramientas de optimización para reducir los tiempos de carga y mejorar el SEO. Utilizo next.js para construir el esqueleto de la página en HTML, y toda la lógica de la página, tanto para el backend como el frontend usando TypeScript',
    'next.js is a react framework that is built upon react.js, offering all its functionalities plus ways to handle the backend, routing and a lot of optimization tools for reducing loading times and improve SEO. I use next.js to build the skeleton of the page in HTML, and all the logic of the page, for both the backend and frontend using TypeScript',
    'next.js est un framework React qui est construit sur React.js, offrant toutes ses fonctionnalités ainsi que des moyens de gérer le backend, le routage et de nombreux outils d’optimisation pour réduire les temps de chargement et améliorer le SEO. J’utilise next.js pour construire le squelette de la page en HTML et toute la logique de la page, tant pour le backend que pour le frontend en utilisant TypeScript'
  ]

  const tailwindcssDesc = [
    'tailwindcss es una herramienta poderosa y fácil de usar para añadir estilos personalizables a todos los elementos de la página y hacerla mucho más atractiva para el usuario. Desde cambiar colores y tamaños de fuente hasta agregar animaciones complejas y secuenciadas, tailwindcss ofrece un amplio rango de posibilidades, y también puede manejar diseño responsivo, haciendo la aplicación adecuada tanto para dispositivos de escritorio como móviles',
    'tailwindcss is a powerful, easy-to-use tool to add customizable styles to all the elements of the page and make it much more attractive for the user. From changing colors and font sizes to add complex, sequenced animations, tailwindcss offers a big range of possibilities, and can also handle responsive design, making the application suitable for both desktop and mobile devices',
    'tailwindcss est un outil puissant et facile à utiliser pour ajouter des styles personnalisables à tous les éléments de la page et la rendre beaucoup plus attrayante pour l’utilisateur. De la modification des couleurs et des tailles de police à l’ajout d’animations complexes et séquentielles, tailwindcss offre une large gamme de possibilités et peut également gérer le design réactif, rendant l’application adaptée à la fois pour les appareils de bureau et mobiles'
  ]

  const sqlDesc = [
    'tanto sql como nosql son alternativas para manejar remotamente datos necesarios en la aplicación, desde información de usuario hasta mensajes. En sql, los datos se almacenan en tablas que tienen el mismo número de campos para todos los registros, mientras que nosql ofrece más flexibilidad almacenando datos en documentos, cuyo número de campos no es fijo',
    'both sql and nosql are alternatives to handle remotely data needed in the application, from user information to messages. In sql, data is stored in tables which have the same number of fields for all the registers, whereas nosql offers more flexibility storing data in documents, whose number of fields is not fixed',
    'tant sql que nosql sont des alternatives pour gérer à distance les données nécessaires dans l’application, de l’information utilisateur aux messages. En sql, les données sont stockées dans des tables qui ont le même nombre de champs pour tous les enregistrements, tandis que nosql offre plus de flexibilité en stockant des données dans des documents, dont le nombre de champs n’est pas fixe'
  ]

  const solidityDesc = [
    'solidity es el lenguaje utilizado para crear y desplegar contratos inteligentes. También puedo manejar el despliegue de estos en cualquier mainnet o testnet utilizando herramientas como Hardhat o Foundry, y la conexión a aplicaciones web3 utilizando ethers.js, para realizar pagos o identificar usuarios por su dirección o posesión de un NFT',
    'solidity is the language used to create and deploy smart contracts. I can also handle the deployment of those in any mainnet or testnet using tools like Hardhat or Foundry, and the connection to web3 applications using ethers.js, to make payments or identify users by their address or possession of an NFT',
    'solidity est le langage utilisé pour créer et déployer des contrats intelligents. Je peux également gérer le déploiement de ceux-ci sur n’importe quel mainnet ou testnet en utilisant des outils comme Hardhat ou Foundry, et la connexion à des applications web3 en utilisant ethers.js, pour effectuer des paiements ou identifier des utilisateurs par leur adresse ou la possession d’un NFT'
  ]

  const AIDesc = [
    'hoy en día creo que es básico estar acostumbrado al uso de herramientas de IA. Las utilizo como asistente para codificar, traducir, crear imágenes y automatizar tareas repetitivas',
    'nowadays I believe it is basic to be used to the usage of AI tools. I use them as assistant for coding, translating, creation of images and automation of repetitive tasks',
    'de nos jours, je crois qu’il est essentiel d’être habitué à l’utilisation d’outils d’IA. Je les utilise comme assistant pour coder, traduire, créer des images et automatiser des tâches répétitives'
  ]

  return (
    <div id='stack' className='relative w-full text-black dark:text-[#00ff00] bg-transparent h-screen p-8 flex'>
      <div className='flex flex-row w-full h-screen sm:p-8 xl:p-32'>
        <div className='flex flex-col w-1/5 sm:w-1/3 xl:w-1/2 h-[80%] justify-around'>
          <button onTouchStart={() => handleSetIndex(0)} onMouseEnter={() => handleSetIndex(0)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>next.js</p></button>
          <button onTouchStart={() => handleSetIndex(1)} onMouseEnter={() => handleSetIndex(1)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>tailwindcss</p></button>
          <button onTouchStart={() => handleSetIndex(2)} onMouseEnter={() => handleSetIndex(2)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>sql/nosql</p></button>
          <button onTouchStart={() => handleSetIndex(3)} onMouseEnter={() => handleSetIndex(3)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>solidity</p></button>
          <button onTouchStart={() => handleSetIndex(4)} onMouseEnter={() => handleSetIndex(4)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>AI</p></button>
        </div>
        <div className='w-4/5 sm:w-2/3 xl:w-1/2 h-[80%] px-8'>
          {index === 0 &&
            <div>
              <h2 className='mb-4 text-sm sm:text-base'>next.js - full stack</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={nextjsDesc}/></p>
            </div>
          }
          {index === 1 &&
            <div className='h-full'>
              <div className='w-full h-1/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>tailwindcss - <Text arrayTexts={['estilos', 'styles', 'styles']}/></h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={tailwindcssDesc}/></p>
            </div>
          }
          {index === 2 &&
            <div className='h-full'>
              <div className='w-full h-2/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>sql/nosql - <Text arrayTexts={['gestion de datos', 'data management', 'gestion des donnes']}/></h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={sqlDesc}/></p>
            </div>
          }
          {index === 3 &&
            <div className='h-full'>
              <div className='w-full h-3/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>solidity - blockchain</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={solidityDesc}/></p>
            </div>
          }
          {index === 4 &&
            <div className='h-full'>
              <div className='w-full h-4/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>AI - <Text arrayTexts={['optimizacion de tareas', 'task optimization', 'optimisation des taches']}/></h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={AIDesc}/></p>
            </div>
          }
        </div>
      </div>
      <h2 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8'>my_personal_portfolio/stack</h2>
    </div>
  )
}

export default Stack