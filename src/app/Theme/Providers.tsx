'use client'

import { ThemeProvider } from 'next-themes'
import { MyContextProvider } from '@/components/MyContext';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={true} themes={['light', 'dark']}>
            <MyContextProvider>
                {children}
            </MyContextProvider>
        </ThemeProvider>
    )
}