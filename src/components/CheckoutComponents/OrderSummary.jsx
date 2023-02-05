import React from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { OrderSummaryItem } from './OrderSummaryItem';
import { ApplyCodeForm } from './ApplyCodeForm';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const OrderSummary = ({ nextStageHandler }) => {
  return (
    <div className="flex-1 bg-bgprimary p-4 lg:px-8 pt-6">
      <SectionTitle title="Order summery" />
      <OrderSummaryItem />
      <div className="my-4 border border-[#ACACAC]" />
      <ApplyCodeForm />
      <div className="my-4 border border-[#ACACAC]" />
      <div className="flex justify-between mb-4 mt-6">
        <p className="font-medium text-lg">Subtotal</p>
        <p className="font-medium text-lg">Shipping</p>
      </div>
      <div className="flex justify-between mb-6">
        <h4 className="font-medium text-lg">$49.80</h4>
        <h4 className="font-medium text-lg">$7.24</h4>
      </div>
      <div className="my-4 border border-[#ACACAC]" />
      <div className="flex justify-between mt-6">
        <div className="flex flex-col">
          <h4 className="font-medium text-lg">$49.80</h4>
          <p className="text-[#ACACAC] text-sm">Including $2.24 in taxes</p>
        </div>
        <h2 className="text-2xl font-semibold">$59.28</h2>
      </div>
      <div className="h-12" />
      <PrimaryButton
        classes="p-3 min-w-[200px] w-[60%] mx-auto block !p-3"
        text="Place order"
        onClick={nextStageHandler}
      />
    </div>
  );
};
