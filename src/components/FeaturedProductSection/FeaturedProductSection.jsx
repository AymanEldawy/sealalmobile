import React from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { FeaturedProductGrid } from './FeaturedProductGrid';

export const FeaturedProductSection = ({ title, products }) => {
  return (
    <div className="mt-12">
      <div className="container">
        <SectionTitle title={title} />
        <FeaturedProductGrid products={products} />
      </div>
    </div>
  );
};
