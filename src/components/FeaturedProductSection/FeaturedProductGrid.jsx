import React from 'react';

import { Card } from './../Card/Card';

export const FeaturedProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products?.slice(0, 4).map((product) => (
        <Card key={product?.id} item={product} />
      ))}
    </div>
  );
};
