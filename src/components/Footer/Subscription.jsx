import React from 'react';

export const Subscription = ({ beInTouchText, subscribe, emailText }) => {
  return (
    <div className="p-4 w-36">
      <h4 className="text-lg text-primary font-medium mb-4">{beInTouchText}</h4>
      <input type="email" placeholder={emailText} className="p-4 rounded-md" />
      <button className="mt-4 h-[40px] w-[112px] rounded-md border-2 border-black text-black font-semibold">
        {subscribe}
      </button>
    </div>
  );
};
