import React from 'react';

export const FAQCard = ({ question }) => {
  return (
    <div className='flex flex-col gap-4 items-start'>
      <span className='p-4 bg-bgprimary rounded-full'>{question?.icon}</span>
      <h3 className='text-lg text-primary'>{question?.question}</h3>
      <p className='text-tprimary text-xs'>{question?.answer}</p>
    </div>
  );
};
