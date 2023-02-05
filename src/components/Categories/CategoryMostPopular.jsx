import { products } from '@/data/cardData';
import Image from 'next/image';
import React from 'react';

export const CategoryMostPopular = () => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-6 font-semibold text-xl">Most Popular</h3>
      <div className="grid grid-cols-3 gap-4 justify-between">
        {products?.slice(0, 6).map((product) => (
          <figure
            key={product?.id}
            className="border-none rounded-full items-center flex justify-center"
          >
            <Image
              src={product?.img}
              alt={product?.title}
              width={80}
              height={80}
              className="rounded-full bg-[#D9D9D9]"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};
