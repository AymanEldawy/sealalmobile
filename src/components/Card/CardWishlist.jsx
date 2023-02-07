import React, { useState } from 'react';
import { HeartIcon } from './../Icons/HeartIcon';

export const CardWishlist = () => {
  const [inWishlist, setInWishlist] = useState(false);
  return (
    <button
      className="absolute right-4 top-4 rtl:left-4 rtl:right-auto"
      onClick={() => setInWishlist(!inWishlist)}
    >
      <HeartIcon color={inWishlist ? '#f00' : ''} />
    </button>
  );
};
