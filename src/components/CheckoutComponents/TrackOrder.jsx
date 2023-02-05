import React from 'react';
import { TrackOrderIcon } from './../Icons/TrackOrderIcon';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import Link from 'next/link';
export const TrackOrder = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto justify-center items-center mb-12">
      <TrackOrderIcon />
      <h3 className="font-medium text-lg">Order #123RGR231567Y Confirmed</h3>
      <Link href="track-order" className=' block w-full max-w-sm'>
        <PrimaryButton
          classes="w-full !p-3"
          text="Track Order"
        />
      </Link>
      <p className="text-xs text-[#9DA3A1]">Generate Receipt</p>
    </div>
  );
};
