import React from 'react';
import { EditIcon } from './../Icons/EditIcon';
import { DeleteIcon } from './../Icons/DeleteIcon';

export const AddressCard = ({ address }) => {
  return (
    <div className="bg-bgprimary rounded relative p-4">
      <h4 className="text-primary mb-4">Home Address</h4>
      <div className="absolute right-2 top-4 flex gap-2">
        <button className='scale-90'>
          <EditIcon />
        </button>
        <button className='scale-90'>
          <DeleteIcon />
        </button>
      </div>
      <ul>
        <li>Buyer: {address?.name}</li>
        <li>Country: {address?.country}</li>
        <li>City: {address?.city}</li>
        <li>Street: {address?.street}</li>
      </ul>
    </div>
  );
};
