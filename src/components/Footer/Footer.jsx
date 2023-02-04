import React from 'react';

import { ContactInfo } from './ContactInfo';
import { CustomerService } from './CustomerService';
import { OrganizationInfo } from './OrganizationInfo';
import { Subscription } from './Subscription';

export const Footer = () => {
  return (
    <footer className="bg-bgprimary min-h-[432px] flex flex-col items-center">
      <div className="container flex flex-col">
        {/* <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 !lg:flex flex flex-wrap !lg:flex-nowrap pt-16 lg:justify-between"> */}
        <div className="flex  pt-16 lg:justify-between">
          <OrganizationInfo />
          <ContactInfo />
          <CustomerService title="CUSTOMER SERVICE" />
          <CustomerService title="Company" />
          <Subscription />
        </div>
      </div>
      <p className="text-center border-t-2 w-full border-[#3A3A3A1A] py-3 text-sm mt-auto">
        © 2022 website name. All rights reserved.
      </p>
    </footer>
  );
};
