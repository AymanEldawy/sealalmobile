import React, { useContext } from 'react';
import Link from 'next/link';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../../context/LangContext';

export const NavbarMenuLinks = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <ul className="flex items-center gap-4 mx-8">
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/">{fetchWord('menu_home_link', lang)}</Link>
      </li>
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/categories">
          {fetchWord('menu_categories_link', lang)}
        </Link>
      </li>
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/about">{fetchWord('menu_about_link', lang)}</Link>
      </li>
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/contact">{fetchWord('menu_contact_link', lang)}</Link>
      </li>
    </ul>
  );
};
