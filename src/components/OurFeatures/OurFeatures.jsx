import React from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { OurFeaturesGrid } from './OurFeaturesGrid';
import { EasyShippingCartIcon } from './../Icons/EasyShippingCartIcon';
import { HeadPhoneIcon } from './../Icons/HeadPhoneIcon';
import { PaymentIcon } from './../Icons/PaymentIcon';
import { FreeShippingIcon } from './../Icons/FreeShippingIcon';

export const OurFeatures = ({ title, center }) => {
  const features = [
    {
      icon: <EasyShippingCartIcon />,
      title: 'Easy shopping',
      description:
        'We really care about you and your website as much as you do.Porto or any other',
    },
    {
      icon: <HeadPhoneIcon />,
      title: 'Customer service',
      description:
        'We really care about you and your website as much as you do.Porto or any other',
    },
    {
      icon: <PaymentIcon />,
      title: 'Easy Payment',
      description:
        'We really care about you and your website as much as you do.Porto or any other',
    },
    {
      icon: <FreeShippingIcon width={40} />,
      title: 'Fast shopping',
      description:
        'We really care about you and your website as much as you do.Porto or any other',
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
