import { products } from '@/data/cardData';
import React from 'react';

import { OrderProductRow } from './OrderProductRow';
import { orders } from '@/data/cardData';

export const TableOrderProducts = () => {
  return (
    <div className=" mt-4 ">
      <div className="bg-primary p-2 px-4 flex items-center">
        <div className="text-lg text-white flex-1">Product</div>
        <div className="text-lg text-white w-1/6">Order Date</div>
        <div className="text-lg text-white w-1/6">Order Summary</div>
        <div className="text-lg text-white w-1/6 text-center">status </div>
        <div className="text-lg text-white w-1/6 text-center">Amount total</div>
      </div>
      <div className="mt-8 max-h-[600px] overflow-y-auto">
        {orders?.map((order) => (
          <OrderProductRow order={order} key={order?.id} />
        ))}
      </div>
    </div>
  );
};
