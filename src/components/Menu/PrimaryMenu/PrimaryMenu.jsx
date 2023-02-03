import React from 'react';
import { Brand } from '../../Global/Brand';
import { NavbarMenuLinks } from './NavbarMenuLinks';
import { MainIconsList } from './MainIconsList';
import { PrimaryButton } from './../../Global/PrimaryButton/PrimaryButton';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export async function getStaticProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
}
export const PrimaryMenu = () => {
  const { t } = useTranslation('common');
  return (
    <nav className="h-[60px]">
      <div className="container h-full flex items-center justify-between py-2">
        <div className="flex items-center flex-1">
          <Brand />
          <NavbarMenuLinks />
          <div className="divider-vertical" />
        </div>
        <div className="ml-auto flex flex-1 justify-end">
          <MainIconsList />
          <PrimaryButton text={t('login')} />
        </div>
      </div>
    </nav>
  );
};
