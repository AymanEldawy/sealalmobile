import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../../context/LangContext';
import React, { useContext } from 'react';
import { fetchWord } from '@/lang/fetchWord';

export const BannerInfo = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  text-center">
      <h1 className="text-6xl text-center mb-4 flex flex-col gap-2">
        <span className="text-5xl font-normal">
          {fetchWord('home_flash_sale', lang)}
        </span>
        <span className=" text-primary font-semibold">
          {fetchWord('home_flash_get_up', lang)}
        </span>
      </h1>
      <PrimaryButton classes="w-32 h-10" text={fetchWord('shop_now', lang)} />
    </div>
  );
};
