import React, { useState, useContext } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { SelectField } from './../Forms/SelectField';
import { InputField } from './../Forms/InputField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { OrderSummary } from './OrderSummary';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const Payment = ({ nextStageHandler }) => {
  const { lang } = useContext(LanguageContext);
  const [method, setMethod] = useState('cash');
  const list = [{ id: 1, name: 'Access Bank' }];
  return (
    <div className="flex flex-wrap md:flex-nowrap mb-8 gap-4 lg:gap-12">
      <div className="flex-1 pt-6">
        <SectionTitle title="Payment" />
        <h3 className="mb-4">{fetchWord('Pay_With', lang)}:</h3>
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
            {fetchWord('Cash', lang)}
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
            {fetchWord('Card', lang)}
          </label>
        </div>
        <SelectField placeholder={fetchWord('Access_Bank', lang)} list={list} />
        <InputField
          label={fetchWord('cart_label', lang)}
          placeholder="3454 5454 5464 5464"
        />
        <PrimaryButton
          text={fetchWord('pay', lang)}
          classes="!p-4 rounded-md block w-full mt-8"
        />
        <p className="text-sm font-normal text-[#ACACAC] mt-4">
          {fetchWord('pay_message', lang)}
        </p>
      </div>
      <OrderSummary nextStageHandler={nextStageHandler} />
    </div>
  );
};
