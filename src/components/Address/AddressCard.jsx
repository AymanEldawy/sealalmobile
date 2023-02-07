import React, { useContext } from 'react';
import { EditIcon } from './../Icons/EditIcon';
import { DeleteIcon } from './../Icons/DeleteIcon';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const AddressCard = ({ address }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="bg-bgprimary rounded relative p-4">
      <h4 className="text-primary mb-4">{fetchWord('home_address', lang)}</h4>
      <div className="absolute right-2 top-4 flex gap-2">
        <button className="scale-90">
          <EditIcon />
        </button>
        <button className="scale-90">
          <DeleteIcon />
        </button>
      </div>
      <ul>
        <li>
          {fetchWord('Buyer', lang)}: {address?.name}
        </li>
        <li>
          {fetchWord('Country', lang)}: {address?.country}
        </li>
        <li>
          {fetchWord('City', lang)}: {address?.city}
        </li>
        <li>
          {fetchWord('Street', lang)}: {address?.street}
        </li>
      </ul>
    </div>
  );
};
