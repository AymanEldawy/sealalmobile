import React, { useContext } from 'react';
import { Brand } from '../../Global/Brand';
import { NavbarMenuLinks } from './NavbarMenuLinks';
import { MainIconsList } from './MainIconsList';
import { PrimaryButton } from './../../Global/PrimaryButton/PrimaryButton';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../../context/LangContext';

export const PrimaryMenu = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  return (
    <nav className="h-[60px]">
      <div className="container h-full flex items-center justify-between py-2">
        <div className="flex items-center flex-1">
          <Brand />
          <NavbarMenuLinks />
          <div className="divider-vertical" />
        </div>
        <div className="ml-auto rtl:mr-auto flex flex-1 justify-end">
          <MainIconsList />
          <PrimaryButton
            text={fetchWord('login', lang)}
            onClick={() => router.push('/login')}
          />
        </div>
      </div>
    </nav>
  );
};
