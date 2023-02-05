import React from 'react';

import { CartItemRow } from './CartItemRow';

export const TableCart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="mb-8">
      <div className="bg-primary p-2 px-4 flex items-center">
        <div className="text-lg text-white flex-1">Product</div>
        <div className="text-lg text-white w-1/5">Price</div>
        <div className="text-lg text-white w-1/5">Quantity</div>
        <div className="text-lg text-white w-1/5 text-center">Subtotal </div>
      </div>
      <div className="mt-8">
        {cart?.map((item) => (
          <CartItemRow
            item={item}
            key={item?.id}
          />
        ))}
      </div>
    </div>
  );
};
