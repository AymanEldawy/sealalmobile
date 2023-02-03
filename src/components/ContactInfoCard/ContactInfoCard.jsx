import React from 'react';

export const ContactInfoCard = ({ info }) => {
  return (
    <div className="shadow p-4 rounded-lg bg-white flex-col flex gap-3 my-8 max-w-[250px] items-center justify-center">
      <span className='scale-150'>{info?.icon}</span>
      <h4 className="font-semibold mt-2">{info?.title}</h4>
      <p className='text-secondary text-center'>{info?.text}</p>
    </div>
  );
};
