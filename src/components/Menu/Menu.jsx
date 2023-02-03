import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { UpperMenu } from './UpperMenu/UpperMenu';
import Styles from '@/styles/Menu/Menu.module.css';
import { PrimaryMenu } from './PrimaryMenu/PrimaryMenu';

export async function getStaticProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
}
export const Menu = () => {
  const { t } = useTranslation('common');
  return (
    <nav className={Styles.menu}>
      <UpperMenu />
      <PrimaryMenu />
      {/* UPPER MENU */}
      {/* PRIMARY MENU */}
    </nav>
  );
};
