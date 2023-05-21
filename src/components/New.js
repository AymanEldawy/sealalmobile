import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';

export const New = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <span className='p-1 text-xs ltr:ml-auto rtl:mr-auto bg-green-500 text-white'>{fetchWord('New', lang)}</span>
  )
}
