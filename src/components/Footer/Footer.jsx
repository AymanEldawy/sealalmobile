import React, { useContext } from 'react';

import { ContactInfo } from './ContactInfo';
import { CustomerService } from './CustomerService';
import { OrganizationInfo } from './OrganizationInfo';
import { Subscription } from './Subscription';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const Footer = () => {
  const { lang } = useContext(LanguageContext);
  console.log('fo', lang);
  return (
    <footer className="bg-bgprimary min-h-[432px] flex flex-col items-center">
      <div className="container flex flex-col">
        {/* <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 !lg:flex flex flex-wrap !lg:flex-nowrap pt-16 lg:justify-between"> */}
        <div className="flex  pt-16 lg:justify-between">
          <OrganizationInfo
            description={fetchWord('footer_description', lang)}
          />
          <ContactInfo
            contactText={fetchWord('menu_contact_link', lang)}
            address={fetchWord('address', lang)}
          />
          <CustomerService title={fetchWord('customer_service', lang)} />
          <CustomerService title={fetchWord('company', lang)} />
          <Subscription
            beInTouchText={fetchWord('be_in_touch', lang)}
            subscribe={fetchWord('subscribe', lang)}
            emailText={fetchWord('email_place_holder', lang)}
          />
        </div>
      </div>
      <p className="text-center border-t-2 w-full border-[#3A3A3A1A] py-3 text-sm mt-auto">
        {fetchWord('copyright', lang)}
      </p>
    </footer>
  );
};
