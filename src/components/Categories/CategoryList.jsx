import React from 'react';
import { Categories } from '@/data/cardData';
export const CategoryList = () => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-2 font-semibold text-xl">Categories</h3>
      <ul className="text-lg flex flex-col gap-2">
        {Categories?.map((category) => (
          <li
            key={category?.slug}
            className="text-tprimary cursor-pointer w-full font-medium"
          >
            {category?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
