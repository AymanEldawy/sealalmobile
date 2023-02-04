import React from 'react';

import { OrderItem } from './OrderItem';

export const OrderProductRow = ({ order }) => {
  return (
    <div className="p-2 px-4 gap-4 flex items-center bg-bgprimary mb-4 rounded relative min-h-[140px]">
      <div className="flex-1">
        <div className="flex flex-col gap-4 items-center">
          {order?.items?.map((item) => (
            <OrderItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-1/6">
        <h4 className="capitalize font-normal text-md">
          {new Date(order?.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </h4>
      </div>
      <div className="w-1/6 ">
        <h4 className="capitalize text-lg font-medium text-center">
          {order?.items?.length}
        </h4>
      </div>
      <div className="w-1/6 flex gap-2 justify-end">
        <h4 className="capitalize text-lg font-medium  text-green-500">
          {order?.status}
        </h4>
      </div>
      <div className="w-1/6 flex gap-2 justify-end">
        <h4 className="capitalize text-lg font-medium ">{order?.total}$</h4>
      </div>
      <button className="border-primary border-2 absolute bottom-2 right-2 py-1 px-2 rounded-md text-primary font-medium text-sm">
        More Details
      </button>
    </div>
  );
};
