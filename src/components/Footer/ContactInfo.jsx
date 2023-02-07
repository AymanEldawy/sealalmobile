import React from 'react';

import { CallIcon } from './../Icons/CallIcon';
import { MapIcon } from './../Icons/MapIcon';
import { MessageIcon } from './../Icons/MessageIcon';

export const ContactInfo = ({ contactText, address }) => {
  return (
    <div className="p-4 w-64">
      <h4 className="text-lg text-primary font-medium mb-4">{contactText}</h4>
      <ul className="flex flex-col gap-5">
        <li className="flex gap-1">
          <span className="w-6">
            <MapIcon />
          </span>
          <span className="whitespace-nowrap text-md">{address}</span>
        </li>
        <li className="flex gap-1">
          <CallIcon color="#292D32" />
          <span>0123456789</span>
        </li>
        <li className="flex gap-1">
          <MessageIcon />
          <span>example@example.com</span>
        </li>
      </ul>
    </div>
  );
};
