import React from 'react';

export const Subscription = () => {
  return (
    <div className="p-4">
      <h4 className="text-lg text-primary font-medium mb-4">Be in touch</h4>
      <input type="email" placeholder="enter your email" className='p-4 rounded-md'/>
      <button className='mt-4 h-[40px] w-[112px] rounded-md border-2 border-black text-black font-semibold'>Subscribe</button>
    </div>
  );
};
