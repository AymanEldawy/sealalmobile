import { LanguageContext } from '@/context/LangContext'
import React, { useContext } from 'react';
import { ENIcon } from '../Icons';
import Image from 'next/image';
import { fetchWord } from '@/lang/fetchWord';

const Languages = () => {
  const { lang, changeLang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col">
      <h3 className="font-medium text-lg mb-2">{fetchWord('languages', lang)}</h3>
      <div className="flex flex-col flex-wrap gap-2">
      <button
        className={`flex gap-3 items-center bg-gray-200 p-2 flex-1 rounded-md ${lang === 'en'? 'bg-secondary' :''}`} 
        onClick={() => changeLang('en')}
        >
        <ENIcon />
        English
      </button>
      <button
        className={`flex gap-3 items-center bg-gray-200 p-2 flex-1 rounded-md ${lang === 'ar'? 'bg-secondary' :''}`} 
        onClick={() => changeLang('ar')}
        >
        <Image
          src="/images/arabic-lang.png"
          alt="Arabic language"
          width={20}
          height={10}
          />
        العربية
      </button>
          </div>
    </div>
  )
}

export default Languages