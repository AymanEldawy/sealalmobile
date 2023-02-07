import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext } from 'react';

import { CardRate } from './../Card/CardRate';
import { CheckIcon } from './../Icons/CheckIcon';
import { LanguageContext } from './../../context/LangContext';

export const ReviewCard = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="border-b p-4 py-8 flex gap-4 lg:gap-x-6 overflow-hidden">
      <figure>
        <Image
          src={'/images/home/person.png'}
          alt="Buyer name"
          height={71}
          width={71}
          className="rounded-full"
        />
      </figure>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-medium">Buyer Name</h4>
        <CardRate rating={4} />
        <p>
          {new Date().toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </p>
      </div>
      <div className="w-[2px] h-[80px] bg-bgprimary" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <span className="scale-[60%] bg-primary h-7 w-7 rounded-full flex items-center justify-center">
            <CheckIcon />
          </span>
          <span className="text-[#BDBDBD]">
            {fetchWord('confirmed_order', lang)}
          </span>
        </div>
        <p className="text-secondary">
          It is a long established fact that a reader will be using Lorem Ipsu
          distracted by the readable content
        </p>
      </div>
    </div>
  );
};
