import React, { useContext } from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const ApplyCodeForm = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className="flex gap-3 my-8">
      <input type="text" className="flex-1 border rounded border-primary p-3" />
      <PrimaryButton classes="p-3  w-24" text={fetchWord('Apply', lang)} />
    </form>
  );
};
