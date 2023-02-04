import React from 'react';
import { MinusIcon } from './../Icons/MinusIcon';
import { PlusIcon } from './../Icons/PlusIcon';

export const Quantity = ({ increment, decrement, count }) => {
  return (
    <div className="flex gap-1 items-center border-primary border rounded-md w-32 justify-between text-center">
      <button className='flex-1 flex justify-center' onClick={increment}>
        <MinusIcon />
      </button>
      <span className='p-2 border-r border-l border-primary flex-1 text-primary'>{count}</span>
      <button className='flex-1 flex justify-center' onClick={(decrement = {})}>
        <PlusIcon />
      </button>
    </div>
  );
};
