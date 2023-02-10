import { fetchWord } from '@/lang/fetchWord';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

import { Brand } from '../../Global/Brand';
import { LanguageContext } from './../../../context/LangContext';
import { PrimaryButton } from './../../Global/PrimaryButton/PrimaryButton';
import { MainIconsList } from './MainIconsList';
import { NavbarMenuLinks } from './NavbarMenuLinks';

export const PrimaryMenu = ({ setOpenedSearch }) => {
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
        <div className="ml-auto rtl:mr-auto flex justify-end">
          <MainIconsList setOpenedSearch={setOpenedSearch} />
          <PrimaryButton
            text={fetchWord('login', lang)}
            onClick={() => router.push('/login')}
          />
        </div>
      </div>
    </nav>
  );
};
