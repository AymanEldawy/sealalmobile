import React from 'react';

import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { SectionTitle } from './../Global/SectionTitle';
import { MapIcon } from './../Icons/MapIcon';

export const CartTotal = ({ cart }) => {
  const cartTotal = cart.reduce((result, cur) => {
    return (result += cur?.price * cur?.quantity);
  }, 0);
  return (
    <div className="border-[#BFBFBF] border bg-white p-4 lg:p-8 rounded-lg my-6">
      <SectionTitle title="Cart Totals" />
      <div className="flex justify-between flex-wrap gap-8">
        <div className="flex gap-3">
          <MapIcon color="var(--primary-color)" />
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className="text-lg font-medium">Shipping to</h3>
            <p className="text-secondary">
              It is a long established fact that a reader will be using Lorem
              Ipsu distracted by the readable content{' '}
            </p>
            <button className="w-40 inline-block text-center border border-primary rounded-md p-3 text-primary">
              Change
            </button>
          </div>
        </div>
        <div className="min-w-[200px] lg:min-w-[300px]">
          <ul className="flex flex-col gap-2 text-center">
            <li className="text-md font-medium">
              Subtotal: <span className="mx-5">{cartTotal}$</span>
            </li>
            <li className="text-md font-medium">
              Shipping: <span className="mx-5">45$</span>
            </li>
            <div className="border border-black opacity-75" />
            <li className="text-md font-medium">
              Amount: <span className="mx-5">{cartTotal + 45}$</span>{' '}
            </li>
          </ul>
          <PrimaryButton
            text="Checkout"
            classes="!py-2 mt-4 w-full max-w-xs rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
