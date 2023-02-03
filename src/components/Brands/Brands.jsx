import React from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { BrandsGrid } from './BrandsGrid';

export const Brands = () => {
  return (
    <div className="mt-12">
      <div className="container">
        <SectionTitle title="Brands" center />
        <BrandsGrid />
      </div>
    </div>
  );
};
