import React, { useContext } from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { CartIcon } from './../Icons/CartIcon';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const AddToCardButton = ({ handelClick }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <PrimaryButton
      onClick={(handelClick = {})}
      classes={`flex gap-1 items-center`}
      text={fetchWord('Add_to_Cart', lang)}
      icon={<CartIcon color="white" style={{ transform: 'scale(.7)' }} />}
    />
  );
};
