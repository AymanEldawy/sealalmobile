import React from 'react';

export const CategoryFilterSizes = () => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-2 font-semibold text-xl">Sizes</h3>
      <div className="flex gap-2">
        <span className="flex items-center justify-center p-2 text-sm  rounded-full h-8 w-8 border border-secondary ">
          S
        </span>
        <span className="flex items-center justify-center p-2 text-sm  rounded-full h-8 w-8 border border-secondary ">
          M
        </span>
        <span className="flex items-center justify-center p-2 text-sm  rounded-full h-8 w-8 border border-secondary ">
          L
        </span>
        <span className="flex items-center justify-center p-2 text-sm  rounded-full h-8 w-8 border border-secondary ">
          XL
        </span>
        <span className="flex items-center justify-center p-2 text-sm  rounded-full h-8 w-8 border border-secondary ">
          XXL
        </span>
      </div>
    </div>
  );
};
