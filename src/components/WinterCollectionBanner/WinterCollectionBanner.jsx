import Image from 'next/image';
import React, { useContext } from 'react';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const WinterCollectionBanner = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mt-12">
      <div className="container relative">
        <Image
          className="object-cover min-h-[250px] md:min-h-max"
          src="/images/home/winter-collection.png"
          alt="Winter Collection"
          height={278}
          width={1203}
        />
        <div className="winter-backdrop text-white absolute w-full flex items-center justify-center flex-col max-w-3xl h-full top-0 left-1/2 -translate-x-1/2 ">
          <h2 className="text-5xl mb-3 text-center">
            {fetchWord('Winter', lang)}
            <span className="block mt-1">
              {fetchWord('Collection', lang)}
            </span>{' '}
          </h2>
          <button className="text-primary bg-transparent text-2xl">
            {fetchWord('Shop_now', lang)}
          </button>
        </div>
      </div>
    </div>
  );
};
