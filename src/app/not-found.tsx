'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Cookies from 'js-cookie';

import { BackgroundNumbers }from '@/components'

const Page = () => {

    const { theme } = useTheme()

    const indexLanguage = parseInt(Cookies.get('indexLanguage') || '0')

    return (
        <>
            <BackgroundNumbers theme={theme} />
            <div className='text-black dark:text-[#00ff00] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 flex flex-col items-center'>
                <p>{['nada interesante que ver por aqui...', 'nothing interesting to see around here...', 'rien d\'intéressant à voir par ici...'][indexLanguage]}</p>
                <Link href='/' className='mt-4 hover:underline'>{['volver a la página principal', 'return to the main page', 'retourner à la page principale'][indexLanguage]}</Link>
            </div>
        </>
    )
}

export default Page