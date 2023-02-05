import { Categories } from '@/data/cardData';
import React from 'react';

export const CategoryList = () => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-4 font-semibold text-xl">Categories</h3>
      <ul className="text-lg flex flex-col gap-2">
        {Categories?.map((category) => (
          <li
            key={category?.slug}
            className="text-tprimary cursor-pointer w-full font-normal"
          >
            {category?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
