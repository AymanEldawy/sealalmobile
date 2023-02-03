import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps ({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
}
export const NavbarMenuLinks = () => {
  const { t } = useTranslation('common');
  return (
    <ul className="flex items-center gap-4 mx-8">
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/">{t('menu_home_link')}</Link>
      </li>
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/categories">{t('menu_categories_link')}</Link>
      </li>
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/about">{t('menu_about_link')}</Link>
      </li>
      <li className="font-medium text-lg text-secondary hover:text-primary">
        <Link href="/contact">{t('menu_contact_link')}</Link>
      </li>
    </ul>
  );
};
