import React, { useState } from 'react';

import { MinusIcon } from './../Icons/MinusIcon';
import { PlusIcon } from './../Icons/PlusIcon';

export const Quantity = ({ increment, decrement, count }) => {
  const [quantity, setQuantity] = useState(count || 1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="flex gap-1 items-center border-primary border rounded-md w-32 justify-between text-center">
      <button className="flex-1 flex justify-center" onClick={decreaseQuantity}>
        <MinusIcon />
      </button>
      <span className="p-2 border-r border-l border-primary flex-1 text-primary">
        {quantity}
      </span>
      <button className="flex-1 flex justify-center" onClick={increaseQuantity}>
        <PlusIcon />
      </button>
    </div>
  );
};
