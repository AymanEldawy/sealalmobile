import React, { useContext } from 'react';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const OfferSection = () => {
  const { lang } = useContext(LanguageContext);
  console.log(fetchWord('first_Purchase', lang))
  return (
    <div className="bg-bgprimary flex flex-col items-center p-4">
      <div className="flex gap-2 items-center mb-2">
        <h4 className="font-medium ">{fetchWord('first_Purchase', lang)}</h4>
        <span className="bg-white text-primary p-1">
          {fetchWord('code', lang)}: Code123
        </span>
      </div>
      <p className="text-sm">{fetchWord('Applicable_to_orders', lang)}</p>
    </div>
  );
};
