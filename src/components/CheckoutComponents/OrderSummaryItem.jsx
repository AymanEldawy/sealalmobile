import React from 'react';
import Image from 'next/image';

export const OrderSummaryItem = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <figure>
          <Image
            className="object-contain"
            src="/images/items/image 2.png"
            alt="Item"
            width="60"
            height="80"
          />
        </figure>
        <div className="">
          <h4 className="font-medium text-lg">Product Name</h4>
          <p className="text-[#ACACAC] text-sm">Brown Vegan Leather</p>
        </div>
      </div>
      <h3 className="font-medium text-lg">$49.80</h3>
    </div>
  );
};
