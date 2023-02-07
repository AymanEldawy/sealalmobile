import React from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { BrandsGrid } from './BrandsGrid';

export const Brands = ({ title }) => {
  return (
    <div className="mt-12">
      <div className="container">
        <SectionTitle title={title} center />
        <BrandsGrid />
      </div>
    </div>
  );
};
