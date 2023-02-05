import React from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const ApplyCodeForm = () => {
  return (
    <form className="flex gap-3 my-8">
      <input type="text" className="flex-1 border rounded border-primary p-3" />
      <PrimaryButton classes="p-3  w-24" text="Apply" />
    </form>
  );
};
