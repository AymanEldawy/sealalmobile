import React, { useContext } from 'react';
import Image from 'next/image';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const CategoryBanner = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="relative">
      <figure>
        <Image
          className="max-h-[400px] object-cover object-center"
          src="/images/istockphoto-496127904-612x612.jpg"
          // src="/images/new-collection.jpg"
          alt="Category"
          height={416}
          width={1200}
        />
      </figure>
      <div className="absolute top-1/2 -translate-y-1/2 right-36 flex flex-col gap-4 max-w-xs text-white">
        <h1 className="text-4xl flex flex-col text-black">
          {fetchWord('new', lang)}
          <span className="text-6xl text-primary font-semibold">
            {fetchWord('Collection', lang)}
          </span>
        </h1>
        <p className="text-[#858585]">
          {fetchWord('Collection_description', lang)}
        </p>
        <PrimaryButton
          text={fetchWord('shop_now', lang)}
          classes="w-[136px] h-[40px] !rounded-md"
        />
      </div>
    </div>
  );
};
