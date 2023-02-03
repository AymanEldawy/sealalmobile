import React from 'react';
import Styles from '@/styles/Menu/Menu.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { FreeShippingIcon } from './../../Icons/FreeShippingIcon';
import { GetUpIcon } from './../../Icons/GetUpIcon';
import { WalletIcon } from './../../Icons/WalletIcon';
import { SmartPhoneIcon } from './../../Icons/SmartPhoneIcon';
import { CallIcon } from './../../Icons/CallIcon';
export async function getServerSideProps({ locale }) {
  return {
    props: { ...(await serverSideTranslations(locale, ['common'])) },
  };
}
export const UpperMenu = () => {
  const { t } = useTranslation('common');

  return (
    <div className="bg-primary h-[53px] text-white">
      <div className="container items-center flex justify-between h-full">
        <div className="flex items-center gap-2">
          <FreeShippingIcon />
          {t('upper_menu_free_shipping')}
        </div>
        <div className="flex items-center gap-2">
          <GetUpIcon />
          {t('upper_menu_get_up')}
        </div>
        <div className="flex items-center gap-2">
          <WalletIcon />
          {t('upper_menu_payment_options')}
        </div>
        <div className="flex items-center gap-2">
          <SmartPhoneIcon />
          {t('upper_menu_download')}
        </div>
        <div className="flex items-center gap-2">
          <CallIcon />
          {t('upper_menu_call_us')}
        </div>
      </div>
    </div>
  );
};
