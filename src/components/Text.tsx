// Use 'client' is a directive specific to Next.js 13+ and does not affect the TypeScript conversion.
'use client'

import { useContext } from 'react';
import { MyContext } from './MyContext';

interface TextProps {
  arrayTexts: string[];
}

const Text = ({ arrayTexts }: TextProps) => {
  interface MyContextType {
    indexLanguage: number;
  }

  const { indexLanguage } = useContext(MyContext) as MyContextType;

  return (
    <span>{arrayTexts[indexLanguage]}</span>
  );
}

export default Text;