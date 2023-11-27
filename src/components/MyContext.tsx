'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the context type
interface MyContextType {
  indexLanguage: number;
  setIndexLanguage: Dispatch<SetStateAction<number>>;
}

// Create a default value with the required shape
const defaultContextValue: MyContextType = {
  indexLanguage: 0,
  setIndexLanguage: () => {
    throw new Error('setIndexLanguage not overridden');
  },
};

// Create the context with the default value
export const MyContext = createContext<MyContextType>(defaultContextValue);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [indexLanguage, setIndexLanguage] = useState<number>(0);

  return (
    <MyContext.Provider value={{ indexLanguage, setIndexLanguage }}>
      {children}
    </MyContext.Provider>
  );
};