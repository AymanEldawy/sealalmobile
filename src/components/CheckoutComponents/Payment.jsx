import React, { useState } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { SelectField } from './../Forms/SelectField';
import { InputField } from './../Forms/InputField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { OrderSummary } from './OrderSummary';

export const Payment = ({nextStageHandler}) => {
  const [method, setMethod] = useState('cash');
  const list = [{ id: 1, name: 'Access Bank' }];
  return (
    <div className="flex flex-wrap md:flex-nowrap mb-8 gap-4 lg:gap-12">
      <div className="flex-1 pt-6">
        <SectionTitle title="Payment" />
        <h3 className="mb-4">Pay With:</h3>
        <div className="flex mb-6">
          <label
            className={`text-[#ACACAC] items-center max-w-[160px] flex gap-1 flex-1 ${
              method === 'cash' ? 'text-black' : ''
            }`}
          >
            <input
              type="radio"
              name="method"
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 accent-primary"
              onChange={() => setMethod('cash')}
            />
            Cash
          </label>
          <label
            className={`text-[#ACACAC] items-center max-w-[160px] flex gap-1 flex-1  ${
              method === 'card' ? 'text-black' : ''
            }`}
          >
            <input
              type="radio"
              name="method"
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 accent-primary"
              onChange={() => setMethod('card')}
            />
            Card
          </label>
        </div>
        <SelectField placeholder="Access Bank" list={list} />
        <InputField
          label="Enter card Number"
          placeholder="3454 5454 5464 5464"
        />
        <PrimaryButton
          text="Pay USD59.28"
          classes="!p-4 rounded-md block w-full mt-8"
        />
        <p className="text-sm font-normal text-[#ACACAC] mt-4">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>
      <OrderSummary nextStageHandler={nextStageHandler}/>
    </div>
  );
};
