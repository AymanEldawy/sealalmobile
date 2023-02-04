import React from 'react';
import { products } from '@/data/cardData';
import Image from 'next/image';
export const CategoryMostPopular = () => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-2 font-semibold text-xl">Most Popular</h3>
      <div className="flex flex-wrap gap-4">
        {products?.slice(0, 6).map((product) => (
          <figure
            key={product?.id}
            className="bg-[#D9D9D9] border rounded-full items-center flex justify-center"
          >
            <Image
              src={product?.img}
              alt={product?.title}
              width={70}
              height={70}
              className="rounded-full"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};
