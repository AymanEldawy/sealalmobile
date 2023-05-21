import { SIMIcon } from '@/components/Icons';
import React from 'react';

export const PaymentCardVisa = ({ color }) => {
  return (
    <div
      className={`rounded-xl p-2  relative h-44 max-w-[333px]  overflow-hidden ${color || 'bg-blue-500'
        }`}
    >
      <span className=" rounded-bl-[10rem] bg-transparent border-2 border-white opacity-20 absolute left-[107.12px] top-[-103.96px] w-[264.51px] h-[186.22px]"></span>
      <span className=" rounded-tr-[10rem] bg-transparent border-2 border-white opacity-20 absolute left-[-112.06px] top-[75px] w-[264.51px] h-[186.22px]"></span>
      <div className="p-3 flex-col flex justify-between h-full z-10 relative text-white">
        <div className="flex justify-between  items-center">
          <SIMIcon />
        </div>
        <div className="flex justify-between z-10 relative items-center">
          <div className="text-sm flex-col flex">
            <span className="text-lg font-medium text-[#DCD6EA]">Card Holder</span>
            <span>4343 4334 4343 ****</span>
          </div>
          <div className='flex'>
            <span className='opacity-50 ltr:-mr-4 rtl:-ml-4 h-10 w-10 rounded-full bg-white'></span>
            <span className='opacity-50 h-10 w-10 rounded-full bg-white'></span>
          </div>
        </div>
      </div>
    </div>
  );
};
