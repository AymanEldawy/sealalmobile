import React from 'react';

export const OfferSection = () => {
  // Get 50% off on your firist Purchase with
  // Code: Code123
  // Applicable to orders of 60$ or more - max 50$ off
  return (
    <div className="bg-bgprimary flex flex-col items-center p-4">
      <div className="flex gap-2 items-center mb-2">
        <h4 className='font-medium '>Get 50% off on your first Purchase with</h4>
        <span className='bg-white text-primary p-1'>Code: Code123</span>
      </div>
      <p className='text-sm'>Applicable to orders of 60$ or more - max 50$ off</p>
    </div>
  );
};
