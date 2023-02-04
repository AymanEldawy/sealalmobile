import React from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { OrdersEmptyIcon } from './../Icons/OrdersEmptyIcon';

export const OrdersEmpty = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto w-fit gap-4 p-6'>
      <OrdersEmptyIcon />
      <h3 className="text-2xl my-4  text-primary font-semibold text-center">No order yet</h3>
      <PrimaryButton classes=" w-96 !p-3" text="Shop now" />
    </div>
  );
};
