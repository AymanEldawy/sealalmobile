import React from 'react'
import { CheckIcon } from '../Icons'
import { useContext } from 'react';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

export const CartStepsBar = ({ stage }) => {
  const { lang } = useContext(LanguageContext);
  console.log(stage)
  return (
    <div className="flex justify-between items-center min-h-[90px] mb-8 max-w-[500px] mx-auto">
      <div className='relative flex justify-center'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 0 ? "border-black" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 1 ? <CheckIcon /> : null}
        </span>
        <span className="capitalize absolute top-[110%] left-0 text-xs text-black">{fetchWord('cart', lang)}</span>
      </div>
      <span className={`h-[1px] ${stage?.stage > 1 ? "bg-black" : "bg-[#CFCFCF]"} flex-1`} />
      <div className='relative'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 1 ? "border-black" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 2 ? <CheckIcon /> : null}
        </span>
        <span className="capitalize absolute top-[110%] -left-3 text-xs text-black">{fetchWord('addresses', lang)}</span>
      </div>
      <span className={`h-[1px] ${stage?.stage > 2 ? "bg-black" : "bg-[#CFCFCF]"} flex-1`} />
      <div className='relative'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 2 ? "border-black" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 3 ? <CheckIcon /> : null}
        </span>
        <span className="capitalize absolute top-[110%] -left-3 text-xs text-black">{fetchWord('payment', lang)}</span>
      </div>
      <span className={`h-[1px] ${stage?.stage > 3 ? "bg-black" : "bg-[#CFCFCF]"} flex-1`} />
      <div className='relative'>
        <span className={`flex items-center justify-center h-9 w-9 rounded-full border ${stage?.stage > 3 ? "border-black" : "border-[#C9C9C9]"}`}>
          {stage?.stage > 4 ? <CheckIcon /> : null}
        </span>
        <span className="capitalize absolute top-[110%] -left-1 text-xs text-black">{fetchWord('confirm', lang)}</span>
      </div>
    </div >
  )
}
