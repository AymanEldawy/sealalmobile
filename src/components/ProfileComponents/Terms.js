import React from 'react'
import { ProfileTitle } from './ProfileTitle'
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const Terms = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='bg-bmain p-4 pb-8'>
      <ol className='list-decimal flex flex-col gap-4 px-8'>
        <li className="marker:text-primary">
          <h4 className="text-lg font-semibold text-primary">{fetchWord('terms', lang)}</h4>
          <p className='text-[#363636] mt-4'>{fetchWord('terms_desc', lang)}</p>
        </li>
        <li className="marker:text-primary">
          <h4 className="text-lg font-semibold text-primary">{fetchWord('Use_License', lang)}</h4>
          <p className='text-[#363636] mt-4'>{fetchWord('Use_License_desc', lang)}</p>
        </li>
      </ol>
      <ol className='list-decimal flex flex-col gap-2 px-8 my-8'>
        <li>{fetchWord('Use_License_desc1', lang)}</li>
        <li>{fetchWord('Use_License_desc2', lang)}</li>
        <li>{fetchWord('Use_License_desc3', lang)}</li>
        <li>{fetchWord('Use_License_desc4', lang)}</li>
      </ol>
      <p className='px-4'>{fetchWord('Use_License_desc5', lang)}</p>
    </div>
  )
}
