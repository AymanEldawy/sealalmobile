import Image from 'next/image';
import React from 'react';

export const BrandsGrid = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap justify-around items-center gap-4'>
      {['1', '2', '3', '4', '5']?.map((item, index) => (
        <figure key={index}>
          <Image
            src={`/images/brands/${index + 1}.png`}
            alt={`brand-${index}`}
            height={65}
            width={150}
          />
        </figure>
      ))}
    </div>
  );
};
