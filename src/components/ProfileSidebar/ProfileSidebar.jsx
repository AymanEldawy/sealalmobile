import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { ChevronIcon } from './../Icons/ChevronIcon';

export const ProfileSidebar = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  console.log(router);
  const links = [
    { name: fetchWord('profile', lang), path: '/profile' },
    { name: fetchWord('my_orders', lang), path: '/orders' },
    { name: fetchWord('addresses', lang), path: '/addresses' },
    { name: fetchWord('saved_cards', lang), path: '/saved-cards' },
  ];
  return (
    <aside className="sm:w-[250px] md:w-[361px] bg-bgprimary py-8">
      <div className="px-4 md:px-8">
        <h4 className="font-medium text-lg">User name</h4>
        <p className="text-secondary text-sm font-medium">Email@email,com</p>
      </div>
      <ul className="mt-4">
        {links?.map((link) => (
          <li
            key={link?.name}
            className={`${
              router.pathname == link?.path
                ? '-mt-[1px] bg-primary text-white'
                : ''
            } px-4 md:px-8 font-medium`}
          >
            <Link
              href={link?.path}
              className="border-b border-primary block py-3"
            >
              {link?.name}
            </Link>
          </li>
        ))}
        <li className="px-4 md:px-8 font-medium">
          <button className="border-b border-primary py-3 w-full flex gap-4 items-center">
            {fetchWord('languages', lang)}
            <span className="scale-75 -rotate-90 mt-2">
              <ChevronIcon />
            </span>
          </button>
        </li>
      </ul>
      <button className="text-secondary text-md px-4 md:px-8 mt-4 font-medium">
        {fetchWord('sign_out', lang)}
      </button>
    </aside>
  );
};
