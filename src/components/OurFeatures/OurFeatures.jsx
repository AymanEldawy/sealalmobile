import React, { useContext } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { OurFeaturesGrid } from './OurFeaturesGrid';
import { EasyShippingCartIcon } from './../Icons/EasyShippingCartIcon';
import { HeadPhoneIcon } from './../Icons/HeadPhoneIcon';
import { PaymentIcon } from './../Icons/PaymentIcon';
import { FreeShippingIcon } from './../Icons/FreeShippingIcon';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

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
      title: fetchWord('Customer_service', lang),

      description: fetchWord('Customer_service_description', lang),
    },
    {
      icon: <PaymentIcon />,
      title: fetchWord('Easy_Payment', lang),
      description: fetchWord('Easy_shopping_description', lang),
    },
    {
      icon: <FreeShippingIcon width={40} />,
      title: fetchWord('Fast_shopping', lang),
      description: fetchWord('Easy_shopping_description', lang),
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
