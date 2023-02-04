import React from 'react';
import { CheckIcon } from './../Icons/CheckIcon';

export const CategoryColorsFilter = () => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-2 font-semibold text-xl">Colors</h3>
      <div className="flex gap-2">
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-green-500">
          <CheckIcon />
        </span>
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-blue-500"></span>
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-red-500"></span>
        <span className="flex items-center justify-center rounded-full h-8 w-8 bg-orange-500"></span>
      </div>
    </div>
  );
};
