import { CardFlatIcon, PlusIcon } from '@/components/Icons';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord'
import React, { useState, useContext } from 'react'
import { PaymentItem } from './PaymentItem';
import { OrderSummary } from '../OrderSummary';
import { AddNewCard } from '@/components/ProfileComponents/MyCards/AddNewCard';

export const PaymentCardList = ({ banks, selectedPaymentCard, setSelectedPaymentCard }) => {
  const { lang } = useContext(LanguageContext);
  const [operation, setOperation] = useState(false)
  const handleDefault = (e) => {
    if(e.target.checked)
    // set selected payment card as default card
    console.log(selectedPaymentCard)
  }
  return (
    <div className="flex-[2]">
      {
        operation === 'create' ? (
          <AddNewCard onClickCancel={() => setOperation('')} />
        ) : (
          <>
            <div className=" border border-[#CFCFCF] rounded-xl overflow-hidden">
              <h3 className='p-4 flex gap-4 border-b border-[#CFCFCF] font-semibold'>
                <CardFlatIcon className="text-black" />
                {fetchWord('Registered_cards', lang)}
              </h3>
              <div className=''>
                {
                  banks?.map(bank => (
                    <PaymentItem key={bank?.id} bank={bank} selectedPaymentCard={selectedPaymentCard} setSelectedPaymentCard={setSelectedPaymentCard} />
                  ))
                }
              </div>
            </div>
            <button onClick={() => setOperation('create')} className="flex gap-3 items-center border border-[#CFCFCF] hover:bg-gray-100 p-6 rounded-2xl mt-8 w-full font-medium capitalize">
              <span className='h-6 w-6 flex items-center justify-center border border-inherit rounded-full'>
                <PlusIcon />
              </span>
              {fetchWord('add_new_card', lang)}
            </button>

            <label className='flex gap-2 mt-4 justify-end items-center capitalize'>
              <input onChange={handleDefault} type='checkbox' className="w-5 h-5" />
              {fetchWord('SET_DEFAULT', lang)}
            </label>
          </>
        )
      }
    </div>
  )
}
