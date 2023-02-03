import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export async function getStaticProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, ['home'])) },
  };
}

export const BannerInfo = () => {
  const { t } = useTranslation('home');
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  text-center">
      <h1 className="text-6xl text-center mb-4 flex flex-col gap-2">
        <span className="text-5xl font-normal">{t('home_flash_sale')}</span>
        <span className=" text-primary font-semibold">{t('home_flash_get_up')}</span>
      </h1>
      <PrimaryButton classes="w-32 h-10" text={t('shop_now')} />
    </div>  
  );
};
