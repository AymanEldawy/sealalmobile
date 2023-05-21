import React, { useContext } from 'react';
import { fetchWord } from '@/lang/fetchWord';
import { DeleteIcon, EditIcon } from '@/components/Icons';
import { LanguageContext } from '@/context/LangContext';

export const AddressCard = ({ address }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="border-[#ECECEC] border rounded relative p-4">
      <h4 className="text-secondary font-semibold capitalize mb-4">{fetchWord('home_address', lang)}</h4>
      <div className="absolute right-2 top-4 flex gap-2">
        <button className="scale-90">
          <EditIcon className="text-primary h-6 w-6" />
        </button>
        <button className="scale-90">
          <DeleteIcon className="text-primary h-6 w-6" />
        </button>
      </div>
      <ul>
        <li className='flex items-center flex-wrap gap-2'>
          <span className='min-w-[120px] font-medium text-black capitalize'>{fetchWord('Buyer', lang)}:</span> {address?.name}
        </li>
        <li className='flex items-center flex-wrap gap-2'>
          <span className='min-w-[120px] font-medium text-black capitalize'>{fetchWord('country', lang)}:</span> {address?.country}
        </li>
        <li className='flex items-center flex-wrap gap-2'>
          <span className='min-w-[120px] font-medium text-black capitalize'>{fetchWord('city', lang)}:</span> {address?.city}
        </li>
        <li className='flex items-center flex-wrap gap-2'>
          <span className='min-w-[120px] font-medium text-black capitalize'>{fetchWord('street', lang)}:</span> {address?.street}
        </li>
        <li className='flex items-center flex-wrap gap-2'>
          <span className='min-w-[120px] font-medium text-black capitalize'>{fetchWord('home_number', lang)}:</span> {address?.street}
        </li>
      </ul>
    </div>
  );
};
