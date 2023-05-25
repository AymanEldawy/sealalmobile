import { CardFlatIcon, CheckIcon } from '@/components/Icons'
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useContext } from 'react';

export const PaymentItem = ({ bank, selectedPaymentCard, setSelectedPaymentCard }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <ul className={`flex justify-between items-start  py-4 border-b px-4 last:border-none cursor-pointer border-[#CFCFCF] ${selectedPaymentCard === bank?.id? "bg-gray-100" :"" }`} onClick={() => setSelectedPaymentCard(bank?.id)}>
      <li className='min-w-[30px] flex-col flex gap-2 items-start justify-center'>
        <span className={`w-5 h-5 flex items-center cursor-pointer justify-center rounded-full ${selectedPaymentCard === bank?.id ? "bg-green-500" : "border border-gray-400"}`}>
          <CheckIcon className={`w-3 h-3 ${selectedPaymentCard === bank?.id ? "text-white" : "text-[#CFCFCF]"}` }/>
        </span>
        <CardFlatIcon className="text-black " />
      </li>
      <li className='flex-[2] flex-col flex gap-2 items-start justify-center'>
        <span className=" w-full text-[10px] text-[#5E5E5E] text-center">{fetchWord('card', lang)}</span>
        <strong className="text-center w-full text-xs font-medium">{bank?.bank_name}</strong>
      </li>
      <li className='flex-1 flex-col flex gap-2 items-start justify-center'>
        <span className=" w-full text-[10px] text-[#5E5E5E] text-center">{fetchWord('vpn', lang)}</span>
        <strong className="text-center w-full text-xs font-medium">{bank?.vpn}</strong>
      </li>
      <li className='flex-1 flex-col flex gap-2 items-start justify-center'>
        <span className=" w-full text-[10px] text-[#5E5E5E] text-center">{fetchWord('Name', lang)}</span>
        <strong className="text-center w-full text-xs font-medium">{bank?.name}</strong>
      </li>
      <li className='flex-1 flex-col flex gap-2 items-start justify-center'>
        <span className=" w-full text-[10px] text-[#5E5E5E] text-center">{fetchWord('Date', lang)}</span>
        <strong className="text-center w-full text-xs font-medium">{bank?.date}</strong>
      </li>
    </ul>
  )
}
