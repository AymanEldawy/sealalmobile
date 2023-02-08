import React from 'react';

export const CategoryFilterSizes = ({ title }) => {
  return (
    <div className=" p-4 lg:px-8">
      <h3 className="text-primary mb-6 font-semibold text-xl">{title}</h3>
      <div className="flex gap-2">
        <span className="flex items-center justify-center p-2 text-base font-normal  rounded-full h-10 w-10 border border-black ">
          S
        </span>
        <span className="flex items-center justify-center p-2 text-base font-normal  rounded-full h-10 w-10 border border-black ">
          M
        </span>
        <span className="flex items-center justify-center p-2 text-base font-normal  rounded-full h-10 w-10 border border-black ">
          L
        </span>
        <span className="flex items-center justify-center p-2 text-base font-normal  rounded-full h-10 w-10 border border-black ">
          XL
        </span>
        <span className="flex items-center justify-center p-2 text-base font-normal  rounded-full h-10 w-10 border border-black ">
          XXL
        </span>
      </div>
    </div>
  );
};
