import React from 'react';
import { products } from '@/data/cardData';
import { ProductItemRow } from './ProductItemRow';

export const TableProducts = () => {
  return (
    <div className='mb-8'>
      <div className="bg-primary p-2 px-4 flex items-center">
        <div className="text-lg text-white flex-1">Product</div>
        <div className="text-lg text-white w-1/5">Price</div>
        <div className="text-lg text-white w-1/5">Stock Status</div>
        <div className="text-lg text-white w-1/5 text-center">Actions </div>
      </div>
      <div className="mt-8">
        {products?.map((product) => (
          <ProductItemRow product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};
