import React from 'react';
import { HeartIcon } from './../Icons/HeartIcon';
import { CardWishlist } from './../Card/CardWishlist';
import { CardRate } from './../Card/CardRate';
import { CardPrice } from './../Card/CardPrice';
import { AddToCardButton } from './../Card/AddToCardButton';
import { Quantity } from './Quantity';

export const SingleProductInfo = ({ product }) => {
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
        (8 reviews)
      </div>
      <CardPrice price={product?.price} discount={product?.discount} />
      <p className="my-4">{product?.description}</p>
      <div className="border" />
      <ul className="my-4 font-medium text-sm flex flex-col gap-2">
        <li>Product Code: {product?.code} </li>
        <li>Category: {product?.category?.name}</li>
        <li>Tags: shose, clothes, mens, fashion, black </li>
      </ul>
      <div className="border" />
      <div className="flex gap-4 my-4">
        <Quantity count={1} />
        <AddToCardButton />
      </div>
    </div>
  );
};
