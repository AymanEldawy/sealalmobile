import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';

export const TabsList = ({ items, handelChangeTab, selectedTab }) => {
  const { lang } = useContext(LanguageContext);
  console.log(items, handelChangeTab, selectedTab);
  return (
    <div className="flex w-full mt-8">
      {items.map((item) => (
        <button
          type="button"
          key={item}
          className={`capitalize text-lg border-b-2 border-secondary flex-1 p-3 text-center ${
            selectedTab === item ? '!border-primary !border-b-[3px] ' : ''
          }`}
          onClick={() => handelChangeTab(item)}
        >
          {fetchWord(item, lang)}
        </button>
      ))}
    </div>
  );
};
