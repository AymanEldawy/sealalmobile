import React from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const CategoryFilterPrice = () => {
  return (
    <div className="mb-4 p-4 lg:px-8">
      <h3 className="text-primary mb-2 font-semibold text-xl">Price</h3>
      <div className="flex my-4">
        <input type="range" className="appearance-none h-1 accent-primary w-full text-gray-400" />
        <input type="range" className="appearance-none h-1 accent-primary w-full text-gray-400" />
      </div>
      <div className=" mt-4 flex items-center justify-between">
        <p className="flex gap-1">
          Price:
          <span>200$</span>:<span>400$</span>
        </p>
        <PrimaryButton text="Filter" />
      </div>
    </div>
  );
};
