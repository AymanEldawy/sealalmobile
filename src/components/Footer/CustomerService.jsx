import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const CustomerService = ({ title }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="p-4 w-52">
      <h4 className="text-lg text-primary font-medium mb-4 whitespace-nowrap">
        {title}
      </h4>
      <ul className="flex flex-col gap-5">
        <li className="flex gap-1 ">
          <Link href="" className="whitespace-nowrap">
            {fetchWord('help_faqs', lang)}
          </Link>
        </li>
        <li className="flex gap-1 ">
          <Link href="" className="whitespace-nowrap">
            {fetchWord('order_tracking', lang)}
          </Link>
        </li>
        <li className="flex gap-1 ">
          <Link href="" className="whitespace-nowrap">
            {fetchWord('sitemap', lang)}
          </Link>
        </li>
      </ul>
    </div>
  );
};
