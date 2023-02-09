import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { SectionTitle } from './../Global/SectionTitle';
import { EasyShippingCartIcon } from './../Icons/EasyShippingCartIcon';
import { FreeShippingIcon } from './../Icons/FreeShippingIcon';
import { HeadPhoneIcon } from './../Icons/HeadPhoneIcon';
import { PaymentIcon } from './../Icons/PaymentIcon';
import { OurFeaturesGrid } from './OurFeaturesGrid';

export const OurFeatures = ({ title, center }) => {
  const { lang } = useContext(LanguageContext);
  const features = [
    {
      icon: <EasyShippingCartIcon />,
      title: fetchWord('Easy_shopping', lang),
      description: fetchWord('Easy_shopping_description', lang),
    },
    {
      icon: <HeadPhoneIcon />,
      title: fetchWord('customer_service', lang),

      description: fetchWord('Customer_service_description', lang),
    },
    {
      icon: <PaymentIcon />,
      title: fetchWord('Easy_Payment', lang),
      description: fetchWord('Easy_Payment_description', lang),
    },
    {
      icon: <FreeShippingIcon width={40} />,
      title: fetchWord('Fast_shopping', lang),
      description: fetchWord('Fast_shopping_description', lang),
    },
  ];
  return (
    <div className="mt-12">
      <div className="container">
        <SectionTitle center={center ? center : null} title={title} />
        <OurFeaturesGrid features={features} />
      </div>
    </div>
  );
};
