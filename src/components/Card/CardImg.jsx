import React from 'react';
import Image from 'next/image';

export const CardImg = ({ src, alt = 'alt' }) => {
  return (
    <figure className="w-[300] flex items-center justify-center">
      <Image src={src} alt={alt} height={300} width={288} />
    </figure>
  );
};
