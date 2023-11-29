'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the context type
interface MyContextType {
  indexLanguage: number;
  setIndexLanguage: Dispatch<SetStateAction<number>>;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  sectionId: string;
  setSectionId: Dispatch<SetStateAction<string>>;
  lastScrollY: number;
  setLastScrollY: Dispatch<SetStateAction<number>>;
}

// Create a default value with the required shape
const defaultContextValue: MyContextType = {
  indexLanguage: 0,
  setIndexLanguage: () => {
    throw new Error('setIndexLanguage not overridden');
  },
  showMenu: false,
  setShowMenu: () => {
    throw new Error('setShowMenu not overridden');
  },
  sectionId: 'home',
  setSectionId: () => {
    throw new Error('setSectionId not overridden');
  },
  lastScrollY: 0,
  setLastScrollY: () => {
    throw new Error('setLastScrollY not overridden');
  }
};

// Create the context with the default value
export const MyContext = createContext<MyContextType>(defaultContextValue);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [indexLanguage, setIndexLanguage] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [sectionId, setSectionId] = useState<string>('home');
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <MyContext.Provider value={{ indexLanguage, setIndexLanguage, showMenu, setShowMenu, sectionId, setSectionId, lastScrollY, setLastScrollY}}>
      {children}
    </MyContext.Provider>
  );
};