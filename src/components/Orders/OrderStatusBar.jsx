import React from 'react';

export const OrderStatusBar = ({ status, method }) => {
  const statusContent = (status) => {
    switch (status) {
      case 'Completed':
        return 1;
      case 'Delivered':
        return 2;
      case 'Pending':
        return 3;
      case 'Canceled':
        return 0;
    }
  };
  return (
    <div className="flex items-center">
      <div className=" border-b-4 font-medium text-lg text-primary pb-2 flex-1 text-center border-primary ">
        Completed
      </div>
      <div className=" border-b-2 font-medium text-lg text-[#989898] border-[#A3A3A3] pb-2 flex-1 text-center  ">
        Delivered
      </div>
      <div className=" border-b-2 font-medium text-lg text-[#989898] border-[#A3A3A3] pb-2 flex-1 text-center  ">
        Pending
      </div>
      <div className=" border-b-2 font-medium text-lg text-[#989898] border-[#A3A3A3] pb-2 flex-1 text-center  ">
        Canceled
      </div>
    </div>
  );
};
