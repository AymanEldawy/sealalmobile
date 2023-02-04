import React from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { CartIcon } from './../Icons/CartIcon';

export const AddToCardButton = ({ handelClick }) => {
  return (
    <PrimaryButton
      onClick={(handelClick = {})}
      classes={`flex gap-1 items-center`}
      text="Add to Cart"
      icon={<CartIcon color="white" style={{ transform: 'scale(.7)' }} />}
    />
  );
};
