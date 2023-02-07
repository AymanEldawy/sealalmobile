import React, { useContext } from 'react';

import { CartItemRow } from './CartItemRow';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const TableCart = ({ cart, increaseQuantity, decreaseQuantity }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mb-8">
      <div className="bg-primary p-2 px-4 flex items-center">
        <div className="text-lg text-white flex-1">
          {fetchWord('product', lang)}
        </div>
        <div className="text-lg text-white w-1/5">
          {fetchWord('price', lang)}
        </div>
        <div className="text-lg text-white w-1/5">
          {fetchWord('quantity', lang)}
        </div>
        <div className="text-lg text-white w-1/5 text-center">
          {fetchWord('subtotal', lang)}{' '}
        </div>
      </div>
      <div className="mt-8">
        {cart?.map((item) => (
          <CartItemRow item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};
