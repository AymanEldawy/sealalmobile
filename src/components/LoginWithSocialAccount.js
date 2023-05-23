import React, { useContext } from 'react';

import { LanguageContext } from '@/context/LangContext';
import { AppleIcon, FacebookPrimaryIcon, GooglePrimaryIcon } from './Icons';
import { fetchWord } from '@/lang/fetchWord';

export const LoginWithSocialAccount = ({ hideText }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className={`flex ${hideText ? "justify-center" :"flex-col justify-around"} gap-4 w-full text-[#382D37] font-medium  mx-auto"`}>
      <button className="bg-[#FAFAFA] p-3 flex gap-4 items-center">
        <FacebookPrimaryIcon />
        {hideText ? null : <span>{fetchWord('with_Google', lang)}</span>}
      </button>
      <button className="bg-[#FAFAFA] p-3 flex gap-4 items-center">
        <GooglePrimaryIcon />
        {hideText ? null : <span>{fetchWord('with_Facebook', lang)}</span>}
      </button>
      <button className="bg-[#FAFAFA] p-3 flex gap-4 items-center">
        <AppleIcon />
        {hideText ? null : <span>{fetchWord('with_Apple', lang)}</span>}
      </button>
    </div>
  );
};
