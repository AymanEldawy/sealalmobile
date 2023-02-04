import React from 'react';
import { MasterCardIcon } from './../Icons/MasterCardIcon';
import { SIMIcon } from './../Icons/SIMIcon';

export const PaymentCardVisa = ({ color }) => {
  return (
    <div
      className={`rounded-lg  relative h-36 min-w-[252px] overflow-hidden ${
        color || 'bg-blue-500'
      }`}
    >
      <span className=" rounded-bl-[10rem] bg-black opacity-20 absolute left-[107.12px] top-[-103.96px] w-[264.51px] h-[186.22px]"></span>
      <span className=" rounded-tr-[10rem] bg-black opacity-20 absolute left-[-112.06px] top-[75px] w-[264.51px] h-[186.22px]"></span>
      <div className="p-3 flex-col flex justify-between h-full z-10 relative text-white">
        <div className="flex justify-between  items-center">
          <SIMIcon /> <MasterCardIcon />
        </div>
        <h3 className="text-2xl text-white text-center">•••• •••• •••• •289</h3>
        <div className="flex justify-between z-10 relative items-center">
          <div className="text-sm flex-col flex">
            <span className="text-xs text-gray-200">Card Holder</span>
            <span>Nico Robin</span>
          </div>
          <span>09/25</span>
        </div>
      </div>
    </div>
  );
};
