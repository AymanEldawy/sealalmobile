import React from 'react';
import { MapIcon } from './../Icons/MapIcon';
import { CallIcon } from './../Icons/CallIcon';
import { MessageIcon } from './../Icons/MessageIcon';

export const ContactInfo = () => {
  return (
    <div className="p-4">
      <h4 className='text-lg text-primary font-medium mb-4'>Contact us</h4>
      <ul className='flex flex-col gap-5'>
        <li className='flex gap-1'>
          <MapIcon />
          <span className=''>123 Street Name, City, country</span>
        </li>
        <li className='flex gap-1'>
          <CallIcon color="#292D32" />
          <span>0123456789</span>
        </li>
        <li className='flex gap-1'>
          <MessageIcon />
          <span>example@example.com</span>
        </li>
      </ul>
    </div>
  );
};
