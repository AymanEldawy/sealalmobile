import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { AddToCardButton } from './../Card/AddToCardButton';
import { CardPrice } from './../Card/CardPrice';
import { CardRate } from './../Card/CardRate';
import { CardWishlist } from './../Card/CardWishlist';
import { HeartIcon } from './../Icons/HeartIcon';
import { Quantity } from './Quantity';

export const SingleProductInfo = ({ product }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex-1 px-4">
      <div className="flex relative items-center mb-4">
        <h2 className="text-2xl capitalize">{product?.title}</h2>
        <CardWishlist />
      </div>
      <div className="flex gap-3 relative items-center mb-4">
        <span className="border-b-2 pb-1">
          <CardRate rating={product?.rating} width={25} />
        </span>
        (8 {fetchWord('reviews', lang)})
      </div>
      <CardPrice price={product?.price} discount={product?.discount} />
      <p className="my-4">{product?.description}</p>
      <div className="border" />
      <ul className="my-4 font-medium text-sm flex flex-col gap-2">
        <li>
          {fetchWord('product_code', lang)}: {product?.code}{' '}
        </li>
        <li>
          {fetchWord('category', lang)}: {product?.category?.name}
        </li>
        <li>
          {fetchWord('tags', lang)}: shose, clothes, mens, fashion, black{' '}
        </li>
      </ul>
      <div className="border" />
      <div className="flex gap-4 my-4">
        <Quantity count={1} />
        <AddToCardButton />
      </div>
    </div>
  );
};
