import { getItemById } from '@/data/cardData';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Quantity } from './../SingleProduct/Quantity';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const CartItemRow = ({ item }) => {
  const product = getItemById(item?.productId);
  const { lang } = useContext(LanguageContext);

  return (
    <div className="p-4 flex items-center border-b">
      <div className="flex-1">
        <div className="flex gap-4">
          <figure>
            <Image
              src={product?.img}
              alt={item?.title}
              height={180}
              width={150}
            />
          </figure>
          <div>
            <h4 className="capitalize text-lg font-medium mb-2">
              {product?.title}
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                {fetchWord('item_code', lang)}: <span>47536</span>
              </li>
              <li>
                {fetchWord('category', lang)}:{' '}
                <span>{product?.category?.name}</span>
              </li>
              <li>
                {fetchWord('size', lang)}: <span>{product?.size} EE</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/5">
        <h4 className="capitalize text-lg font-normal">{item?.price}$</h4>
      </div>
      <div className="w-1/5 ">
        <Quantity
          count={item?.quantity}
          increment={() => increaseQuantity(item?.id)}
          decrement={() => decreaseQuantity(item?.id)}
        />
      </div>
      <div className="w-1/5 flex gap-2 justify-center">
        <h4 className="capitalize text-lg font-normal">
          {item?.price * item?.quantity}$
        </h4>
      </div>
    </div>
  );
};
