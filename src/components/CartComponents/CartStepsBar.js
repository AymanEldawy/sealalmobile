import React from 'react'
import { CheckIcon } from '../Icons'
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const CartStepsBar = ({ stage }) => {
  const { lang } = useContext(LanguageContext);
  console.log(stage)
  return (
    <div className="flex justify-between items-center min-h-[90px] mb-4 max-w-[500px] mx-auto">
      <div className='relative flex justify-center'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 0 ? "border-green-500" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 1 ? <CheckIcon className="text-green-500" /> : null}
        </span>
        <span className="capitalize absolute top-[110%] left-0 text-xs text-black">{fetchWord('checkout', lang)}</span>
      </div>
      <span className={`h-[1px] ${stage?.stage > 1 ? "bg-green-500" : "bg-[#CFCFCF]"} flex-1`} />
      <div className='relative'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 1 ? "border-green-500" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 2 ? <CheckIcon className="text-green-500" /> : null}
        </span>
        <span className="capitalize absolute top-[110%] -left-3 text-xs text-black">{fetchWord('addresses', lang)}</span>
      </div>
      <span className={`h-[1px] ${stage?.stage > 2 ? "bg-green-500" : "bg-[#CFCFCF]"} flex-1`} />
      <div className='relative'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 2 ? "border-green-500" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 3 ? <CheckIcon className="text-green-500" /> : null}
        </span>
        <span className="capitalize absolute top-[110%] -left-3 text-xs text-black">{fetchWord('payment', lang)}</span>
      </div>
      <span className={`h-[1px] ${stage?.stage > 3 ? "bg-green-500" : "bg-[#CFCFCF]"} flex-1`} />
      <div className='relative'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 3 ? "border-green-500" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 4 ? <CheckIcon className="text-green-500" /> : null}
        </span>
        <span className="capitalize absolute top-[110%] -left-1 text-xs text-black">{fetchWord('confirm', lang)}</span>
      </div>
    </div >
  )
}
