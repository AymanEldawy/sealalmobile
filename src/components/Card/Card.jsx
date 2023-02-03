import React from 'react';
import { CardSale } from './CardSale';
import { CardWishlist } from './CardWishlist';
import { CardImg } from './CardImg';
import { CardRate } from './CardRate';
import { CardInfo } from './CardInfo';
import { CardPrice } from './CardPrice';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { CartIcon } from './../Icons/CartIcon';

// sale
export const Card = ({ item }) => {
  return (
    <div className="bg-bgprimary h-[456px] w-[288px] relative">
      <CardSale sale="sale" />
      <CardWishlist inWishlist={item?.inWishlist} />
      <CardImg src={item?.img} alt={item?.title} />
      <div className="flex flex-col justify-center items-center gap-2">
        <CardInfo title={item?.title} category={item?.category?.name} />
        <CardRate rating={item?.rating} />
        <CardPrice price={item?.price} discount={item?.discount} />
        <PrimaryButton
          classes="flex gap-1 items-center"
          text="Add to Cart"
          icon={<CartIcon color="white" style={{ transform: 'scale(.7)' }} />}
        />
      </div>
      {/* category */}
      {/* title */}
      {/* rate */}
      {/* price */}
      {/* add to cart */}
    </div>
  );
};
