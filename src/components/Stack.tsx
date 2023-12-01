import { useState } from 'react'
import Text from './Text'

const Stack = () => {

  const [index, setIndex] = useState(5)
  const [fixed, setFixed] = useState(false)

  const handleSetIndex = (index: number) => {
    setIndex(index)
    setFixed(false)
  }

  const stack_1 = 'stack 1'
  const stack_2 = 'stack 2'
  const stack_3 = 'stack 3'
  const stack_4 = 'stack 4'
  const stack_5 = 'stack 5'

  const description_stack_1 = [
    'desc_esp',
    'desc_eng',
    'desc_fr'
  ]

  const description_stack_2 = [
    'desc_esp',
    'desc_eng',
    'desc_fr'
  ]

  const description_stack_3 = [
    'desc_esp',
    'desc_eng',
    'desc_fr'
  ]

  const description_stack_4 = [
    'desc_esp',
    'desc_eng',
    'desc_fr'
  ]

  const description_stack_5 = [
    'desc_esp',
    'desc_eng',
    'desc_fr'
  ]

  return (
    <div id='stack' className='relative w-full text-black dark:text-[#00ff00] bg-transparent h-screen p-8 flex'>
      <div className='flex flex-row w-full h-screen sm:p-8 xl:p-32'>
        <div className='flex flex-col w-1/5 sm:w-1/3 xl:w-1/2 h-[80%] justify-around'>
          <button onTouchStart={() => handleSetIndex(0)} onMouseEnter={() => handleSetIndex(0)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>{stack_1}</p></button>
          <button onTouchStart={() => handleSetIndex(1)} onMouseEnter={() => handleSetIndex(1)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>{stack_2}</p></button>
          <button onTouchStart={() => handleSetIndex(2)} onMouseEnter={() => handleSetIndex(2)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>{stack_3}</p></button>
          <button onTouchStart={() => handleSetIndex(3)} onMouseEnter={() => handleSetIndex(3)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>{stack_4}</p></button>
          <button onTouchStart={() => handleSetIndex(4)} onMouseEnter={() => handleSetIndex(4)} onTouchEnd={() => !fixed && setIndex(5)} onMouseLeave={() => !fixed && setIndex(5)} onClick={() => setFixed(true)} className='w-full h-1/5 hover:bg-black dark:hover:bg-[#00ff00] hover:text-[#00ff00] dark:hover:text-black'><p className='rotate-[-90deg] sm:rotate-0'>{stack_5}</p></button>
        </div>
        <div className='w-4/5 sm:w-2/3 xl:w-1/2 h-[80%] px-8'>
          
          {index === 0 &&
            <div>
              <h2 className='mb-4 text-sm sm:text-base'>{stack_1}</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={description_stack_1}/></p>
            </div>
          }
          {index === 1 &&
            <div className='h-full'>
              <div className='w-full h-1/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>{stack_2}</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={description_stack_2}/></p>
            </div>
          }
          {index === 2 &&
            <div className='h-full'>
              <div className='w-full h-2/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>{stack_3}</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={description_stack_3}/></p>
            </div>
          }
          {index === 3 &&
            <div className='h-full'>
              <div className='w-full h-3/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>{stack_4}</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={description_stack_4}/></p>
            </div>
          }
          {index === 4 &&
            <div className='h-full'>
              <div className='w-full h-4/5'></div>
              <h2 className='mb-4 text-sm sm:text-base'>{stack_5}</h2>
              <p className='text-sm ms:text-base'><Text arrayTexts={description_stack_5}/></p>
            </div>
          }
        </div>
      </div>
      <h2 className='absolute bottom-0 right-0 text-bold text-xl sm:text-2xl xl:text-4xl p-8'>my_personal_portfolio/stack</h2>
    </div>
  )
}

export default Stack