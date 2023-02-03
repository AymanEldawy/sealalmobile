import React from 'react';

export const CardPrice = ({ price, discount }) => {
  const _discount = discount ? (price * (100 - discount)) / 100 : 0;
  return (
    <div className="gap-2 flex">
      {discount ? (
        <span className="text-[#A0A0A0]">
          <del className="">{price}$</del>
        </span>
      ) : null}
      <span className='text-lg font-medium'>{_discount ? _discount : price}$</span>
    </div>
  );
};
