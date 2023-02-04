import React from 'react';
import Image from 'next/image';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const CategoryBanner = () => {
  return (
    <div className="relative">
      <figure>
        <Image
          className="max-h-[400px] object-cover object-center"
          src="/images/new-collection.jpg"
          alt="Category"
          height={416}
          width={1200}
        />
      </figure>
      <div className="absolute top-1/2 -translate-y-1/2 right-36 flex flex-col gap-4 max-w-xs text-white">
        <h1 className="text-4xl flex flex-col ">
          New
          <span className="text-6xl text-primary font-semibold">
            Collection
          </span>
        </h1>
        <p className="text-[#858585]">
          We really care about you and your website as much as you do.Porto or
          any other
        </p>
        <PrimaryButton text="Show now" />
      </div>
    </div>
  );
};
